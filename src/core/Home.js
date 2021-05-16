import React from "react";
import Menu from "./Menu";
import "../styles.css";
import Overview from "./Overview";

function Home(props) {
  return (
    <div class="row">
        <div class="col-md-2"><Menu /></div>
        <div class="col-md-10"><Overview /></div>
</div>

     
  );
}

export default Home;
