import { useRef, useEffect } from "react";

function Projects() {
  const ProjectListRef = useRef(null);
  const ProjectsDivRef = useRef(null);
  const ProjectsDivBtnRef = useRef(null);
  let Elementcount = null;
  let Elementrefs = null;
  let unpacked = false;
  function ShowMore() {
    if (unpacked) {
      console.log(Elementcount);
      ProjectsDivRef.current.style.height = "100vh";
      Elementrefs.forEach((element) => {
        element.style.display = "none";
      });
      for (let i = 0; i < 2; i++) {
        Elementrefs[i].style.display = "flex";
      }
    } else {
      console.log(Elementcount);
      ProjectsDivRef.current.style.height = Elementcount * 50 + "vh";
      Elementrefs.forEach((element) => {
        element.style.display = "flex";
      });
    }
    unpacked = !unpacked;
  }
  useEffect(() => {
    Elementcount = ProjectListRef.current.childNodes.length;
    Elementrefs = ProjectListRef.current.childNodes;
    console.log(Elementcount, Elementrefs[0]);
    for (let i = 0; i < 2; i++) {
      Elementrefs[i].style.display = "flex";
    }
    if (Elementcount <= 2) {
      ProjectsDivBtnRef.current.style.display = "none";
    } else {
      ProjectsDivBtnRef.current.style.display = "inline-block";
    }
  });

  return (
    <div className="ProjectsDiv" ref={ProjectsDivRef}>
      <h1>Projects</h1>
      <div className="ProjectsList" ref={ProjectListRef}>
        <div className="ProjectsRow">
          <div className="Project"></div>
          <div className="Project"></div>
          <div className="Project"></div>
        </div>
        <div className="ProjectsRow">
          <div className="Project"></div>
          <div className="Project"></div>
          <div className="Project"></div>
        </div>
      </div>
      <button
        onClick={ShowMore}
        className="ShowMoreBtn"
        ref={ProjectsDivBtnRef}
      >
        Show More
      </button>
    </div>
  );
}

export default Projects;
