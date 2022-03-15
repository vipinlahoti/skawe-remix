import { useState } from "react";
// import { useSession } from "next-auth/react";
import { isAdmin } from "@skawe";
import { CanDo } from "~/components";
import FormWrapper from "./FormWrapper";

const Forms = (props) => {
  const { data: getUser } = false;
  const [result, setResult] = useState({});

  const collectionName = props.collection.collectionName;
  const getFormType = props.documentId ? "update" : "create";
  const userRole = isAdmin() ? "all" : "own";
  const setNewOrOwn = getFormType === "update" ? userRole : "new";

  return (
    <CanDo
      action={`${collectionName}.${getFormType}.${setNewOrOwn}`}
      displayNoPermissionMessage={true}
    >
      <FormWrapper
        currentDocument={result}
        currentUser={getUser?.user}
        {...props}
      />
    </CanDo>
  );
};

export default Forms;
