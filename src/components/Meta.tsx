import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta property='og:image' content='/images/vercel.svg' />
      <meta name='og:title' content={title} />
      <meta name='twitter:card' content='/images/vercel.svg' />
      <meta charSet='utf-8' />
      <link rel='icon' type='image/svg+xml' href='/favicon.ico' />
      <title>{`${title} | Company name`}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Company name | Secondary title",
  keywords: "add, lots, of, keywords, so, people, can, find, you",
  description: "Add a description with lots of searchable keywords",
};

export default Meta;
