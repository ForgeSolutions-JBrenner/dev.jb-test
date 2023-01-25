import { MdOutlineBusinessCenter, MdOutlineSchool } from "react-icons/md";
import { FaAward } from "react-icons/fa";

module.exports = [
  {
    id: 1,
    title: "Education",
    icon: <MdOutlineBusinessCenter />,
    items: [
      {
        id: 1,
        date: "2012-2015",
        title: "BSC, Chemical Engineering",
        place: "Calvin College | Grand Rapids, MI",
        overview:
          "Capstone project consisted of building a web application using Flask and Azure Cloud to accelerate reaction rate constants by prediction using input features and machine learning. Using kinetic datasets and feature representations, through the application we were able to predict activation, reaction, and dissociation energies with a 72% confidence rate from the model.",
        bg: "#FFF4F4",
      },

      {
        id: 2,
        date: "2017-2019",
        title: "BSC, Computer Science",
        school: "SNHU | Manchester, NH",
        overview:
          "I obtained this degree while working full-time at Stryker to add more focus to my resume on computer science. With this degree I broadened my scope of programming languages to Java and C++, while expanding my knowledge in testing tools like Maven and JUnit.",
        bg: "#FFF1FB",
      },
    ],
  },
  {
    id: 2,
    title: "Experience",
    icon: <MdOutlineSchool />,
    items: [
      {
        id: 1,
        date: "2015-Present",
        title: "Full Stack Engineer",
        company: "Stryker Corporation | Kalamazoo, MI",
        overview:
          "Lead Engineer maintaining and developing architecture and automation infrastructure to support self-service data analytics to improve operational efficiency within the organization.",
        roles: [
          {
            id: 1,
            date: "2019-2021",
            title: "Staff Software Engineer",
            company: "Stryker Corporation | Kalamazoo, MI",
          },
          {
            id: 2,
            date: "2018-2019",
            title: "Staff Electrical Engineer",
            company: "Stryker Corporation | Kalamazoo, MI",
          },
          {
            id: 3,
            date: "2016-2018",
            title: "Senior Electrical Engineer",
            company: "Stryker Corporation | Kalamazoo, MI",
          },
          {
            id: 4,
            date: "2015-2016",
            title: "Senior Failure Analysis Engineer",
            company: "Stryker Corporation | Kalamazoo, MI",
          },
        ],
        bg: "#EEF5FA",
      },

      {
        id: 2,
        date: "2020-Present",
        title: "Founder",
        company: "Forge Solutions LLC | Paw Paw, MI",
        overview:
          "I started this business in 2020 for a specific SaaS product (DIMSE Cloud) that I developed and sold, from there Forge Solutions became a client business focusing on Full stack Development, Cloud Computing, Data Engineering, Application Services.",

        roles: [],
        bg: "#F2F4FF",
      },

      {
        id: 3,
        date: "2013-2014",
        title: "Associate Analytical QC Chemist",
        company: "Perrigo Company | Allegan, MI",
        overview:
          "In this role I performed analyses for Impurity, Dissolution, content uniformity, blend uniformity, Disintegration, moisture% (with Karl fisher & Moisture balance) and Friability. ",

        roles: [],
        bg: "#EEF5FA",
      },
    ],
  },
  {
    id: 3,
    title: "Awards",
    icon: <FaAward />,
    items: [
      {
        id: 1,
        date: "2015-2017",
        title: "  Graphic Designer",
        place: "Web Graphy, Los Angeles, CA",
        bg: "#FCF4FF",
      },

      {
        id: 2,
        date: "2014 - 2015",
        title: "Jr. Web Developer",
        place: "Creative Gigs.",
        bg: "#FCF9F2",
      },

      {
        id: 3,
        date: "2015-2017",
        title: "Best Freelancer",
        place: "Fiver & Upwork Level 2 & Top Rated",
        bg: "#FCF4FF",
      },
    ],
  },
];
