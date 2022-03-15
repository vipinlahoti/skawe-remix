import {
  Text,
  HeroJumbotron,
  SpacerBetween,
  Button,
  FormattedMessage,
  Section,
  TrustedBy,
  Container,
  Images,
} from "~/components";
import BannerImage from "~/assets/images/Hat-front-black__72990.png";
import PhoneImage from "~/assets/images/phone.png";

export const meta = () => {
  return {
    title: "Something cool",
    description: "This becomes the nice preview on search results.",
  };
};

export default function Index() {
  return (
    <>
      <HeroJumbotron
        title="Dresses to be noticed."
        description="Ready to dress to impress with our fabulous style collection."
        image={BannerImage}
      >
        <SpacerBetween>
          <Button type="buttonLink" path="/accounts/my-issues" icon>
            <FormattedMessage id="shop_now" />
          </Button>
          <Button
            variant="outline"
            type="buttonLink"
            path="/accounts/my-issues"
          >
            <FormattedMessage id="know_about_us" />
          </Button>
        </SpacerBetween>
      </HeroJumbotron>

      <Section>
        <TrustedBy />
        <Container spacing="top-large bottom-large" column={2}>
          <Images src={PhoneImage} alt="tickets" rounded circle />
          <div className="my-auto">
            <div className="mt-10 sm:mt-12 md:mt-0 px-4 sm:px-6 mx-auto max-w-7xl">
              <Text variant="h3">
                Our products comes from top fashion brand in the world.
              </Text>
              <Container spacing="top-small bottom-small" column={2}>
                <div>
                  <Text variant="h5">Start with the developer</Text>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </Text>
                </div>
                <div>
                  <Text variant="h5">Start with the developer</Text>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </Text>
                </div>
              </Container>
              <Container spacing="bottom-small" column={2}>
                <div>
                  <Text variant="h5">Start with the developer</Text>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </Text>
                </div>
                <div>
                  <Text variant="h5">Start with the developer</Text>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </Text>
                </div>
              </Container>
              <Button type="buttonLink" path="/accounts/my-issues" icon>
                <FormattedMessage id="know_more" />
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
