import { useFormContext } from "react-hook-form";
import { Text, Container } from "~/components";
import FormComponent from "./FormComponent";

const FormGroup = (props) => {
  const methods = useFormContext();

  return (
    <Container>
      {props.name === "default" ? null : (
        <div className="bg-gray-100 p-4 rounded-md flex justify-between">
          <Text variant="h6" noMargin>
            {props.label}
          </Text>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      )}
      {props.fields.map((field, index) => (
        <FormComponent
          {...field}
          {...methods}
          key={index}
          layout={props.layout}
          currentUser={props.currentUser}
          formType={props.formType}
        />
      ))}
    </Container>
  );
};

export default FormGroup;
