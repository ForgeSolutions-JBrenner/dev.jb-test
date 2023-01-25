import React, { Component } from "react";
import classNames from "classnames";

// import styles from "./skills-page.module.scss";
import { SkillsList } from "../components/Resume/skillsList";
// import { SkillsChart } from "./skillsChart/SkillsChart";
import TextField from "../components/Resume/textfield";

const cx = classNames.bind(styles);

class SkillsPage extends Component {
  visualOptions = ["list", "pie-chart"];

  frontendDevelopment = [
    "HTML5",
    "CSS3",
    "JavaScript ES5/ES6",
    "jQuery",
    "React, Sagas, Hooks, & Redux",
    "Sass & Compass",
    "Converting PSD's into Web Pages",
    "Animations",
    "Web Maps",
    "AngularJS",
    "Angular (2+)",
    "Bootstrap",
    "Bourbon & Bourbon Neat",
    "Google Analytics",
    "Responsive Design",
    "Mixpanel",
    "Fusion Charts",
    "Google Charts",
    "Mapbox",
    "SEO",
    "JSON",
    "Unit Testing",
    "Section 508 & WCAG 2.0 Compliancy",
  ];
  backendDevelopment = [
    "PHP",
    "Linux",
    "Laravel",
    "SQL",
    "XML",
    "Node.js",
    "Express",
    "MySQL",
    "MariaDB",
    "Postman",
  ];
  design = [
    "Photography",
    "UX Design",
    "Illustrator",
    "Photoshop",
    "Logo Design",
    "Typography",
    "Brand Identity",
    "Animated GIF's",
    "Color Theory",
    "Design Principles",
  ];
  leadership = [
    "Team Building",
    "Communication",
    "Problem-solving",
    "Mentorship",
    "Team Accountability & Integrity",
    "Servant Leadership",
    "Project Management",
    "Responsible Delegation",
    "Process Enhancement",
    "Scrum Master",
  ];
  misc = [
    "Git Version Control",
    "Microsoft Windows",
    "Agile Scrum",
    "SourceTree",
    "Xampp",
    "Magento (1.x series)",
    "Wordpress",
    "Jet Brains Suite (WebStorm, PHPStorm, etc.)",
    "Jira",
    "Bitbucket",
  ];

  state = {
    searchTerm: "",
    displayVisuals: this.visualOptions[0],
    displayFrontEnd: this.frontendDevelopment,
    displayBackEnd: this.backendDevelopment,
    displayDesign: this.design,
    displayLeadership: this.leadership,
    displayMisc: this.misc,
  };

  registeredSkills = [
    this.frontendDevelopment,
    this.backendDevelopment,
    this.design,
    this.leadership,
    this.misc,
  ];

  // returns true if displayVisuals is 'list', otherwise, returns false
  displayList = () => {
    if (this.state.displayVisuals === this.visualOptions[0]) {
      return true;
    }

    return false;
  };

  // returns true if displayVisuals is 'pie-charts', otherwise, returns false
  displayChart = () => {
    if (this.state.displayVisuals === this.visualOptions[1]) {
      return true;
    }

    return false;
  };

  setDisplayVisuals = (e) => {
    this.setState({
      displayVisuals: e,
    });
  };

  updateSearchTerm = (e) => {
    let viewable = [];

    const searchTerm = e.target.value;

    this.registeredSkills.forEach((skills, index) => {
      viewable.push([]);
      skills.forEach((skill) => {
        if (skill.toLowerCase().includes(searchTerm.toLowerCase())) {
          viewable[index].push(skill);
        }
      });
    });

    this.setState({
      searchTerm: searchTerm,
      displayFrontEnd: viewable[0],
      displayBackEnd: viewable[1],
      displayDesign: viewable[2],
      displayLeadership: viewable[3],
      displayMisc: viewable[4],
    });
  };

  noSkillsFound = () => {
    if (this.state.displayFrontEnd.length > 0) {
      return false;
    }
    if (this.state.displayBackEnd.length > 0) {
      return false;
    }
    if (this.state.displayDesign.length > 0) {
      return false;
    }
    if (this.state.displayLeadership.length > 0) {
      return false;
    }
    if (this.state.displayMisc.length > 0) {
      return false;
    }

    return true;
  };

  render() {
    const {
      displayList,
      displayChart,
      visualOptions,
      setDisplayVisuals,
      updateSearchTerm,
    } = this;
    const {
      displayFrontEnd,
      displayBackEnd,
      displayDesign,
      displayLeadership,
      displayMisc,
    } = this.state;

    const frontendSkillsGraph = displayFrontEnd.map((skill) => [skill, 1]);
    const backendSkillsGraph = displayBackEnd.map((skill) => [skill, 1]);
    const designSkillsGraph = displayDesign.map((skill) => [skill, 1]);
    const leadershipSkillsGraph = displayLeadership.map((skill) => [skill, 1]);
    const miscSkillsGraph = displayMisc.map((skill) => [skill, 1]);

    return (
      <div className={cx(["container-fluid", "skills-page-wrapper"])}>
        <div className={cx("container")}>
          <h1
            className={cx(["col-12", "animate__animated", "animate__fadeIn"])}
          >
            Skills
          </h1>
          <p className={cx(["col-12", "animate__animated", "animate__fadeIn"])}>
            On this page you will find skills I possess for web development:
          </p>

          <form
            name="searchForm"
            action="#"
            className={cx(["col-md-12", "search-form"])}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className={cx("row")}>
              <div
                className={cx([
                  "col-md-4",
                  "animate__animated",
                  "animate__fadeIn",
                ])}
              >
                <TextField
                  props={{
                    name: "search-skills",
                    value: this.state.searchTerm,
                    id: "searchSkills",
                    type: "text",
                    isRequired: false,
                    hasError: false,
                    requiredText: "",
                    handleOnChange: updateSearchTerm,
                    placeholder: "Search",
                    label: "Search Skills",
                  }}
                />
              </div>

              <div
                className={cx([
                  "col-md-4",
                  "animate__animated",
                  "animate__fadeIn",
                ])}
              >
                <label htmlFor="visuals">
                  Select the way you would like to view skills
                </label>

                <select
                  name="visuals"
                  onChange={(e) => setDisplayVisuals(e.target.value)}
                >
                  <option value={visualOptions[0]}>List</option>
                  <option value={visualOptions[1]}>Pie Chart</option>
                </select>
              </div>
            </div>
          </form>

          {displayList() === true && (
            <SkillsList
              displayFrontEnd={displayFrontEnd}
              displayBackEnd={displayBackEnd}
              displayDesign={displayDesign}
              displayLeadership={displayLeadership}
              displayMisc={displayMisc}
            />
          )}

          {displayChart() === true && (
            <SkillsChart
              frontendSkillsGraph={frontendSkillsGraph}
              backendSkillsGraph={backendSkillsGraph}
              designSkillsGraph={designSkillsGraph}
              leadershipSkillsGraph={leadershipSkillsGraph}
              miscSkillsGraph={miscSkillsGraph}
              displayFrontEnd={displayFrontEnd}
              displayBackEnd={displayBackEnd}
              displayDesign={displayDesign}
              displayLeadership={displayLeadership}
              displayMisc={displayMisc}
            />
          )}

          {this.noSkillsFound() === true && (
            <p className={cx("col-12")}>
              <strong>
                There were no skills found while searching for `
                {this.state.searchTerm}`
              </strong>
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default SkillsPage;
