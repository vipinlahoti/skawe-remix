import { Link } from "remix";
import { Images, Text } from "~/components";

export const UsersAvatar = ({ user, link, size, className = "" }) => {
  const avatarUrl = user?.photoURL;

  const img = (
    <Images
      alt="user name"
      className={`${className} ${
        size === "xsmall"
          ? "h-6 w-6"
          : size === "small"
          ? "h-8 w-8"
          : size === "large"
          ? "h-48 w-48 object-cover"
          : "h-12 w-12"
      } inline-block drop-shadow-xl `}
      src={avatarUrl}
      rounded
    />
  );

  // const initials = (
  //   <Text
  //     noMargin
  //     variant="h6"
  //     className={`inline-flex items-center justify-center font-medium rounded-full drop-shadow-2xl bg-amber-400 text-black ${
  //       size === "xsmall"
  //         ? "h-6 w-6"
  //         : size === "small"
  //         ? "h-8 w-8"
  //         : size === "large"
  //         ? "h-40 w-40 text-7xl"
  //         : "h-12 w-12"
  //     }`}
  //   >
  //     VL
  //   </Text>
  // );

  const initials = () => {
    const defaultStyles =
      "inline-flex items-center justify-center font-serif tracking-tight rounded-full drop-shadow-2xl bg-amber-400 text-black";
    if (size === "xsmall") {
      return (
        <Text
          className={`${defaultStyles} text-lg font-semibold h-11 w-11`}
          noMargin
        >
          VL
        </Text>
      );
    } else if (size === "small") {
      return (
        <Text
          className={`${defaultStyles} text-lg font-semibold h-16 w-16`}
          noMargin
        >
          VL
        </Text>
      );
    } else {
      return (
        <Text
          className={`${defaultStyles} text-7xl font-bold h-40 w-40`}
          noMargin
        >
          VL
        </Text>
      );
    }
  };

  const avatar = avatarUrl ? img : initials();

  return <>{link ? <Link href="/">{avatar}</Link> : avatar}</>;
};
