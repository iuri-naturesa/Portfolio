import React from "react";
import "./Contato.css";
import "../Skills/Skills.css";

import icolocal from "../../icon/location-svgrepo-com.svg";
import icoemail from "../../icon/email-svgrepo-com.svg";
import icogit from "../../icon/icons8-github.svg";
import icolinkedin from "../../icon/linkedincon.svg";

function Contato() {
  return (
    <div className="contato">
      <h2 className="conteudos">Contato</h2>
      <div className="container">
        <div className="row">
          <div className="col">
            <div>
              <h3 className="descri">
                <img src={icoemail} className="filter-white" />
                <a href="mailto:iuri.naturesa@gmail.com">
                  iuri.naturesa@gmail.com
                </a>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div>
              <h3>
                <img src={icolocal} className="filter-white" />
                <a
                  href="https://www.google.com/maps/place/S%C3%A3o+Paulo,+SP/@-23.6366462,-46.7904903,10.75z/data=!4m5!3m4!1s0x94ce448183a461d1:0x9ba94b08ff335bae!8m2!3d-23.5557714!4d-46.6395571"
                  target="_blank"
                >
                  São Paulo, São Paulo, Brasil
                </a>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>
              <img src={icolinkedin} className="filter-white" />
              <a href="https://www.linkedin.com/in/iuri-naturesa-a351ba152/">
                LinkedIn
              </a>
            </h3>
          </div>
          <div className="row">
            <div className="col">
              <h3>
                <img src={icogit} className="filter-white" />
                <a href="https://github.com/iuri-naturesa">GitHub</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contato;
