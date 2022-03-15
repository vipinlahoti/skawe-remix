import {
  HeroJumbotron,
  Section,
  Container,
  Spacer,
  Text,
  UsersAvatar,
} from "~/components";

const user = {
  email: "vipi.nsl2787@gmail.com",
  photoURL: "https://avatars.githubusercontent.com/u/2918394?v=4",
  name: "Anjali Lahoti",
  slug: "vipinlahoti",
  displayName: "Anjali L",
  designation: "Hair stylist",
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  blogs: "312",
  shots: "127",
  followers: "3.5k",
  following: "120",
};

export default function UserProfile() {
  return (
    <>
      <HeroJumbotron />

      <Section>
        <Container spacing="bottom-medium">
          <div className="mx-auto -mt-20">
            <div className="pb-4 md:pb-0 text-center max-w-3xl mx-auto">
              <UsersAvatar user={user} size="large" className="mx-auto" />
              <Spacer spacing="medium-top" />

              <Text variant="h4" noMargin>
                {user.name}
              </Text>
              <Text variant="lead">{user.designation}</Text>
              <Text className="space-x-6">
                <span>
                  <span className="font-bold">{user.blogs}</span> Blogs
                </span>
                <span>
                  <span className="font-bold">{user.followers}</span> Followers
                </span>
                <span>
                  <span className="font-bold">{user.following}</span> Following
                </span>
              </Text>
              <Text>{user.about}</Text>
            </div>
          </div>
        </Container>
        <div className="h-80"></div>
      </Section>
    </>
  );
}
