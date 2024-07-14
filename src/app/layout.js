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
    const script// pages/_app.js or RootLayout.js

    import { Inter } from 'next/font/google';
    import Head from 'next/head';
    import { AuthProvider } from '../../context/AuthProvider';
    import { SpeedInsights } from '@vercel/speed-insights/next';
    import { Analytics } from '@vercel/analytics/react';
    import siteMetadata from '../../siteMetadata';

    const inter = Inter({ subsets: ['latin'] });

    export default function RootLayout({ children }) {
      const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Hooker Hill Studios',
        url: 'https://www.hookerhillstudios.com',
        logo: 'https://www.hookerhillstudios.com/images/Logo-Blue.png',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-909-809-5222',
          contactType: 'Customer Service',
        },
        sameAs: [
          siteMetadata.social.github,
          siteMetadata.social.twitter,
          siteMetadata.social.linkedin,
          siteMetadata.social.youtube,
          siteMetadata.social.email,
        ],
      };

      return (
        <>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{siteMetadata.title}</title>
            <meta name="description" content={siteMetadata.description} />
            <meta name="robots" content={siteMetadata.robots} />

            {/* Open Graph tags */}
            <meta property="og:type" content={siteMetadata.openGraph.type} />
            <meta property="og:url" content={siteMetadata.openGraph.url} />
            <meta property="og:title" content={siteMetadata.openGraph.title} />
            <meta property="og:description" content={siteMetadata.openGraph.description} />
            <meta property="og:image" content={siteMetadata.openGraph.image} />
            <meta property="og:site_name" content={siteMetadata.openGraph.site_name} />

            {/* Twitter card */}
            <meta name="twitter:card" content={siteMetadata.twitter.card} />
            <meta name="twitter:title" content={siteMetadata.twitter.title} />
            <meta name="twitter:image" content={siteMetadata.openGraph.image} />

            {/* Additional meta tags */}
            {/* Add any additional meta tags as needed */}

            {/* Google structured data */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

            {/* External scripts */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-9Y9PWR4771"></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9Y9PWR4771');
            `,
              }}
            />

            {/* External styles */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

            {/* Canonical URL */}
            <link rel="canonical" href={siteMetadata.siteUrl} />
          </Head>
          <html lang={siteMetadata.language} className={inter.className}>
            <body className="bg-gray-800 text-neutral-950 select-none">
              <AuthProvider>
                {children}
              </AuthProvider>
              {/* Optional components */}
              <SpeedInsights />
              <Analytics />
            </body>
          </html>
        </>
      );
    }
 = document.createElement("script");
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
