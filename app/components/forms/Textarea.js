import FormItem from "./FormItem";

export const Textarea = ({ ...inputProperties }) => {
  return (
    <FormItem {...inputProperties}>
      <textarea
        className="resize-none text-base mt-1 px-6 py-3 block w-full rounded-md bg-gray-100 border-transparent focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
        rows="5"
      ></textarea>
    </FormItem>
  );
};
