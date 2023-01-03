import Bloco from "../../imgs/blocos.png";
import Broca from "../../imgs/broca.png";
import Gato from "../../imgs/caixa-de-gato.png";
import Controle from "../../imgs/consola-de-jogos.png";

import "./SobreModal";
import React from "react";
import "./Sobre.css";
import SobreModal from "./SobreModal";
function Sobre() {
  return (
    <div className="sobre" id="sobre-id">
      <h2 className="conteudos">Sobre</h2>
      <div class="container text-center">
        <div class="row">
          <div class="col-sm-1 col-md-6">
            <img src="" alt="" />
            <p className="text-start texto-sobre">
              &nbsp;&nbsp;&nbsp;&nbsp;Olá, meu nome é Iuri Naturesa, sou
              estudante de Análise e Desenvolvimento de sistemas e de Ciência de
              Dados.
            </p>
          </div>
        </div>
        <div className="row">
          <div class="col-sm-1 col-md-6 text-start">
            <button
              type="button"
              class="btn btn-primary button-sobre"
              data-bs-toggle="modal"
              data-bs-target="#sobreModal"
            >
              Ler mais
            </button>
          </div>
        </div>
        <SobreModal />
      </div>
    </div>
  );
}

export default Sobre;
