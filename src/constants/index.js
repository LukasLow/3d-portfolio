import {
  gitlab,
  linkedin,
  twitter,
  flask,
  github_logo,
  sql,
  java,
  airline,
  Grundschule,
  Hauptschule,
  HZS,
  BKSN,
  uni_goe,
  vlh,
  nrw,
  leuchtturm,
  chlopus,
  stvkh,
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  typescript,
  threejs,
  python,
  meta,
  shopify,
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
  gwdg,
  LS,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "edu",
    title: "Edu",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "publications",
    title: "Academia",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Student",
    icon: web,
  },
  {
    title: "Data Science",
    icon: mobile,
  },
  {
    title: "Physics",
    icon: backend,
  },
  {
    title: "Personal Growth",
    icon: creator,
  },
];
const sociallinks = [
  {
    platform: "Github",
    url: "https://github.com/LukasLow",
    logo: github_logo,
    username: "LukasLow",
  },
  {
    platform: "Gitlab",
    url: "https://gitlab.com/LukasLow",
    logo: gitlab,
    username: "LukasLow",
  },
  {
    platform: "Linkedin",
    url: "https://www.linkedin.com/in/lukas-lowschizky-17b289269/?originalSubdomain=de",
    logo: linkedin,
    username: "Lukas",
  },

];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github_logo,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "flask",
    icon: flask,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "sql",
    icon: sql,
  },
];

const education = [
  {
    title: "Bachelor of Science",
    company_name: "University of Goettingen",
    link: "https://www.uni-goettingen.de/de/594378.html",
    icon: uni_goe,
    iconBg: "#E6DEDD",
    date: "October 2023 - Present",
    location: "Göttingen, Germany",
    points: [
      "Student of Physics",
    ],
  },
  {
    title: "Bachelor of Science",
    company_name: "University of Goettingen",
    link: "https://www.uni-goettingen.de/de/640719.html",
    icon: uni_goe,
    iconBg: "#E6DEDD",
    date: "October 2022 - Septemper 2023",
    location: "Göttingen, Germany",
    points: [
      "Student of Applied Data Science",
      "switched to Physics",
    ],
  },
  {
    title: "Fachhochschulreife",
    company_name: "Berufskolleg Schloß Neuhaus",
    link: "https://www.bksn.de/vollzeitbildungsgaenge/hoehere-handelsschule/",
    icon: BKSN,
    iconBg: "#383E56",
    date: "2020-2022",
    location: "Paderborn, Germany",
    points: [

    ],
  },
  {
    title: "Fachoberschulreife",
    company_name: "Hans-Zulliger-Schule",
    icon: HZS,
    iconBg: "#383E56",
    date: "2016-2020",
    location: "Brilon, Germany",
    points: [

    ],
  },
  {
    title: "",
    company_name: "Hauptschule Georgschule",
    icon: Hauptschule,
    iconBg: "#383E56",
    date: "2013-2016",
    location: "Paderborn, Germany",
    points: [

    ],
  },
  {
    title: "",
    company_name: "Grundschule Riemeke-Theodor",
    icon: Grundschule,
    iconBg: "#383E56",
    date: "2008 - 2013",
    location: "Paderborn, Germany",
    points: [

    ],
  },
];

const experiences = [
  {
    title: "Student Assistant",
    company_name: "GWDG",
    link: "https://gwdg.de",
    icon: gwdg,
    iconBg: "#E6DEDD",
    date: "09/2023 - today",
    location: "Göttingen, Germany",
    points: [
      "Member of the Working Group “Application and Information Systems” (AG A)",
      "Assistant in the Apple Support Centre for the University Goettingen, Max Planck Society and the GWDG",
      // "Sorted",
    ],
  },
  {
    title: "Internship",
    company_name: "St. Vincenz Hospital",
    icon: stvkh,
    iconBg: "#E6DEDD",
    date: "10/2021 - 10/2021 (2 Weeks)",
    location: "Paderborn, Germany",
    points: [
      "Responsible for receiving, sorting, and distributing internal mail to appropriate departments and employees while maintaining confidentiality",
      "Entered and posted invoices and receipts in the company's accounting system with a high degree of accuracy and diligence while complying with tax and accounting regulations",
      "Sorted documents in the company's archives according to established criteria and guidelines and ensured proper labeling, organization, and filing",
    ],
  },
  {
    title: "Internship",
    company_name: "Accounting office Chlopus",
    icon: chlopus,
    iconBg: "#E6DEDD",
    date: "07/2021 - 08/2021 (6 Weeks)",
    location: "Paderborn, Germany",
    points: [
      "Entered and posted invoices and receipts in the company's accounting system with a high degree of accuracy and diligence while complying with tax and accounting regulations",
      "Assumed responsibility for entering cash books into the Stotax program and verified accuracy of data against supporting documents and receipts",
      "Sorted new law supplement supplies by subject area and degree of timeliness and updated existing law volumes to reflect latest changes",
    ],
  },
  {
    title: "Internship",
    company_name: "VLH Lohnsteuer-Hilfeverein",
    icon: vlh,
    iconBg: "#E6DEDD",
    date: "06/2021 - 07/2021 (2 Weeks)",
    location: "Paderborn, Germany",
    points: [
      "Assisted senior tax preparers with preparing and filing income tax returns for over 100 clients, ensuring compliance with federal and state tax laws and accuracy of calculations",
      "Supported tax preparation process by gathering relevant information from clients, verifying tax facts and allowances, and identifying potential deductions and credits",
      "Gained valuable experience and knowledge of tax regulations and best practices as an intern at a reputable tax service company",
    ],
  },
  {
    title: "Internship",
    company_name: "Tax office",
    icon: nrw,
    iconBg: "#E6DEDD",
    date: "03/2020 - 03/2020 (2 Weeks)",
    location: "Brilon, Germany",
    points: [
      "Responsible for receiving, sorting, and distributing internal mail to appropriate departments and employees while maintaining confidentiality",
      "Completing a sample tax return and learning how to fill out the tax forms and what receipts are needed",
      "Get a taste of the different areas of the tax office, such as income tax or sales tax",
    ],
  },
  {
    title: "Internship",
    company_name: "Familycenter Leuchtturm",
    icon: leuchtturm,
    iconBg: "#E6DEDD",
    date: "01/2019 - 02/2019 (3 Weeks)",
    location: "Brilon, Germany",
    points: [
      "Care of preschool children (mornings)",
      "Taking care of elementary school children (afternoons)",
      "Carrying out free time activities",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Airline Seatbooking",
    description:
      "How I learned Python with a group project at university Python is one of the most popular and versatile programming languages in the world. Whether it's for web development, data analysis, artificial intelligence, or game programming, Python has something for everyone. But what is the best way to learn Python? In this blog post, I want to tell you about my experience learning Python with a group project at university. The project: A web application using Flask and SQLAlchemy. The project was part of a web development course I took last semester. We were asked to create a web application that performed a specific function using the basics of HTML, CSS, JavaScript, and Python. We were allowed to pick our own topic, as long as it wasn't too complex or trivial. My group decided on a web application that would allow users to search, create, and rate recipes. We wanted to use it to create a platform where amateur cooks could share their passion and discover new dishes. To make this happen, we needed a backend Python framework and a database to store recipes and user data. We decided to use Flask as the backend framework and SQLAlchemy as the database abstraction layer. Flask is a minimalist framework that allows you to quickly and easily build web applications using Python. SQLAlchemy is a library that allows communicating with different databases through a unified interface. Challenges: Learning by doing The project was a big challenge for me because I had never worked with Python before. So not only did I have to learn the syntax and concepts of Python, but I also had to understand how Flask and SQLAlchemy work and how they interact with each other. Fortunately, there were many online resources to help me with this. I mainly used the official documentation of Python, Flask, and SQLAlchemy, as well as some tutorials and blogs from other developers. I learned a lot by reading code examples and experimenting with the code in my own editor. I quickly realized that Python is a very intuitive and elegant language, that offers a lot of flexibility. I especially liked the simple syntax, the use of indentation to structure the code, and the many useful functions and modules, that are included in the standard library. I also found out that Flask and SQLAlchemy work very well with Python and offer many possibilities to customize and extend the web development project and extend it. Of course there were also some difficulties and errors, that I had to fix. For example, in the beginning I had problems with understanding the difference between GET and and POST requests, routing URLs and dealing with forms and cookies. I also had to learn how to create and query database tables and query them, how to define relationships between tables and how to manage transactions. Sometimes I spent hours looking for a solution to a problem that later turned out to be a simple typo. But despite all the obstacles, the project was a lot of fun for me and gave me a sense of accomplishment. I could see how my web application was taking shape step by step and how it got more and more functions.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "red-text-gradient",
      },
      {
        name: "sql-lite",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: airline,
    source_code_link: "https://github.com/sosonjaa/brain_storm",
    website_link: "https://airline.lowsky.eu",
  },
];

const publications = [
  {
    name: "Mein neuer Weg für ein beständiges und Kreativeslernen",
    description:
      "Later will be something here. I promiss :)",
    tags: [
      {
        name: "Essay",
        color: "blue-text-gradient",
      },
      {
        name: "Lernstrategie",
        color: "green-text-gradient",
      },
      {
        name: "Uni-Kurs",
        color: "pink-text-gradient",
      },
    ],
    image: LS,
    // pdfURL: "http://localhost:5173/upload/LS_Lowschizky.pdf",
    // source_code_link: "https://github.com/sosonjaa/brain_storm",
    website_link: "/upload/LS_Lowschizky.pdf",
  },
];

export { services, technologies, education, experiences, testimonials, projects, sociallinks, publications };
