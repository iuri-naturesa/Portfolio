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
    <div className="sobre">
      <h2 className="conteudos">Sobre</h2>
      <div class="container text-center">
        <div class="row">
          <div class="col-sm-1 col-md-6">
            <img src="" alt="" />
            <p className="text-start">
              &nbsp;&nbsp;&nbsp;&nbsp;Iniciei o curso de Ciência da Computação
              na UFABC em 2021, mas atualmente, decidi migrar pra graduação em
              Análise e Desenvolvimento de Sistemas na FIAP, pois me
              identifiquei bem mais com a grade curricular. Tenho focado os meus
              estudos principalmente nas áreas de Front-end e Dados, através do
              desenvolvimento de projetos ministrados pelos cursos da Alura e do
              Origamid.
            </p>
          </div>
        </div>
        <div className="row">
          <div class="col-sm-1 col-md-6 text-start">
            <button
              type="button"
              class="btn btn-primary"
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
