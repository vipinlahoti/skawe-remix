import { Container, Button, Logo, Text, FormattedMessage } from "~/components";

const links = [
  {
    label: "issues",
    link: "/issues",
  },
  {
    label: "blogs",
    link: "/blogs",
  },
  {
    label: "contact",
    link: "/contact",
  },
];

export const Footer = () => (
  <footer>
    <Container spacing="top-small bottom-small">
      <div className="container md:flex justify-center md:justify-between">
        <div className="text-center md:text-left">
          <nav className="inline-block md:flex space-x-10 mb-4">
            {links.map((menu, index) => (
              <Button type="link" path={menu.link} key={index}>
                {menu.label}
              </Button>
            ))}
          </nav>
          <Text>
            <FormattedMessage id="copyright" />
          </Text>
        </div>
        <div className="flex items-center justify-center md:justify-end mt-6 md:mt-0">
          <Logo />
        </div>
      </div>
    </Container>
  </footer>
);
