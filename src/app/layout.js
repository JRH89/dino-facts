// pages/_app.js or RootLayout.js

import { Inter } from 'next/font/google';
import { AuthProvider } from '../../context/AuthProvider';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import siteMetadata from '../../siteMetadata';
import Popup from '@/src/components/LeadCapture';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <>
      <head>
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
        <meta name="keywords" content={siteMetadata.keywords} />
        <meta name="google-adsense-account" content={siteMetadata.adsense} />
        <meta name="google-site-verification" content={siteMetadata.googleVerification} />
        <link rel="canonical" href={siteMetadata.siteUrl} />

        {/* External styles */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

        {/* Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${siteMetadata.googleAnalyticsId}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${siteMetadata.googleAnalyticsId}');
            `,
          }}
        />
      </head>
      <html lang={siteMetadata.language} className={inter.className}>
        <body className="bg-gray-800 text-neutral-950 select-none">
          <Popup />
          <AuthProvider>
            {children}
          </AuthProvider>
          <SpeedInsights />
          <Analytics />
        </body>
      </html>
    </>
  );
}
