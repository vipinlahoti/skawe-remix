import { getDisplayName } from "@skawe/users/helpers";
import Link from "next/link";

export const UsersName = ({ user }) => (
  <Link href="/">
    <a className="text-base font-medium text-indigo-600 hover:text-indigo-700">
      {getDisplayName(user)}
    </a>
  </Link>
);
