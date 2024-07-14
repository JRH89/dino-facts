// metadata.js

const metadata = {
    title: "Dino Facts App",
    description: "Explore fascinating dinosaur fossil facts with the Dino Facts App.",
    robots: "index, follow",
    openGraph: {
        type: "website",
        url: "https://dino-facts.vercel.app",
        title: "Dino Facts App",
        description: "Explore fascinating dinosaur facts with the Dino Facts App.",
        image: "/dino-preview.png", // Ensure this image exists in your public folder
        site_name: "Dino Facts App"
    },
    social: {
        github: 'https://github.com/jrh89',
        twitter: 'https://twitter.com/GameDevJared89', // Corrected Twitter URL
        linkedin: 'https://www.linkedin.com/in/jaredhooker',
        youtube: 'https://www.youtube.com/@hookerhillstudios',
        email: 'hookerhillstudios@gmail.com'
    },
    locale: 'en-US'
};

export default metadata;
