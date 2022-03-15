// import { signIn, useSession } from "next-auth/react";
import { Button, FormattedMessage, NoPermission, Text } from "~/components";
import { canDo, canView, canEdit } from "@skawe";

const loginWrapper = {
  margin: "6rem auto",
  textAlign: "center",
  width: "450px",
};

export const CanDo = (props) => {
  const { data: getUser } = false;
  // no user login, display the login form

  if (!getUser && props.displayNoPermissionMessage) {
    return (
      <div style={loginWrapper}>
        <Text variant="h4">Please Login</Text>
        <Button size="small" onClick={() => signIn()}>
          <FormattedMessage id="login" />
        </Button>
      </div>
    );
  }

  // default permission, is the user allowed to perform this action?
  let permission = canDo(getUser?.user, props.action);

  // the permission is about viewing a document, check if the user is allowed
  if (props.document && props.action.indexOf("view") > -1) {
    // use the permission shortcut canView on the current user and requested document
    permission = canView(getUser?.user, props.document);
  }

  // the permission is about editing a document, check if the user is allowed
  if (props.document && props.action.indexOf("edit") > -1) {
    // use the permission shortcut canEdit on the current user and requested document
    permission = canEdit(getUser?.user, props.document);
  }

  // the user can perform the intented action in the component: display the component,
  // else: display a not allowed message
  if (permission) {
    return props.children;
  } else {
    return props.displayNoPermissionMessage ? <NoPermission /> : null;
  }
};

CanDo.defaultProps = {
  displayNoPermissionMessage: true,
};
