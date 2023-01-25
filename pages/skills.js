import dynamic from "next/dynamic";
import SidebarInfo from "../components/about/SidebarInfo";
import HeaderNavigation from "../components/header/HeaderNavigation";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ResumeCardTwo from "../components/Skills/SkillsTemp";
import LineItem from "../components/Resume/LineItem";
import Tag from "../components/tag/Tag";
import Seo from "../components/seo/Seo";
import Timeline from "../components/about/Timeline";
import ResumeExp from "../components/Resume/ResumeExp";
import ResumeEdu from "../components/Resume/ResumeEdu";
import Skills from "../components/Skills/Skills";

const index = () => {
  return (
    <section className="bg-homeBg dark:bg-homeTwoBg-dark min-h-screen  bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full">
      <Seo pageTitle="Resume" />
      {/* End Head for Seo */}

      <Header />
      {/* End header */}

      <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[180px]">
        <div className="col-span-12 lg:col-span-4 hidden lg:block lg:h-1/5 lg:sticky top-44">
          {/* profile sidebar */}
          <SidebarInfo />
        </div>
        <div className="col-span-12 lg:col-span-8">
          <HeaderNavigation />

          <div className="lg:rounded-2xl bg-white dark:bg-[#111111] shadow-xl">
            <div data-aos="fade">
              <div className="container px-4 sm:px-5 md:px-10 lg:px-14">
                <div className="py-12 ">
                  {/*Resume page title */}
                  <h2 className="after-effect after:left-[8.2rem] ">Skills</h2>
                  {/* <Skills /> */}
                  <div className="grid grid-cols-1  gap-x-6 gap-y-6 mt-[30px] ">
                    <ResumeCardTwo />

                    {/* resume items map */}
                  </div>
                </div>
              </div>
              {/* End .container for resume */}

              {/* End Skills */}

              <Footer />
              {/* Common Footer call here */}
            </div>
            {/* End fade */}
          </div>
          {/* End common-wrap */}
        </div>
      </div>
      {/* End main continer */}
    </section>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
