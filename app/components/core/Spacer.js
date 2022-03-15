export const Spacer = ({ spacing = "" }) => {
  let spacer;
  switch (spacing) {
    case "large":
      spacer = "p-16";
      break;
    case "medium":
      spacer = "p-8";
      break;
    default:
      spacer = "p-4";
  }

  return <div className={spacer}></div>;
};
