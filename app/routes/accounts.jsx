import { HeroJumbotron, Section, TrustedBy } from "~/components";
import { Outlet, redirect } from "remix";
import BannerImage from "~/assets/images/Hat-front-black__72990.png";

export const meta = () => {
  return {
    title: "Something cool",
    description: "This becomes the nice preview on search results.",
  };
};

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const pathName = url.pathname;
  if (pathName === "/accounts") {
    return redirect("/accounts/login");
  }
  return pathName;
};

export default function Accounts() {
  return (
    <>
      <HeroJumbotron image={BannerImage}>
        <div className="w-10/12">
          <Outlet />
        </div>
      </HeroJumbotron>
      <Section>
        <TrustedBy />
      </Section>
    </>
  );
}
