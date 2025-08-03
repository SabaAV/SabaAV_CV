import { useRef, useEffect } from "react";
import KMCGlassLogo from "../assets/Images/KMC_GlassLogo.png";

function Еxperience() {
  const experienceListRef = useRef(null);
  const experiencesDivRef = useRef(null);
  const experiencesDivBtnRef = useRef(null);
  // let Elementcount = null;
  // let Elementrefs = null;
  // let unpacked = false;
  // function ShowMore() {
  //   if (unpacked) {
  //     console.log(Elementcount);
  //     experiencesDivRef.current.style.height = "100vh";
  //     Elementrefs.forEach((element) => {
  //       element.style.display = "none";
  //     });
  //     for (let i = 0; i < 2; i++) {
  //       Elementrefs[i].style.display = "flex";
  //     }
  //   } else {
  //     console.log(Elementcount);
  //     experiencesDivRef.current.style.height = Elementcount * 50 + "vh";
  //     Elementrefs.forEach((element) => {
  //       element.style.display = "flex";
  //     });
  //   }
  //   unpacked = !unpacked;
  // }
  // useEffect(() => {
  //   Elementcount = experienceListRef.current.childNodes.length;
  //   Elementrefs = experienceListRef.current.childNodes;
  //   console.log(Elementcount, Elementrefs[0]);
  //   for (let i = 0; i < 2; i++) {
  //     Elementrefs[i].style.display = "flex";
  //   }
  //   if (Elementcount <= 2) {
  //     experiencesDivBtnRef.current.style.display = "none";
  //   } else {
  //     experiencesDivBtnRef.current.style.display = "inline-block";
  //   }
  // });

  return (
    <div className="ЕxperiencesDiv" ref={experiencesDivRef}>
      <h1>Experience</h1>
      <div className="ЕxperiencesList" ref={experienceListRef}>
        <div className="ЕxperiencesRow">
          {/* <div className="Еxperience"></div> */}
          <div className="Еxperience">
            <div className="ЕxperiencesImage">
              <img src={KMCGlassLogo} alt="worldskillsGeorgia" />
            </div>
            <h1>KMC GLASS</h1>
            <h2>Part-Time Fullstack Developer</h2>
            <h2>2 Year</h2>
          </div>
          <div className="Еxperience"></div>
          <div className="Еxperience"></div>
          {/* <div className="Еxperience"></div> */}
        </div>
        {/* <div className="ЕxperiencesRow">
          <div className="Еxperience"></div>
          <div className="Еxperience"></div>
          <div className="Еxperience"></div>
        </div> */}
      </div>
      {/* <button
        onClick={ShowMore}
        className="ShowMoreBtn"
        ref={experiencesDivBtnRef}
      >
        Show More
      </button> */}
    </div>
  );
}

export default Еxperience;
