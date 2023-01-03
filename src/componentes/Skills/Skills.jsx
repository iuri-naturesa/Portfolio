import html5logo from "../../icon/html5-original.svg";
import css3logo from "../../icon/css3-original.svg";
import javascriptlogo from "../../icon/javascript-original.svg";

import bootstraplogo from "../../icon/bootstrap-original.svg";
import sasslogo from "../../icon/sass-original.svg";
import reactlogo from "../../icon/react-original.svg";

import gitlogo from "../../icon/git-original.svg";
import githublogo from "../../icon/github-original.svg";
import npmlogo from "../../icon/npm-original.svg";

import yarnlogo from "../../icon/yarn-original.svg";
import figmalogo from "../../icon/figma-original.svg";

import "./Skills.css";

import React from "react";

function Skills() {
  return (
    <div className="skills">
      <h2 className="conteudos">Skills</h2>
      <div class="container text-center">
        <div class="row tags">
          <div class="col">
            <img src={html5logo} alt="" />
            <h3>HTML5</h3>
          </div>
          <div class="col">
            <img src={css3logo} alt="" />
            <h3>CSS3</h3>
          </div>
          <div class="col">
            <img src={javascriptlogo} alt="" />
            <h3>JavaScript</h3>
          </div>
        </div>
        <div class="row tags">
          <div class="col">
            <img src={reactlogo} alt="" />
            <h3>React</h3>
          </div>

          <div class="col">
            <img src={bootstraplogo} alt="" />
            <h3> Bootstrap</h3>
          </div>
          <div class="col">
            <img src={sasslogo} alt="" />
            <h3> Sass</h3>
          </div>
        </div>
        <div class="row tags">
          <div class="col">
            <img src={gitlogo} alt="" />
            <h3> Git</h3>
          </div>
          <div class="col">
            <img className="github" src={githublogo} alt="" />
            <h3> GitHub</h3>
          </div>
          <div class="col">
            <img src={npmlogo} alt="" />
            <h3> npm</h3>
          </div>
        </div>
        <div class="row tags">
          <div class="col">
            <img src={yarnlogo} alt="" />
            <h3>Yarn</h3>
          </div>
          <div class="col">
            <img src={figmalogo} alt="" />
            <h3>Figma</h3>
          </div>
          <div class="col tag-inv"></div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
