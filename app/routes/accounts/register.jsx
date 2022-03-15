import { FormattedMessage, Spacer, Text, Button, Input } from "~/components";
import { Form } from "remix";
import { User } from "~/skawe/users/init";

export const meta = () => {
  return {
    title: "Register now",
  };
};

export async function action({ request }) {
  const formData = await request.formData();
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  console.log({ username, email, password });
  return User.push({ username, email, password });
  // return { username, email, password };
}

export default function Register() {
  const schema = [
    {
      type: "text",
      name: "username",
      required: true,
    },
    {
      type: "email",
      name: "email",
      required: true,
    },
    {
      type: "password",
      name: "password",
      required: true,
    },
  ];

  return (
    <>
      <Text variant="h3">
        <FormattedMessage id="register_title" />
      </Text>
      <Form method="post">
        {schema.map((field) => (
          <Input key={field.name} {...field} />
        ))}
        <Button className="w-full">
          <FormattedMessage id="sign_up" />
        </Button>
      </Form>

      <Spacer />
      <Text>
        <FormattedMessage id="already_have_account" />{" "}
        <Button type="link" path="/accounts/login">
          <FormattedMessage id="sign_in_here" />
        </Button>
      </Text>
    </>
  );
}
