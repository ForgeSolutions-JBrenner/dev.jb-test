import { useTheme } from "next-themes";
import resumeData from "../../data/skillsData";

const ResumeCardTwo = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {resumeData.map((item) => (
        <div key={item.id}>
          <div className="flex items-center space-x-2 mb-4">
            <div className="text-6xl text-data-blue dark:text-data-green">
              {item.icon}
            </div>
            <h4 className="text-5xl dark:text-white font-medium">
              {item.title}
            </h4>
          </div>
          {/* end flex */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6">
            {item.items.map((singleItem) => (
              <div
                className=" py-2 pl-5 pr-3 space-y-2 mb-6 rounded-lg  dark:border-[#212425] dark:border-2 shadow-lg dark:shadow-md dark:shadow-[#464646]"
                style={{
                  background: `${theme === "dark" ? "transparent" : ""}`,
                }}
                key={singleItem.id}
              >
                <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                  {singleItem.date}
                </span>

                <h3 className="text-xl dark:text-white">{singleItem.skill}</h3>
                <p className="dark:text-[#b7b7b7] text-xs">
                  Skill Type: {singleItem.skillType}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default ResumeCardTwo;
