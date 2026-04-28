import React from "react";
import demo from "../images/demo.png";

function About({ image = demo, about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;