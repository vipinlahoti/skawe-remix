import { Header, Footer } from "~/components";

export const Layout = ({ currentUser, children }) => (
  <>
    <Header currentUser={currentUser} />
    {children}
    <Footer currentUser={currentUser} />
  </>
);
