// RootLayout.js
import './globals.css'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const metadata = {
  title: "Dino Facts App",
  description: "Explore fascinating dinosaur fossil facts with the Dino Facts App.",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://dino-facts.vercel.app",
    title: "Dino Facts App",
    description: "Explore fascinating dinosaur fossil facts with the Dino Facts App.",
    image: "https://dino-facts.vercel.app/dino-preview.png", // Ensure this image exists in your public folder
    site_name: "Dino Facts App"
  },
  social: {
    github: 'https://github.com/jrh89',
    twitter: 'https://twitter.com/GameDevJared89', // Corrected Twitter URL
    linkedin: 'https://www.linkedin.com/in/jaredhooker',
    youtube: 'https://www.youtube.com/@hookerhillstudios',
    email: 'hookerhillstudios@gmail.com'
  },
  locale: 'en-US',
  language: 'en',
  keywords: "custom software, software development, seo, web development, software engineer, custom, software, software, development, mobile apps, saas, websites, video games, custom software solutions, cloud based saas, cloud based software, cloud based software solutions, cloud based software development, ai development, custom software development, hooker hill studios, jared hooker",
  siteUrl: "https://dino-facts.vercel.app"
};

export default function RootLayout({ children }) {
  return (
    <>
      <head>
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

        {/* Twitter card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.openGraph.image} />

        {/* Additional meta tags */}
        <meta name="keywords" content={metadata.keywords} />

        <link rel="canonical" href={metadata.siteUrl} />

        {/* External styles */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

        {/* Google Analytics */}

      </head>
      <html lang={metadata.language} className={inter.className}>
        <body>
          {children}
        </body>
      </html>
    </>
  );
}
