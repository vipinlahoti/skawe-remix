/*
 * @summary Layout for a single form item
 */
import { memo } from "react";
import { FormattedMessage } from "~/components";

const FieldLabel = ({ name, className = "" }) => (
  <span
    className={`text-gray-700 text-base font-medium block mb-2 ${className}`}
  >
    <FormattedMessage id={name} />
  </span>
);

const FieldDescription = ({ description }) => (
  <span className="text-xs font-medium text-gray-400">{description}</span>
);

const FormItem = ({
  layout = "vertical",
  name,
  charsRemaining,
  max,
  description,
  children,
  ...rest
}) => {
  if (layout === "inputOnly") {
    // input only layout
    return (
      <div className="mb-4">
        <div className="relative block">{children}</div>
        <FieldDescription description={description} />
      </div>
    );
  } else if (layout === "vertical") {
    // vertical layout
    return (
      <div className="mb-4">
        <label className="relative block">
          <FieldLabel name={name} />
          {children}
        </label>
        <FieldDescription description={description} />
      </div>
    );
  } else {
    // horizontal layout (default)
    return (
      <label className="relative block mb-4">
        <span className="flex items-center">
          <FieldLabel name={name} className="w-48" />
          {children}
        </span>
        <FieldDescription description="description" />
      </label>
    );
  }
};

export default memo(FormItem);
