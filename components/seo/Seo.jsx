import Head from "next/head";

const Seo = ({ pageTitle }) => (
  <>
    <Head>
      <title>{pageTitle && `${pageTitle} || Justin Brenner - Portfolio`}</title>
    </Head>
  </>
);

export default Seo;
