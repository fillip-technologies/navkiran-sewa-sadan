import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

type JsonLdSchema = Record<string, unknown>;

export interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  imageAlt?: string;
  url?: string;
  ogDescription?: string;
  siteName?: string;
  twitterDescription?: string;
  schema?: JsonLdSchema | JsonLdSchema[];
}

const DEFAULT_SITE_URL = "https://navkiransevasadan.com";
const siteUrl =
  import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") ?? DEFAULT_SITE_URL;

const toAbsoluteUrl = (value?: string) => {
  if (!value) {
    return undefined;
  }

  try {
    return new URL(value, siteUrl).toString();
  } catch {
    return value;
  }
};

const normalizeCanonicalUrl = (url: string) => {
  const absoluteUrl = toAbsoluteUrl(url) ?? siteUrl;
  return absoluteUrl.endsWith("/") && absoluteUrl !== `${siteUrl}/`
    ? absoluteUrl.slice(0, -1)
    : absoluteUrl;
};

const Seo = ({
  title,
  description,
  keywords,
  image,
  imageAlt,
  url,
  ogDescription,
  siteName = "navkiransevasadan",
  twitterDescription,
  schema,
}: SeoProps) => {
  const { pathname } = useLocation();
  const canonicalUrl = normalizeCanonicalUrl(url ?? pathname);
  const imageUrl = toAbsoluteUrl(image);
  const schemas = Array.isArray(schema) ? schema : schema ? [schema] : [];
  const openGraphDescription = ogDescription ?? description;
  const twitterCardDescription = twitterDescription ?? description;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={openGraphDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteName} />
      {imageUrl ? (
        <>
          <meta property="og:image" content={imageUrl} />
          <meta property="og:image:secure_url" content={imageUrl} />
          {imageAlt ? <meta property="og:image:alt" content={imageAlt} /> : null}
          <meta property="og:image:type" content="image/jpeg" />
        </>
      ) : null}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={twitterCardDescription} />
      <meta name="twitter:url" content={canonicalUrl} />
      {imageUrl ? <meta name="twitter:image" content={imageUrl} /> : null}

      {schemas.map((schemaItem, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schemaItem)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;
