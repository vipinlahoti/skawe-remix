import FormItem from "./FormItem";

export const Password = ({ ...inputProperties }) => {
  const { register, required, name } = inputProperties;
  return (
    <FormItem {...inputProperties}>
      <input
        className="text-base mt-1 px-6 py-3 block w-full rounded-md bg-gray-100 border-transparent focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
        type="password"
        autoComplete="off"
        {...register(name, {
          required: required ? `Field “${name}” is required.` : required,
        })}
      />
    </FormItem>
  );
};
