import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  // redux,
  tailwind,
  nodejs,
  git,
  figma,
  // docker,
  postgresql,
  // rubyrails,
  // graphql,
  flyingbird,
  lbf,
  dashboardCRM,
  movie,
  reactWorld,
  laredoute,
  gotaf,
  capyweb,
  extia,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "A Propos",
  },
  {
    id: "projects",
    title: "Projets",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Développement Frontend",
    icon: frontend,
  },
  {
    title: "Développement Backend",
    icon: backend,
  },
  {
    title: "Design UI/UX",
    icon: ux,
  },
  {
    title: "Prototypage Logiciel",
    icon: prototyping,
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
  // {
  //   name: "Rails",
  //   icon: rubyrails,
  // },
  // {
  //   name: "graphql",
  //   icon: graphql,
  // },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Développeur Full-Stack",
    company_name: "gOtaf",
    icon: gotaf,
    iconBg: "#ffffff",
    date: "Septembre 2021 - Février 2022",
  },
  {
    title: "Développeur Full-Stack",
    company_name: "Capyweb",
    icon: capyweb,
    iconBg: "#ffffff",
    date: "Mars 2022 - Janvier 2023",
  },
  {
    title: "Ingénieur Consultant",
    company_name: "Extia",
    icon: extia,
    iconBg: "#ffffff",
    date: "Depuis Janvier 2023",
  },
  {
    title: "Dévelopeur Front-End",
    company_name: "La Redoute",
    icon: laredoute,
    iconBg: "#ffffff",
    date: "Janvier 2023 - Octobre 2024",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Flying Bird",
    description:
      "Inspiré du célèbre jeu mobile 'Flappy Bird'. Codé en HTML, CSS et JavaScript avec l'utilisation de Canvas.",
    tags: [
      {
        name: "html",
        color: "red-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
    ],
    image: flyingbird,
    repo: "https://github.com/WarrenB59/FlyingBird",
    demo: "https://myflyingbird.netlify.app/",
  },
  {
    id: "project-2",
    name: "La Boutique Française",
    description:
      "Un site de vente en ligne de produits français. Codé en PHP, Symfony et Twig.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "Symfony",
        color: "blue-text-gradient",
      },
      {
        name: "twig",
        color: "green-text-gradient",
      },
    ],
    image: lbf,
    repo: "https://github.com/WarrenB59/laBoutiqueFrancaise",
    demo: "https://vimeo.com/1031222008?share=copy",
    // demo: "https://laboutiquefrancaise.go.yo.fr/",
  },
  {
    id: "project-3",
    name: "Dashboard CRM",
    description:
      "Un tableau de bord qui permet aux utilisateurs de gérer leurs données CRM et contient des statistiques, un calendrier et un tableau Kanban.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "antdesign",
        color: "red-text-gradient",
      },
      {
        name: "graphql",
        color: "pink-text-gradient",
      },
    ],
    image: dashboardCRM,
    repo: "https://github.com/WarrenB59/app-crm",
    demo: "https://globex-dashboard-crm.netlify.app/",
  },
  {
    id: "project-4",
    name: "React Movies",
    description: `Une single-page application qui permet aux utilisateurs de chercher le film de leur choix et de visualiser ses details. Cette application utilise une API.`,
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
    image: movie,
    repo: "https://github.com/WarrenB59/react-movies",
    demo: "https://myreactmoviesproject.netlify.app/",
  },
  {
    id: "project-5",
    name: "React World",
    description:
      "Une SPA qui permet de voir les pays du monde et leurs capitales respectives en utilisant une API de type REST.",
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
    image: reactWorld,
    repo: "https://github.com/WarrenB59/react-world",
    demo: "https://react-world-app.netlify.app/",
  },
];

export { services, technologies, experiences, projects };
