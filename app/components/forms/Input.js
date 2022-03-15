import FormItem from "./FormItem";

export const Input = ({ ...inputProperties }) => {
  const { type, required, name } = inputProperties;
  return (
    <FormItem {...inputProperties}>
      <input
        className="text-base px-6 py-3 block w-full rounded-md bg-gray-100 border-transparent focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
        type={type}
        required={required}
        name={name}
        autoComplete={`form-${name}`}
      />
    </FormItem>
  );
};
