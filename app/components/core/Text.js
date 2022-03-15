export const Text = ({
  variant,
  noMargin = false,
  bold = false,
  className = "",
  children,
}) => {
  const defaultClass =
    "inline after:bg-amber-400 after:absolute after:w-full after:left-0 after:-bottom-1 after:-z-10 font-serif text-black dark:text-white";

  if (variant === "h1") {
    return (
      <div className={`${noMargin ? "" : "mb-12"}`}>
        <div className={`relative inline`}>
          <h1
            className={`text-7xl sm:text-9xl tracking-tight font-extrabold after:h-6 ${defaultClass} ${className}`}
          >
            {children}
          </h1>
        </div>
      </div>
    );
  } else if (variant === "h2") {
    return (
      <div className={`${noMargin ? "" : "mb-10"}`}>
        <div className={`relative inline`}>
          <h2
            className={`text-8xl tracking-tight font-extrabold after:h-6 ${defaultClass} ${className}`}
          >
            {children}
          </h2>
        </div>
      </div>
    );
  } else if (variant === "h3") {
    return (
      <div className={`${noMargin ? "" : "mb-8"}`}>
        <div className={`relative inline`}>
          <h3
            className={`text-6xl tracking-tight font-bold after:h-4 ${defaultClass} ${className}`}
          >
            {children}
          </h3>
        </div>
      </div>
    );
  } else if (variant === "h4") {
    return (
      <div className={`${noMargin ? "" : "mb-6"}`}>
        <div className={`relative inline`}>
          <h4
            className={`font-serif text-4xl tracking-tight font-bold after:h-3 ${className}`}
          >
            {children}
          </h4>
        </div>
      </div>
    );
  } else if (variant === "h5") {
    return (
      <h5
        className={`font-serif text-2xl tracking-tight font-semibold text-black dark:text-white ${
          noMargin ? "" : "mb-4"
        } ${className}`}
      >
        {children}
      </h5>
    );
  } else if (variant === "h6") {
    return (
      <h6
        className={`font-serif text-lg tracking-tight font-bold text-black dark:text-white ${
          noMargin ? "" : "mb-4"
        } ${className}`}
      >
        {children}
      </h6>
    );
  } else if (variant === "lead") {
    return (
      <p
        className={`text-xl text-gray-600 dark:text-gray-400 ${
          noMargin ? "" : "mb-8"
        } ${bold ? "font-bold" : "font-medium"} ${className}`}
      >
        {children}
      </p>
    );
  } else {
    return (
      <p
        className={`text-gray-800 dark:text-gray-200 ${
          noMargin ? "" : "mb-4"
        } ${bold ? "font-bold" : ""} ${className}`}
      >
        {children}
      </p>
    );
  }
};
