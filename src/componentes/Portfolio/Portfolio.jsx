import "./Portfolio.css";

import sasslogo from "../../icon/sass-original.svg";
import gitgit from "../../icon/GitHub_Logo-testre.png";
import React from "react";

function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="port-shadow">Portfolio</h2>
      <div class="container d-flex justify-content-center">
        <a href="" className="card text-bg-light cardinho">
          <img src={gitgit} className="card-img" alt="..." />
        </a>
      </div>
      <div class="container d-flex justify-content-center">
        <a href="" className="card text-bg-light cardinho">
          <img src={gitgit} className="card-img" alt="..." />
        </a>
      </div>
      <div class="container d-flex justify-content-center">
        <a href="" className="card text-bg-light cardinho">
          <img src={gitgit} className="card-img" alt="..." />
        </a>
      </div>
      <div class="container d-flex justify-content-center">
        <a href="" className="card text-bg-light cardinho">
          <img src={gitgit} className="card-img" alt="..." />
        </a>
      </div>
      <div class="container d-flex justify-content-center">
        <a href="" className="card text-bg-light cardinhogit">
          <img src={sasslogo} className="card-img" alt="..." />
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
