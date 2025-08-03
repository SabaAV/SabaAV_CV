import WorldskillsGe from "../assets/Images/Worldskills_Georgia.jpg";
import WorldskillsInt from "../assets/Images/Worldskills_International.png";

function Awards() {
  return (
    <div className="AwardsDiv">
      <h1>Awards</h1>
      <div className="AwardsList">
        <div className="Award">
          <div className="AwardsImage">
            <img src={WorldskillsInt} alt="worldskillsGeorgia" />
          </div>
          <h1>WorldSkills International</h1>
          <h2>WorldSkills Lyon 2024 - Champion - Web Technologies</h2>
        </div>
        <div className="Award">
          <div className="AwardsImage">
            <img src={WorldskillsGe} alt="worldskillsGeorgia" />
          </div>
          <h1>WorldSkills Georgia</h1>
          <h2>1st place in WorldSkills 2023 “Web Technologies”.</h2>
        </div>
      </div>
    </div>
  );
}

export default Awards;
