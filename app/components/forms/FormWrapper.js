import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import {
  canDo,
  useCreate,
  useUpdate,
  getEditableFields,
  getInsertableFields,
  capitalize,
} from "@skawe";
import { Text, Button, FormattedMessage } from "~/components";
import intersection from "lodash/intersection";
import sortBy from "lodash/sortBy";
import pick from "lodash/pick";
import compact from "lodash/compact";
import filter from "lodash/filter";
import uniq from "lodash/uniq";
import map from "lodash/map";
import FormGroup from "./FormGroup";

const FormWrapper = ({
  fields,
  documentId,
  mutation,
  schema,
  collection,
  currentDocument,
  currentUser,
  layout,
  showDelete,
  buttonText,
  successCallback,
  cancelCallback,
}) => {
  const [document, setDocument] = useState(currentDocument);

  const methods = useForm({
    defaultValues: currentDocument,
    mode: "onChange",
  });

  const collectionName = collection.collectionName;
  const typeName = collection.typeName;

  // return the current schema based on either the schema or collection prop
  const getSchema = () => {
    return schema ? schema : collection.schema.obj;
  };

  // return the mutation based on either the schema or collection prop
  const getMutation = () => {
    return mutation ? mutation : collection.mutation;
  };

  // if a document is being passed, this is an update form
  const getFormType = () => {
    return documentId ? "update" : "create";
  };

  // get form fields
  const getFieldNames = () => {
    // get all editable/insertable fields (depending on current form type)
    let relevantFields =
      getFormType() === "update"
        ? getEditableFields(getSchema(), currentUser, document)
        : getInsertableFields(getSchema(), currentUser);

    // if 'fields' prop is specified, restrict list of fields to it
    if (typeof fields !== "undefined" && fields.length > 0) {
      relevantFields = intersection(relevantFields, fields);
    }

    return relevantFields;
  };

  // get group names associated to field names
  const getFieldGroups = () => {
    const schema = getSchema();

    // build fields array by iterating over the list of field names
    let fields = getFieldNames().map((fieldName) => {
      // get schema for the current field
      const fieldSchema = schema[fieldName];
      fieldSchema.name = fieldName;

      // intialize properties
      let field = {
        name: fieldSchema.label ? fieldSchema.label : fieldName,
        layout: layout,
        input: fieldSchema.input,
        max: fieldSchema.max,
        order: fieldSchema.order,
        required: fieldSchema.required,
      };

      // replace empty value, by the default value from the schema
      if (fieldSchema.defaultValue && field.value === "") {
        field.value = fieldSchema.defaultValue;
      }

      // add options if they exist
      if (fieldSchema.options) {
        field.options =
          typeof fieldSchema.options === "function"
            ? fieldSchema.options.call(fieldSchema)
            : fieldSchema.options;
      }

      // add group
      if (fieldSchema.group) {
        field.group = fieldSchema.group;
      }

      // add description
      if (fieldSchema.description) {
        field.description = fieldSchema.description;
      }

      // if disabled
      if (fieldSchema.disabled) {
        field.disabled = fieldSchema.disabled;
      }

      return field;
    });

    fields = sortBy(fields, "order");

    // get list of all groups used in current fields
    let groups = compact(uniq(map(fields, "group")));

    // for each group, add relevant fields
    groups = groups.map((group) => {
      group.label = group.label || group.name;
      group.fields = filter(fields, (field) => {
        return field.group && field.group.name === group.name;
      });
      return group;
    });

    // add default group
    groups = [
      {
        name: "default",
        label: "default",
        order: 0,
        fields: filter(fields, (field) => {
          return !field.group;
        }),
      },
    ].concat(groups);

    // sort by order
    groups = sortBy(groups, "order");

    return groups;
  };

  // submit form handler
  const submitForm = async (data) => {
    const getFields = getFieldNames();

    try {
      // complete the data with values from custom components
      const dataSet = {
        ...pick(document, ...getFields),
        ...data,
      };

      const options = {
        collection,
        currentUser,
        documentId,
        document: dataSet,
        schema: getSchema(),
      };

      if (getFormType() === "create") {
        // new document form
        useCreate(options);
        methods.reset();
        if (successCallback) successCallback(options.document);
      } else {
        // update document form
        useUpdate(options);
        if (successCallback) successCallback(document);
      }
    } catch (error) {
      console.log("submitForm error //== ", error);
    }
  };

  const deleteDocument = async () => {
    const options = {
      collection,
      documentId,
    };
    console.log(
      "🚀 ~ file: FormWrapper.js ~ line 192 ~ deleteDocument",
      options
    );
    if (successCallback) successCallback(document);
  };

  // default props
  const getCommonProps = (group) => {
    return {
      ...group,
      key: group.name,
      document: document,
      formType: getFormType(),
      currentUser,
      layout,
    };
  };

  const fieldGroups = getFieldGroups();

  return (
    <div className={`document-${getFormType()}-${typeName}`}>
      <Text variant="h4">{capitalize(`${getFormType()} ${typeName}`)}</Text>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(submitForm)}>
          <fieldset>
            {fieldGroups &&
              fieldGroups.map((group) => (
                <FormGroup {...getCommonProps(group)} />
              ))}
            {cancelCallback ? (
              <a className="form-cancel" onClick={cancelCallback}>
                Cancel
              </a>
            ) : null}
            {showDelete &&
            canDo(currentUser, `${collectionName}.delete.own`) ? (
              <Button
                onClick={deleteDocument}
                type="flat"
                textColor="red"
                className={`mr-6 delete-link ${collectionName}-delete-link`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                <FormattedMessage id="forms.delete" />
              </Button>
            ) : null}
            <Button type="submit" className="mt-12 w-full">
              {buttonText ? (
                <FormattedMessage id={buttonText} />
              ) : (
                <FormattedMessage id="submit" />
              )}
            </Button>
          </fieldset>
        </form>
      </FormProvider>
    </div>
  );
};

FormWrapper.defaultProps = {
  layout: "vertical",
  showDelete: false,
};

export default FormWrapper;
