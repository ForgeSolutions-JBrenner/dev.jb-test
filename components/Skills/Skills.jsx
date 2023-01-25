import React, { useState } from "react";
import { filter } from "../../data/brandSlideData";
import skillsData from "./skills.json";
import { FiSearch } from "react-icons/fi";
import { GiSkills } from "react-icons/gi";

const data = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Bob Johnson" },
  // additional data
];

const Skills = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  console.log(filteredData);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (event.target.value === "") {
      setFilteredData(data);
    } else {
      setFilteredData(filteredResults);
    }
  };

  return (
    <div className="">
      <div className="flex items-center space-x-2 mt-4 -ml-3">
        <div className="text-6xl text-data-blue dark:text-data-green ">
          <GiSkills />
        </div>
        <h4 className="text-5xl dark:text-white font-medium">Skill Search</h4>
      </div>
      <label htmlFor="" className="font-medium pl-2">
        Search Skills
      </label>
      <div className="relative">
        <input
          type="search"
          name="search"
          placeholder="Search..."
          className="w-auto h-10 pl-10 pr-5 text-sm rounded-lg appearance-none focus:outline-none  dark:bg-gray-800 border border-data-blue dark:border-data-green"
        />
        <button type="submit" className="absolute top-0 left-0 mt-3 ml-4">
          <FiSearch className="w-4 h-4 stroke-current" />
        </button>
      </div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
      />
      <h2 className="font-semibold">Frontend</h2>
      <ul>
        {filteredData.length > 0
          ? filteredData.map((item) => <li key={item.id}>{item.name}</li>)
          : "nothing herre for that parameter"}
      </ul>
    </div>
  );
};
// const Skills = () => {
//   const [query, setQuery] = useState("");
//   const [skills, setSkills] = useState();
//   const [data,setData] = useState(skillsData)

//   const handleChange = (e) => {
//     setQuery(e.target.value);
//     searchSkills(e.target.value);
//   };

//   function searchSkills(query) {
//     filter((dt) ))
//   }
//   return (
//     <div className="w-11/12 m-auto mt-40 flex flex-col md:flex-row justify-between items-start md:items-center gap-5 md:gap-0">
//       <input
//         className="border-2 border-data-blue rounded-full p-2"
//         placeholder="Search Skills"
//         onChange={handleChange}
//         type="text"
//       />
//       <div className="">
//         <h2 className="font-semibold">fronend</h2>
//         {skillsData
//           .filter((data) => {
//             if (query.toLowerCase() === "") {
//               return data;
//             } else if (data.skill.toLowerCase().includes(query) > 0) {
//               return data.skill.toLowerCase().includes(query);
//             } else {
//               return "";
//             }
//           })
//           .map((skill) => (
//             <>
//               <p key={skill.skill} className="">
//                 {skill.skill
//                   ? skill.skill
//                   : "Sorry, I do not have this skill but ask me about it and I will learn"}
//               </p>
//             </>
//           ))}
//       </div>
//     </div>
//   );
// };

export default Skills;
