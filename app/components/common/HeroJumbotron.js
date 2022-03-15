import { useLocation } from "react-router-dom";
import {
  Container,
  Text,
  Images,
  Button,
  SpacerBetween,
  FormattedMessage,
} from "~/components";
import AvatarImage from "~/assets/images/avatar.jpeg";

export const HeroJumbotron = ({
  title,
  heading,
  description,
  extra,
  fullHeight = false,
  image,
  children,
}) => {
  const { pathname } = useLocation();
  console.log("🚀 ~ file: HeroJumbotron.js ~ line 22 ~ pathname", pathname);
  return (
    <>
      <div
        className={`absolute w-1/2 right-0 rounded-bl-6xl bg-amber-400 ${
          pathname === "/" ? "min-h-screen" : "h-80"
        }`}
      ></div>
      <Container
        spacing="top-xlarge bottom-large"
        column={2}
        className={`${pathname === "/" ? "min-h-screen" : ""}`}
      >
        <div className="my-auto">
          <div className="mb-2">
            {extra ? <Text variant="h6">{extra}</Text> : null}
            {title ? <Text variant="h1">{title}</Text> : null}
            {heading ? <Text variant="h3">{heading}</Text> : null}
            {description ? <Text variant="lead">{description}</Text> : null}
            {children}
          </div>
        </div>
        <div className="relative">
          {image ? (
            <>
              <Images src={image} alt={title} circle />

              <div className="inline-flex flex-col bg-white dark:bg-zinc-900 rounded-3xl p-8 drop-shadow-2xl absolute left-0 bottom-1/6">
                <div className="flex items-center">
                  <Button type="link" path="/user/vipinlahoti">
                    <Text variant="h5" noMargin>
                      Vipin Lahoti
                    </Text>
                  </Button>
                  <div className="h-3 w-3 rounded-full bg-green-500 ml-2"></div>
                  <div className="h-3 w-3 rounded-full bg-gray-300 ml-2"></div>
                </div>
                <Text>Hair specialist</Text>
                <SpacerBetween>
                  <Button
                    type="buttonLink"
                    path="/accounts/my-issues"
                    size="small"
                    icon
                  >
                    <FormattedMessage id="connect_now" />
                  </Button>
                </SpacerBetween>
              </div>

              <div className="flex flex-col bg-white dark:bg-zinc-900 rounded-3xl p-6 drop-shadow-2xl absolute top-1/6 right-0">
                <div className="inline-flex">
                  <Text variant="h6" noMargin>
                    1000+
                  </Text>
                  <span className="ml-1">
                    <Text>people joined</Text>
                  </span>
                </div>
                <div className="flex -space-x-2 overflow-hidden">
                  <div className="relative inline-block">
                    <Images
                      src={AvatarImage}
                      alt="avatar"
                      className="h-10 w-10 rounded-full ring-4 ring-white dark:ring-zinc-900 overflow-hidden"
                    />
                  </div>

                  <div className="relative inline-block">
                    <Images
                      src={AvatarImage}
                      alt="avatar"
                      className="h-10 w-10 rounded-full ring-4 ring-white dark:ring-zinc-900 overflow-hidden"
                    />
                  </div>

                  <div className="relative inline-block">
                    <Images
                      src={AvatarImage}
                      alt="avatar"
                      className="h-10 w-10 rounded-full ring-4 ring-white dark:ring-zinc-900 overflow-hidden"
                    />
                  </div>

                  <div className="relative inline-block">
                    <Images
                      src={AvatarImage}
                      alt="avatar"
                      className="h-10 w-10 rounded-full ring-4 ring-white dark:ring-zinc-900 overflow-hidden"
                    />
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </Container>
    </>
  );
};
