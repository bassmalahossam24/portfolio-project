import React from "react";
import "./Skills.css"; // Assuming you have a CSS file for styling

export default function Skills() {
  const skills = [
  { name: "Photoshop", percent: 75, color: "#2196f3" },
  { name: "HTML5", percent: 85, color: "#f4b400" },
  { name: "WordPress", percent: 70, color: "#26a69a" },
  { name: "jQuery", percent: 60, color: "#ef5350" },
  { name: "CSS3", percent: 90, color: "#ab47bc" },
  { name: "SEO", percent: 80, color: "#3f51b5" },
];
  

  
  return (
    <div className=" container mt-5  d-flex flex-column  justify-content-center p-5   ">
      <p className="about-para">MY SPECIALTY</p>
      <h1 className="who-header"> MY SKILLS</h1>
      <p className=" mt-3 about-me">
        The Big Oxmox advised her not to do so, because there were thousands of
        bad Commas, wild Question Marks and devious Semikoli, but the Little
        Blind Text didn’t listen. She packed her seven versalia, put her initial
        into the belt and made herself on the way.
      </p>

       <div className="row mt-5">
      {skills.map((skill, index) => (
        <div className="col-md-6" key={index}>
          <div className="skill-box mb-4">
            <h5>{skill.name}</h5>
            <div className="skill-bar">
              <div
                className="fill"
                style={{
                  width: `${skill.percent}%`,
                  backgroundColor: skill.color,
                }}
              >
                <span className="percent" style={{ color: skill.color }}>
                  {skill.percent}%
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
