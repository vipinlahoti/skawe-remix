import { Input, Email, Password, Textarea } from "~/components";

const FormComponent = (props) => {
  const renderComponent = () => {
    switch (props.input) {
      case "text":
        return <Input {...props} />;
      case "email":
        return <Email {...props} />;
      case "password":
        return <Password {...props} />;
      case "textarea":
        return <Textarea {...props} />;
      default:
        return <Input {...props} />;
    }
  };

  return (
    <div className={`input-${props.name}`}>
      {props.beforeComponent ? props.beforeComponent : null}
      {renderComponent()}
      {props.afterComponent ? props.afterComponent : null}
    </div>
  );
};

export default FormComponent;
