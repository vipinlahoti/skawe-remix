import Head from "next/head";
import { getSetting } from "@skawe/modules/settings";
import { getSiteUrl } from "@skawe/modules/utils";

export const HeadTags = (props) => {
  const url = !!props.url ? props.url : "Skawe";
  const title = !!props.title ? props.title : "Skawe";
  const description = !!props.description ? props.description : "tagline";

  // default image meta: logo url, else site image defined in settings
  let image = !!getSetting("siteImage")
    ? getSetting("siteImage")
    : getSetting("logoUrl");

  // overwrite default image if one is passed as props
  if (!!props.image) {
    image = props.image;
  }

  // add site url base if the image is stored locally
  if (!!image && image.indexOf("//") === -1) {
    image = getSiteUrl() + image;
  }

  return (
    <Head>
      <title>{title}</title>

      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* facebook */}
      <meta property="og:type" content="article" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {/* twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <link rel="canonical" href={url} />
    </Head>
  );
};
