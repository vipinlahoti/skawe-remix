import { FormattedMessage, Spacer, Text, Button, Input } from "~/components";
import { Form } from "remix";

export const meta = () => {
  return {
    title: "Sign In",
  };
};

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  return { email, password };
}

export default function Login() {
  const schema = [
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
        <FormattedMessage id="login_title" />
      </Text>
      <Form method="post">
        {schema.map((field) => (
          <Input key={field.name} {...field} />
        ))}
        <Button className="w-full">
          <FormattedMessage id="sign_in" />
        </Button>
      </Form>

      <Spacer />
      <Text noMargin>
        <FormattedMessage id="dont_have_account" />{" "}
        <Button type="link" path="/accounts/register">
          <FormattedMessage id="sign_up_here" />
        </Button>
        ?
      </Text>

      <Text>
        <FormattedMessage id="need_to_find_your" />{" "}
        <Button type="link" path="/accounts/forgot-password">
          <FormattedMessage id="password" />
        </Button>
        ?
      </Text>
    </>
  );
}
