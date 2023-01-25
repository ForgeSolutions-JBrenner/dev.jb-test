import { useTheme } from "next-themes";
import resumeData from "../../data/resumeData";
import { MdOutlineBusinessCenter } from "react-icons/md";

const ResumeExp = () => {
  return (
    <div className="">
      <div className="flex items-center space-x-2 mt-4 -ml-3">
        <div className="text-6xl text-data-blue dark:text-data-green ">
          <MdOutlineBusinessCenter />
        </div>
        <h4 className="text-5xl dark:text-white font-medium">Experience</h4>
      </div>
      <ol className="mt-[30px] relative border-l border-data-blue dark:border-data-green ">
        {resumeData
          .filter((n) => n.title === "Experience")
          .map((item) =>
            item.items.map((singleItem) => (
              <li key={singleItem.id} className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border bg-data-blue border-data-blue dark:border-data-green dark:bg-data-green"></div>
                <time className="mb-1 text-sm font-normal leading-none  ">
                  {singleItem.date}
                </time>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {singleItem.company}
                </h3>
                <h4 className="font-medium mt-1 text-lg">{singleItem.title}</h4>
                <p className="mb-4 font-normal ">{singleItem.overview}</p>
                {singleItem.roles?.length > 0 ? (
                  <>
                    <h4 className="font-medium">Other roles</h4>

                    <ol className="ml-4 " type="">
                      {singleItem.roles.map((role) => (
                        <li
                          key={role.id}
                          className="hover:underline hover:text-data-blue hover:cursor-pointer decoration-data-blue"
                        >
                          {role.title} | {role.date}
                        </li>
                      ))}
                    </ol>
                  </>
                ) : null}
                {/* 
              <a
                href="#"
                className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Learn more{" "}
                <svg
                  className="ml-2 w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a> */}
              </li>
            ))
          )}
      </ol>
    </div>
  );
};

export default ResumeExp;
