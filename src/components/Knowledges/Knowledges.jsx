import React from "react";
import "./knowledges.css";
import code from "../../media/html-2.png";
import js from "../../media/js.png";
import ts from "../../media/ts.png";
import react from "../../media/react.png";
import redux from "../../media/redux.png";
import jest from "../../media/jest.png";
import node from "../../media/node.png";
import sass from "../../media/sass.png";
import html from "../../media/html.png";
import css from "../../media/css.png";
import bootstrap from "../../media/bootstrap.png";
import tailwind from "../../media/tailwind.png";
import logiciel from "../../media/logiciel.png";
import figma from "../../media/figma.png";
import vscode from "../../media/vscode.png";
import postman from "../../media/postman.png";
import lighthouse from "../../media/lighthouse.png";
import gestion from "../../media/gestion-de-projet.png";
import github from "../../media/github.png";
import gitlab from "../../media/gitlab.png";
import gitflow from "../../media/gitflow.png";
import bpmn from "../../media/bpmn.png";
import scrum from "../../media/scrum.png";
import kanban from "../../media/kanban.png";

const Knowledges = () => {
  return (
    <div className="bloc-knowledges">

<div className="bloc-titles">
        <h2 className="h2 h2-knowledges">Mes compétences</h2>
        <p className="p-knowledges-title">Hard Skills</p>
      </div>
      <div className="display-bloc">
        <div className="div-knowledges-code">
          <div class="div-ronde">
            <img src={code} alt="code" className="img-code" />
          </div>
          <h3 className="h3-knowledges">Développement</h3>
          <div className="bloc-p">
            <div className="knowledges">
              <img src={js} alt="js" className="logo-knowledges" />
              <p className="p-knowledges">JavaScript</p>
            </div>
            <div className="knowledges">
              <img src={ts} alt="ts" className="logo-knowledges" />
              <p className="p-knowledges">TypeScript</p>
            </div>
            <div className="knowledges">
              <img src={react} alt="react" className="logo-knowledges" />
              <p className="p-knowledges">ReactJS</p>
            </div>
            <div className="knowledges">
              <img src={redux} alt="redux" className="logo-knowledges" />
              <p className="p-knowledges">Redux</p>
            </div>
            <div className="knowledges">
              <img src={jest} alt="jest" className="logo-knowledges" />
              <p className="p-knowledges">JestJs</p>
            </div>
            <div className="knowledges">
              <img src={node} alt="node" className="logo-knowledges" />
              <p className="p-knowledges">NodeJs</p>
            </div>
            <div className="knowledges">
              <img src={sass} alt="sass" className="logo-knowledges" />
              <p className="p-knowledges">Sass</p>
            </div>
            <div className="knowledges">
              <img src={html} alt="html" className="logo-knowledges" />
              <p className="p-knowledges">HTML</p>
            </div>
            <div className="knowledges">
              <img src={css} alt="css" className="logo-knowledges" />
              <p className="p-knowledges">CSS</p>
            </div>
            <div className="knowledges">
              <img
                src={bootstrap}
                alt="bootstrap"
                className="logo-knowledges"
              />
              <p className="p-knowledges">Bootstrap</p>
            </div>
            <div className="knowledges">
              <img src={tailwind} alt="tailwind" className="logo-knowledges" />
              <p className="p-knowledges">TailwindCSS</p>
            </div>
          </div>
        </div>

        <div className="div-knowledges-logiciel">
          <div class="div-ronde">
            <img src={logiciel} alt="logiciel" className="img-logiciel" />
          </div>
          <h3 className="h3-knowledges">Logiciels</h3>
          <div className="bloc-p">
            <div className="knowledges">
              <img src={figma} alt="figma" className="logo-knowledges" />
              <p className="p-knowledges">Figma (UX/UI)</p>
            </div>
            <div className="knowledges">
              <img src={vscode} alt="vscode" className="logo-knowledges" />
              <p className="p-knowledges">Vs Code</p>
            </div>
            <div className="knowledges">
              <img src={postman} alt="postman" className="logo-knowledges" />
              <p className="p-knowledges">Postman</p>
            </div>
            <div className="knowledges">
              <img
                src={lighthouse}
                alt="lighthouse"
                className="logo-knowledges"
              />
              <p className="p-knowledges">Lighthouse</p>
            </div>
          </div>
        </div>

        <div className="div-knowledges-gestion">
          <div class="div-ronde">
            <img src={gestion} alt="gestion" className="img-gestion" />
          </div>
          <h3 className="h3-knowledges">Gestion de projet</h3>
          <div className="bloc-p">
            <div className="knowledges">
              <img src={github} alt="github" className="logo-knowledges" />
              <p className="p-knowledges">GitHub</p>
            </div>
            <div className="knowledges">
              <img src={gitlab} alt="gitlab" className="logo-knowledges" />
              <p className="p-knowledges">GitLab</p>
            </div>
            <div className="knowledges">
              <img src={gitflow} alt="gitflow" className="logo-knowledges" />
              <p className="p-knowledges">Gitflow</p>
            </div>
            <div className="knowledges">
              <img src={bpmn} alt="bpmn" className="logo-knowledges" />
              <p className="p-knowledges">BPMN</p>
            </div>
            <div className="knowledges">
              <img src={scrum} alt="scrum" className="logo-knowledges" />
              <p className="p-knowledges">Scrum</p>
            </div>
            <div className="knowledges">
              <img src={kanban} alt="kanban" className="logo-knowledges" />
              <p className="p-knowledges">Kanban</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Knowledges;


