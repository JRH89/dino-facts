// pages/_app.js (or RootLayout component)

import { Inter } from "next/font/google";
import Head from "next/head";
import { useEffect } from "react";
import metadata from "../../siteMetadata.js"; // Import metadata

const inter = Inter({ subsets: ["latin"] });

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hooker Hill Studios",
  url: "https://www.hookerhillstudios.com",
  logo: "https://www.hookerhillstudios.com/images/Logo-Blue.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-909-809-5222",
    contactType: "Customer Service",
  },
  sameAs: [
    metadata.social.github,
    metadata.social.twitter,
    metadata.social.linkedin,
    metadata.social.youtube,
    metadata.social.email,
  ],
};

export default function RootLayout({ children }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(organizationSchema);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="robots" content={metadata.robots} />

        {/* Open Graph tags */}
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={metadata.social.twitter} />
        <meta name="twitter:title" content={metadata.openGraph.title} />
        <meta name="twitter:description" content={metadata.openGraph.description} />
        <meta name="twitter:image" content={metadata.openGraph.image} />

        {/* Facebook */}
        <meta property="fb:app_id" content="{your-facebook-app-id}" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.image} />

        {/* LinkedIn */}
        <meta property="linkedin:card" content="summary_large_image" />
        <meta property="linkedin:site" content={metadata.social.linkedin} />
        <meta property="linkedin:title" content={metadata.openGraph.title} />
        <meta property="linkedin:description" content={metadata.openGraph.description} />
        <meta property="linkedin:image" content={metadata.openGraph.image} />

        {/* Additional meta tags */}
        {/* Add more meta tags as needed */}

      </Head>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
