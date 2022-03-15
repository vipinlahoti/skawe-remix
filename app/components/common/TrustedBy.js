import { Container, Text, SpacerBetween, Images } from "~/components";
import Auth0 from "~/assets/svg/auth0.svg";
import Facebook from "~/assets/svg/facebook.svg";
import Hashicorp from "~/assets/svg/hashicorp.svg";
import Mcdonalds from "~/assets/svg/mcdonalds.svg";
import Tripadvisor from "~/assets/svg/tripadvisor-horizontal.svg";

const customers = [Auth0, Facebook, Hashicorp, Mcdonalds, Tripadvisor];

export const TrustedBy = () => (
  <Container
    spacing="top-medium bottom-medium"
    className="justify-center text-center"
  >
    <Text variant="h6">Trusted by the best frontend teams</Text>
    <div className="flex flex-row justify-center">
      <SpacerBetween spacing="large">
        {customers.map((logos, index) => (
          <Images
            src={logos}
            alt="tickets"
            key={index}
            className="w-28 h-8"
            svg
          />
        ))}
      </SpacerBetween>
    </div>
  </Container>
);
