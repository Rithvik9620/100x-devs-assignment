import React, { useState } from "react";
import ProjectOneChild from "./ProjectOneChild";

const ProjectOne = () => {
  const [color, setColor] = useState("white");
  const changeColor = (c) => {
    setColor(c);
  };
  return (
    <div style={{ backgroundColor: color,margin:0,padding:0,height:"100vh" }}>
      <ProjectOneChild changeColor={changeColor}/>
    </div>
  );
};

export default ProjectOne;
