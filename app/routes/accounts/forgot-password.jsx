import { FormattedMessage, Spacer, Text, Button, Input } from "~/components";
import { Form } from "remix";

export const meta = () => {
  return {
    title: "Forgot password",
  };
};

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");

  return { email };
}

export default function ForgotPassword() {
  const schema = [
    {
      type: "email",
      name: "email",
      required: true,
    },
  ];

  return (
    <>
      <Text variant="h3">
        <FormattedMessage id="find_password_title" />
      </Text>
      <Form method="post">
        {schema.map((field) => (
          <Input key={field.name} {...field} />
        ))}
        <Button className="w-full">
          <FormattedMessage id="reset_your_password" />
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
