const Intro = () => {
  return (
    <>
      <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <h2 className="after-effect after:left-52">About Me</h2>
        {/* About page title */}

        <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center  ">
          <div className="col-span-12 space-y-2.5">
            <h2 className="font-semibold text-xl">My Story</h2>
            <div className="lg:mr-16">
              <p className="text-gray-lite  dark:text-color-910 leading-7 ">
                I&apos;m a Michigander born and raised. Currently I live in a
                fairly small town (Allegan, MI) with my wife on a 500-acre row
                crop/hay/horse farm. When I am not in the office solving
                problems with code you can find me out in the woods scouting my
                target whitetail for the upcoming season, bailing hay, tilling
                some ground, or just relaxing by a fire with my wife and our
                dog.
              </p>
              <p className="text-gray-lite leading-7 mt-3 dark:text-color-910">
                I fell in love with web development in 2002 when I got my very
                first Gateway 2000 PC and quickly became fascinated with
                building cool apps using VB.NET and C#.
              </p>
              <p className="text-gray-lite leading-7 mt-3 dark:text-color-910">
                For the past 7 years I have been working for Stryker, one of the
                top Medtech companies in the US (ranked #9). I have held 5 roles
                within Stryker ranging from New Product Development to Digital
                Transformation, where in my current role I work as a full stack
                developer building web applications and data architecture
                solutions to improve our digital landscape for the organization.
              </p>
              <p className="text-gray-lite leading-7 mt-3 dark:text-color-910">
                Stryker is an amazing company, although my growth potential with
                them is limited and it&apos;s time for me to move on to a new
                opportunity that aligns with my goals and capabilities as a
                developer.
              </p>
              <h2 className="font-semibold text-xl mt-4">Education</h2>
              <p className="text-gray-lite leading-7 mt-3 dark:text-color-910">
                <strong>2012-2015: </strong>
                Graduated with a Bachelors Degree in Chemical Engineering from
                Calvin College.
                <br />
                <strong>Overview: </strong>Capstone project consisted of
                building a web application using Flask and Azure Cloud to
                accelerate reaction rate constants by prediction using input
                features and machine learning. Using kinetic datasets and
                feature representations, through the application we were able to
                predict activation, reaction, and dissociation energies with a
                72% confidence rate from the model.
              </p>
              <p className="text-gray-lite leading-7 mt-3 dark:text-color-910">
                <strong>2017-2019: </strong>
                Graduated with a Postbaccalaureate Degree in Computer Science
                from Southern New Hampshire University.
                <br />
                <strong>Overview: </strong>I obtained this degree while working
                full-time at Stryker to add more focus to my resume on computer
                science. With this degree I broadened my scope of programming
                languages to Java and C++, while expanding my knowledge in
                testing tools like Maven and JUnit.
              </p>
              <h2 className="font-semibold text-xl mt-4">
                Professional Interests
              </h2>
              <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                As a full stack developer with extensive experience and a
                diverse skill set, I am adept at utilizing a wide range of
                technologies to create high-performing and user-friendly web
                applications.{" "}
              </p>
              <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                My proficiency in modern web frameworks, back-end technologies,
                server-side languages, and cloud infrastructure (such as AWS,
                GCP, and Azure etc.) allows me to design and develop seamless
                and intuitive user experiences, improve scalability and
                performance through the use of microservices, and create
                solutions that are not only effective in addressing current
                challenges but also adaptable to future changes.
              </p>

              <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                I am passionate about working with companies where I can use my
                expertise to drive core objectives and make a meaningful impact
                on the world.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End pt-12 */}
    </>
  );
};

export default Intro;
