export const Container = ({
  spacing = "",
  column = 1,
  className = "",
  noGap,
  children,
}) => {
  // const { topSpacing, bottomSpacing } = Utils.spacing(spacing);
  let topSpacing = "";
  let bottomSpacing = "";
  if (spacing) {
    const setSpacing = spacing.split(" ");
    setSpacing.map((space) => {
      switch (space) {
        case "top-xlarge":
          topSpacing = "pt-48";
          break;
        case "top-large":
          topSpacing = "pt-32";
          break;
        case "top-medium":
          topSpacing = "pt-16";
          break;
        case "top-small":
          topSpacing = "pt-8";
          break;
        case "bottom-xlarge":
          bottomSpacing = "pb-48";
          break;
        case "bottom-large":
          bottomSpacing = "pb-32";
          break;
        case "bottom-medium":
          bottomSpacing = "pb-16";
          break;
        case "bottom-small":
          bottomSpacing = "pb-8";
          break;
        default:
          topSpacing = "";
          bottomSpacing = "";
      }
    });
  }

  return (
    <div
      className={`flex flex-col container mx-auto ${topSpacing} ${bottomSpacing} ${
        noGap ? "" : "gap-8"
      } ${className} ${column === 2 ? "grid grid-cols-1 lg:grid-cols-2" : ""} ${
        column === 3 ? "grid grid-cols-1 lg:grid-cols-3" : ""
      } ${column === 4 ? "grid grid-cols-1 lg:grid-cols-4" : ""} ${
        column === 5 ? "grid grid-cols-1 lg:grid-cols-5" : ""
      } ${column === 6 ? "grid grid-cols-1 lg:grid-cols-6" : ""} ${
        column === 7 ? "grid grid-cols-1 lg:grid-cols-7" : ""
      } ${column === 8 ? "grid grid-cols-1 lg:grid-cols-8" : ""} ${
        column === 9 ? "grid grid-cols-1 lg:grid-cols-9" : ""
      } ${column === 10 ? "grid grid-cols-1 lg:grid-cols-10" : ""}`}
    >
      {children}
    </div>
  );
};
