import {
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
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
    name: "docker",
    icon: docker,
  },
  {
    name: "python",
    icon: python,
  }
];

const education = [
  {
    title: "Bachelor of Science",
    company_name: "University of Goettingen",
    icon: uni_goe,
    iconBg: "#E6DEDD",
    date: "October 2022 - Present",
    location: "Göttingen, Germany",
    points: [
      "Student of Applied Data Science.",
    ],
  },
  {
    title: "Fachhochschulreife",
    company_name: "Berufskolleg Schloß Neuhaus",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, education, experiences, testimonials, projects };
