import { useState, useEffect } from "react";
// import { signIn, signOut, useSession } from "next-auth/react";
import {
  Container,
  Logo,
  Button,
  SpacerBetween,
  FormattedMessage,
  // UsersMenu,
} from "~/components";
// import { useAuthUser } from "@skawe/modules/useAuthUser";
import { routes } from "~/constants";

// const navLoggedIn = (currentUser) => <UsersMenu currentUser={currentUser} />;

const navLinks = (currentUser) => (
  <>
    <SpacerBetween>
      <Button type="link" path="/accounts/login">
        <FormattedMessage id="login" />
      </Button>
      <Button type="buttonLink" size="small" path="/accounts/register">
        <FormattedMessage id="register" />
      </Button>
    </SpacerBetween>
  </>
);

export const Header = ({ currentUser }) => {
  const [scrolled, setScrolled] = useState(false);
  // const { data: session } = useSession();

  const navbar = routes.navbar;

  const throttle = () => {
    const scrollPosition = window.pageYOffset; //window.scrollY is not compatible in ie :|
    if (scrollPosition > 10) setScrolled(true);
    else setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", throttle);
  }, []); // empty dependencies array means "run this once on first mount"

  return (
    <nav className={`w-full fixed z-30 top-0`}>
      <div className="p-4 rounded-2xl drop-shadow-xl backdrop-blur-sm bg-white/80 m-6">
        <Container>
          <div className="flex justify-between items-center">
            <Logo />
            <div className="space-x-8">
              {navbar.map((menu, index) => (
                <Button
                  className="capitalize"
                  type="link"
                  path={menu.href}
                  key={index}
                >
                  {menu.label}
                </Button>
              ))}
            </div>
            <div className="flex items-center justify-end">
              {navLinks(currentUser)}
            </div>
          </div>
        </Container>
      </div>
    </nav>
  );
};
