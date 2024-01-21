import React from "react";

const ProjectOneChild = ({changeColor}) => {
  return <div style={{backgroundColor:"white",display:"flex",boxShadow:"1px 1px 1px"}}>
    <button onClick={()=>changeColor("red")}>Red</button>
    <button onClick={()=>changeColor("blue")}>Blue</button>
    <button onClick={()=>changeColor("yellow")}>Yellow</button>
    <button onClick={()=>changeColor("green")}>Green</button>
    <button onClick={()=>changeColor("white")}>White</button>
  </div>;
};

export default ProjectOneChild;
