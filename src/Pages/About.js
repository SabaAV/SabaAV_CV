import React, { useRef, useEffect, useState } from "react";

function About() {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Если элемент виден, изменяем состояние
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Прекращаем наблюдение после анимации
        }
      },
      { threshold: 0.1 } // Настройка видимости (10% элемента на экране)
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div className="AboutDiv">
      <div
        ref={elementRef}
        className={`animate__animated AboutMe ${isVisible ? "visible" : ""}`}
      >
        <h1>About Me</h1>
        <p>
          Hello, I’m Saba Avlokhashvili, a web developer with a solid foundation
          from the Academy of Information Technology. I’m deeply committed to
          expanding my expertise and tackling complex challenges that drive
          development.
        </p>
        <p>
          I approach development with a focus on precision and continuous
          growth, leveraging each project as an opportunity to refine my skills.
          Known for my strong communication abilities and collaborative mindset,
          I’m driven by clear goals and a dedication to delivering high-quality
          work.
        </p>
        <p>
          Explore my portfolio to see a detailed view of my skills and
          accomplishments.
        </p>
      </div>
      <div className="AboutRow">
        <div
          className={`animate__animated AboutLeftSide ${
            isVisible ? "visible" : ""
          }`}
          style={{ animationDuration: 1 + "s" }}
        >
          <h1>FrontEnd</h1>
          <p>Programming languages I Know:</p>
          <p>HTML, CSS, Javascript, Typescript</p>
          <p>Frameworks I Know:</p>
          <p>React, Angular, Bootstrap</p>
        </div>
        <div
          className={`animate__animated AboutRightSide ${
            isVisible ? "visible" : ""
          }`}
          style={{ animationDuration: 1.5 + "s" }}
        >
          <h1>Design & 3D </h1>
          <p>Programs:</p>
          <p>Photoshop, Illustrator, Figma</p>
          <p>3D design:</p>
          <p>Blender</p>
        </div>
      </div>
      <div className="AboutRow">
        <div
          className={`animate__animated AboutLeftSide ${
            isVisible ? "visible" : ""
          }`}
          style={{ animationDuration: 1.5 + "s" }}
        >
          <h1>BackEnd</h1>
          <p>Programming languages I Know:</p>
          <p>Javascript, Typescript, PHP</p>
          <p>Frameworks I Know:</p>
          <p>React, Angular, Bootstrap</p>
        </div>
        <div
          className={`animate__animated AboutRightSide ${
            isVisible ? "visible" : ""
          }`}
          style={{ animationDuration: 1 + "s" }}
        >
          <h1>Game Development</h1>
          <p>Programming languages I Know:</p>
          <p>C#, C++</p>
          <p>Game Engines:</p>
          <p>Unity</p>
        </div>
      </div>
    </div>
  );
}

export default About;
