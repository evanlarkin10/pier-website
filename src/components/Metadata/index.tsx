import Head from "next/head";

interface MetadataProps {
  title: string;
  description: string;
  keywords: string;
}

const Metadata = ({ title, description, keywords }: MetadataProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={"website"} />
    </Head>
  );
};

export default Metadata;
