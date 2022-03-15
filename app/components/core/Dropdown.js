import { Menu, Transition } from "@headlessui/react";
import React from "react";
import { Link } from "remix";
import { FormattedMessage, Line } from "~/components";

/*
Note: `rest` is used to ensure auto-generated props from parent dropdown
components are properly passed down to MenuItem
*/
const Item = ({
  index,
  to,
  labelId,
  label,
  component,
  componentProps = {},
  itemProps,
  linkProps,
  ...rest
}) => {
  let menuComponent;

  const defaultStyles =
    "block cursor-pointer rounded-2xl px-4 py-2 font-medium text-black hover:bg-gray-500/10";

  if (component) {
    menuComponent = React.cloneElement(component, componentProps);
  } else if (labelId) {
    menuComponent = <FormattedMessage id={labelId} />;
  } else {
    menuComponent = <span className={defaultStyles}>{label}</span>;
  }

  return to ? (
    <Link href={to}>
      <a className={defaultStyles} role="menuitem" {...linkProps}>
        {menuComponent}
      </a>
    </Link>
  ) : (
    <span className={defaultStyles} role="menuitem" {...itemProps}>
      {menuComponent}
    </span>
  );
};

export const Dropdown = ({
  label,
  labelId,
  trigger,
  menuItems,
  menuContents,
  variant = "dropdown",
  buttonProps,
  ...dropdownProps
}) => {
  const menuBody = menuContents
    ? menuContents
    : menuItems.map((item, index) => {
        if (item === "divider") {
          return <Line key={index} />;
        } else {
          return <Item {...item} key={index} index={index} />;
        }
      });

  return (
    <div className="relative">
      <Menu {...dropdownProps}>
        {({ open }) => (
          <>
            <Menu.Button
              className="rounded-2xl flex items-center border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-transparent"
              id="user-menu"
              aria-expanded="false"
              aria-haspopup="true"
            >
              {trigger}
            </Menu.Button>
            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items
                className="origin-top-right absolute z-10 right-0 mt-2 w-48 p-2 rounded-2xl drop-shadow-xl backdrop-blur-sm bg-white/80 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="dropdown"
              >
                {menuBody}
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
};
