import { Link } from "remix";

const siteTitle = "Skawe";

export const Logo = () => (
  <Link
    to="/"
    className="relative text-3xl font-medium font-serif tracking-tighter text-black dark:text-white"
  >
    {siteTitle}
  </Link>
);
