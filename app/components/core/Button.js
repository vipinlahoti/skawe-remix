import { Link, NavLink } from "remix";

const ButtonLinkActive = ({ path, className, children, ...rest }) => {
  const defaultClass = className;
  const activeClassName =
    "relative after:bg-amber-400 after:h-1 after:absolute after:w-2/4 after:left-0 after:-bottom-1";
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive ? `${defaultClass} ${activeClassName}` : defaultClass
      }
      {...rest}
    >
      {children}
    </NavLink>
  );
};

const ButtonLink = ({ path, className, children, ...rest }) => (
  <Link to={path} className={className} {...rest}>
    {children}
  </Link>
);

export const Button = ({
  children,
  type,
  path,
  className = "",
  size = "",
  variant = "",
  icon = false,
  ...rest
}) => {
  const defaultClass =
    "whitespace-nowrap inline-flex items-center justify-center border-2 font-medium rounded-2xl focus:outline-none focus:ring-2 focus:ring-opacity-50 ring-gray-500 dark:ring-gray-100 ring-offset-white dark:ring-offset-black ring-offset-2 transition duration-200 ease-in-out capitalize";
  const buttonClass = `${defaultClass} ${
    size === "small" ? "leading-10 px-6" : "leading-10 px-12 py-1.5"
  } ${
    variant === "outline"
      ? "text-gray-700 hover:bg-black/[.08] dark:text-gray-400 dark:hover:text-white border-gray-700 hover:border-black dark:hover:border-white"
      : variant === "none"
      ? ""
      : "drop-shadow-xl bg-black text-white hover:text-black hover:bg-black/[.08] border-black hover:border-black dark:bg-white dark:text-black dark:hover:bg-transparent dark:hover:text-white dark:hover:border-white dark:border-white"
  }`;
  return (
    <>
      {type === "link" ? (
        <ButtonLinkActive
          path={path}
          className={`${defaultClass} border-transparent text-black dark:text-gray-300 dark:hover:text-white hover:after:bg-amber-400 relative hover:after:h-1 hover:after:absolute hover:after:w-2/4 hover:after:left-0 hover:after:-bottom-1 ${className}`}
        >
          {children}
        </ButtonLinkActive>
      ) : type === "buttonLink" ? (
        <ButtonLink path={path} className={buttonClass} {...rest}>
          {children}
          {icon ? (
            <span className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          ) : (
            ""
          )}
        </ButtonLink>
      ) : (
        <button
          type="submit"
          className={`${buttonClass} ${className}`}
          {...rest}
        >
          {children}
          {icon ? (
            <span className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          ) : (
            ""
          )}
        </button>
      )}
    </>
  );
};
