import React from "react";
import cube from "./cube.png";
import circle from "./2.jpg";
function Menu(props) {
  return (
    <div className=" dMenu" styles={{ height: "700px" }}>
      <img src={cube} alt="" className="img" />
      <hr className="text-white" />
      <ul class="list-group">
        <li class="list-group-item">
          <i class="far fa-clipboard mx-2 my-2"></i> Overview
        </li>
        <li class="list-group-item">
          <i class="fas fa-cloud mx-2  my-2"></i> Cloud{" "}
        </li>
        <li class="list-group-item">
          <i class="far fa-gem mx-2  my-2"></i> Sketch
        </li>
        <li class="list-group-item">
          <i class="fas fa-flask mx-2  my-2"></i> Experiment
        </li>
        <li class="list-group-item">
          <i class="fas fa-shield-alt mx-2  my-2"></i> Security
        </li>
        <li class="list-group-item">
          <i class="fas fa-globe mx-2  my-2"></i> Ownership
        </li>
        <li class="list-group-item ">
          <i class="far fa-circle mx-2  my-2"></i> A/B Test
        </li>
        <li class="list-group-item">
          <i class="fas fa-palette mx-2  my-2"></i>Colors
        </li>
      </ul>

      <ul className="list">
        <li className="list-items">
          {" "}
          <i class="fas fa-sign-out-alt mx-2"></i>Logout
        </li>
      </ul>
    </div>
  );
}

export default Menu;
