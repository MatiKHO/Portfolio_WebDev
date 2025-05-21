
const person = {
  firstName: "Matías",
  lastName: "Gómez",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/images/avatar.jpg",
  email: "matiasgsdev@gmail.com",
  location: "Europe/Madrid", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Spanish", "English", "French"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/MatiKHO",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/matias-gomez-suarez/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/ImHideOnTop",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Making your dream site a reality, one line of code at a time.</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">QHCLN Project</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <> I'm Matías Gómez, Full Stack Web Developer & UX/UI Designer.
      <br /> I craft seamless user experiences and bring digital ideas to reality.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "About me",
    description: (
      <>
        I'm a Full Stack Web Developer with a passion for crafting seamless user experiences and bringing digital ideas to life. My work bridges the worlds of UX/UI design, interactive development, and gaming, transforming complex problems into intuitive, engaging solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Freelancer",
        timeframe: "Present",
        role: "Full Stack Web Developer",
        achievements: [
          <>
           Developed and deployed 3+ fully responsive web applications using React, Node.js, and PostgreSQL, with mobile-first design principles.
          </>,
          <>
            Integrated multiple third-party APIs (e.g., Stripe, Google Maps, Auth0) into client platforms for seamless user experiences
          </>,
          <>
          Redesigned and optimized an existing website for a national e-sports team, resulting in a 50% increase in user engagement.
          </>,
        ],
        images: [],
      },
      {
        company: "BISTEC",
        timeframe: "2021 - 2024",
        role: "General Manager",
        achievements: [
          <>
            Led a team of 5 people to run a successful restaurant branch in Pozuelo de Alarcón, Madrid. 
            My leadership and strategic planning resulted in a 20% increase in customer satisfaction ratings in Google.
            
          </>,
          <>
            Order management, staff supervision, and customer service.
          </>,
          <>
            Implementation of digital tools to optimize order processing.
            Increased sales by 30% in the last year through customer loyalty strategies.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Bistec Bar de Carnes",
            width: 16,
            height: 9,
          },
        ],
      },
      
    ],
  },
  studies: {
    display: true, 
    title: "Studies",
    institutions: [
      {
        name: "The Bridge | Digital Talent Accelerator",
        description: <>Studied Full Stack Web Development Bootcamp | 2025</>,
      },
      {
        name: "eDX | Montreal University",
        description: <>Studied an online course in UX/UI Design | 2024</>,
      },
      {
        name: "IEBS",
        description: <>Studied Digital Marketing and Esports Management | 2021</>,
      },
      {
        name: "Málaga University | Faculty of Economics and Business",
        description: <>Studied Economic Sciences | 2019</>,
      }
    ],
  },
  technical: {
    display: true, 
    title: "Technical skills",
    skills: [
      {
        title: "UX/UI Design",
        description: <>QHCLN Web App Redesign Project with React + HeroUI + Render and with AI chatbot integrated.</>,
        images: [
          {
            src: "/images/projects/project-01/qhcln.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/eventbot.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Full Stack Web Development",
        description: <>Building next gen apps with the MERN stack: Mongodb + Express.js + React + Node.js.</>,
        images: [
          {
            src: "/images/projects/project-01/lolhub.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Multidisciplinary app developer",
        description: <>Able to develop any kind of websites and apps.</>,
        images: [
          {
            src: "/images/projects/project-01/coffe-blog.png",
            alt: "Coffe Blog",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/music-planner.png",
            alt: "Music Planner",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/ninja-escape.png",
            alt: "Ninja Escape",
            width: 16,
            height: 9,
          },
        ],
      },
      
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
