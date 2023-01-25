import { MdOutlineBusinessCenter, MdOutlineSchool } from "react-icons/md";
import { AiOutlineProject, AiOutlineCloudServer } from "react-icons/ai";
import { FaLaptopCode, FaMagic } from "react-icons/fa";
import { FiDatabase, FiFigma } from "react-icons/fi";

module.exports = [
  {
    id: 1,
    title: "Frontend Development",
    icon: <FaLaptopCode size={26} />,
    items: [
      {
        id: 1,
        skill: "Javascript ES5/ES6",
        skillType: "Language",
      },
      {
        id: 1,
        skill: "Typescript",
        skillType: "Language",
      },
      {
        id: 2,
        skill: "React.js",
        skillType: "Framework",
        // bg: "#2DE1FC",
      },

      {
        id: 3,
        skill: "Vue.js",
        skillType: "Framework",
        // bg: "#2AFC98",
      },

      {
        id: 4,
        skill: "Next.js",
        skillType: "Framework",
      },
      {
        id: 5,
        skill: "Node.js",
        skillType: "Framework",
      },
      {
        id: 6,
        skill: "Ruby on Rails",
        skillType: "Framework",
      },
      {
        id: 7,
        skill: "React Native",
        skillType: "Mobile Framework",
      },
      {
        id: 8,
        skill: "Flutter",
        skillType: "Mobile Framework",
      },
      {
        id: 9,
        skill: "Boostrap",
        skillType: "Framework",
      },

      {
        id: 10,
        skill: "JSON",
        skillType: "Data Exchange",
      },
      {
        id: 11,
        skill: "HTML5",
        skillType: "Language",
      },
      {
        id: 12,
        skill: "CSS3",
        skillType: "Styling",
      },
      {
        id: 13,
        skill: "TailwindCSS",
        skillType: "Styling",
      },
      {
        id: 14,
        skill: "GoogleMaps",
        skillType: "Tools",
      },
      {
        id: 15,
        skill: "Mapbox",
        skillType: "Tools",
      },
      {
        id: 16,
        skill: "ArcGIS",
        skillType: "Tools",
      },
      {
        id: 17,
        skill: "Responsive Design",
        skillType: "Applied",
      },
      {
        id: 18,
        skill: "SEO",
        skillType: "Applied",
      },
    ],
  },
  {
    id: 2,
    title: "Backend Development",
    icon: <FaMagic size={26} />,
    items: [
      {
        id: 1,
        skill: "Node.js",
        skillType: "Language",
      },
      {
        id: 2,
        skill: "Express.js",
        skillType: "Language",
      },

      {
        id: 3,
        skill: "Python",
        skillType: "Language",
      },

      {
        id: 4,
        skill: "PHP",
        skillType: "Language",
      },
      {
        id: 5,
        skill: "SQL Server",
        skillType: "Database",
      },
      {
        id: 5,
        skill: "Postgre SQL",
        skillType: "Database",
      },
      {
        id: 6,
        skill: "NoSQL (AWS,GCP,Azure)",
        skillType: "Tools",
      },
      {
        id: 7,
        skill: "CDN (AWS,GCP,Azure)",
        skillType: "Tools",
      },
      {
        id: 8,
        skill: "API",
        skillType: "Protocol",
      },
      {
        id: 9,
        skill: "REST API",
        skillType: "Protocol",
      },
      {
        id: 10,
        skill: "GraphQL",
        skillType: "Protocol",
      },
      {
        id: 11,
        skill: "Microservices",
        skillType: "Architecture",
      },
    ],
  },
  {
    id: 3,
    title: "UI/UX Design",
    icon: <FiFigma size={26} />,
    items: [
      {
        id: 1,
        skill: "Information Architecture",
        skillType: "Applied",
      },

      {
        id: 2,
        skill: "User Flow",
        skillType: "Applied",
      },

      {
        id: 3,
        skill: "Wireframing & Prototyping",
        skillType: "Applied",
      },
      {
        id: 4,
        skill: "Maze",
        skillType: "Tools",
      },
      {
        id: 5,
        skill: "Figma",
        skillType: "Tools",
      },
      {
        id: 6,
        skill: "Sketch",
        skillType: "Tools",
      },
    ],
  },
  {
    id: 3,
    title: "Project Management & Version Control",
    icon: <AiOutlineProject />,
    items: [
      {
        id: 1,
        skill: "Jira",
        skillType: "Project Management",
      },
      {
        id: 2,
        skill: "Basecamp",
        skillType: "Project Management",
      },

      {
        id: 3,
        skill: "AWS CodePipeline",
        skillType: "CI/CD",
      },

      {
        id: 4,
        skill: "Azure DevOps",
        skillType: "CI/CD",
      },
      {
        id: 5,
        skill: "Git",
        skillType: "Version Control",
      },
      {
        id: 6,
        skill: "Perforce",
        skillType: "Version Control",
      },
    ],
  },
  {
    id: 4,
    title: "Cloud Engineering",
    icon: <AiOutlineCloudServer />,
    items: [
      {
        id: 1,
        skill: "Amazon Web Services (AWS)",
        skillType: "Platform",
      },

      {
        id: 2,
        skill: "Google Cloud (GCP)",
        skillType: "Platform",
      },

      {
        id: 3,
        skill: "Microsoft Azure",
        skillType: "Platform",
      },
      {
        id: 4,
        skill: "Digital Ocean",
        skillType: "Platform",
      },
      {
        id: 5,
        skill: "Networking",
        skillType: "Scalability",
      },
      {
        id: 6,
        skill: "Containerization",
        skillType: "Scalability",
      },
      {
        id: 7,
        skill: "Virtualization",
        skillType: "Scalability",
      },
      {
        id: 8,
        skill: "Security & Recovery",
        skillType: "Protection",
      },
    ],
  },
  {
    id: 5,
    title: "Data Engineering",
    icon: <FiDatabase />,
    items: [
      {
        id: 1,
        skill: "ETL",
        skillType: "Data Processing",
      },
      {
        id: 1,
        skill: "Statistics",
        skillType: "Data Analysis",
      },
      {
        id: 5,
        skill: "Data Lake / Data Warehouse",
        skillType: "Storage",
      },
      {
        id: 5,
        skill: "Data Vault 2.0",
        skillType: "Methodology",
      },
      {
        id: 5,
        skill: "Wherescape Red",
        skillType: "Tools",
      },
      {
        id: 6,
        skill: "Data Visualization",
        skillType: "Analytics",
      },
      {
        id: 2,
        skill: "Systematic Architecture",
        skillType: "Architecture",
      },

      {
        id: 3,
        skill: "Machine Learning",
        skillType: "Problem Solving",
      },
      {
        id: 4,
        skill: "AWS Glue, Athena, Sagemaker",
        skillType: "Tools",
      },
      {
        id: 4,
        skill: "Python",
        skillType: "Language",
      },
      {
        id: 4,
        skill: "Java",
        skillType: "Language",
      },
      {
        id: 4,
        skill: "Scala",
        skillType: "Language",
      },
      {
        id: 4,
        skill: "Hive",
        skillType: "Pipelines",
      },
      {
        id: 4,
        skill: "Presto",
        skillType: "Pipelines",
      },
      {
        id: 4,
        skill: "Spark",
        skillType: "Pipelines",
      },
    ],
  },
  {
    id: 5,
    title: "Leadership Skills",
    icon: <FiDatabase />,
    items: [
      {
        id: 1,
        skill: "Team Building",
        skillType: "Applied",
      },

      {
        id: 2,
        skill: "Communication",
        skillType: "Applied",
      },

      {
        id: 3,
        skill: "Mentorship",
        skillType: "Applied",
      },
      {
        id: 4,
        skill: "Problem Solving",
        skillType: "Applied",
      },
      {
        id: 5,
        skill: "Accountability & Integrity",
        skillType: "Applied",
      },
      {
        id: 6,
        skill: "Project Management",
        skillType: "Applied",
      },
      {
        id: 7,
        skill: "Problem-solving",
        skillType: "Applied",
      },
      {
        id: 8,
        skill: "Responsible Delegation",
        skillType: "Applied",
      },
      {
        id: 9,
        skill: "Influence",
        skillType: "Applied",
      },
    ],
  },
];
