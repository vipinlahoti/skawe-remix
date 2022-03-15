import { Dropdown, UsersAvatar } from "components";

export const UsersMenu = ({ currentUser }) => {
  return (
    <div className="users-menu">
      {currentUser ? <UserLoggedInMenu currentUser={currentUser} /> : null}
    </div>
  );
};

const UserLoggedInMenu = ({ currentUser }) => {
  const menuItems = [
    {
      to: `/vipinlahoti`,
      labelId: "profile",
    },
  ];

  menuItems.push({
    labelId: "logout",
    itemProps: {
      onClick: () => currentUser.signOut(),
    },
  });

  return (
    <Dropdown
      id="user-dropdown"
      trigger={
        <>
          <UsersAvatar user={currentUser} link={false} size="xsmall" />
          <svg
            className="h-5 w-5 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </>
      }
      menuItems={menuItems}
    />
  );
};
