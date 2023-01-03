import React from "react";
import "./Sobre";
function SobreModal() {
  return (
    <div>
      <div
        class="modal fade"
        id="sobreModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1
                class="modal-title fs-5 modal-text-color"
                id="exampleModalLabel"
              >
                Sobre
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p className="text-start modal-text-color">
                &nbsp;&nbsp;&nbsp;&nbsp;Iniciei o curso de Ciência da Computação
                na UFABC em 2021, mas atualmente, decidi migrar pra graduação em
                Análise e Desenvolvimento de Sistemas na FIAP, pois me
                identifiquei bem mais com a grade curricular.
              </p>
              <p className="text-start modal-text-color">
                Tenho focado os meus estudos principalmente nas áreas de
                Front-end e Dados, através do desenvolvimento de projetos
                ministrados pelos cursos da Alura e do Origamid.
              </p>
              <p className="text-start modal-text-color">
                Sempre fui muito interessado em tecnologia e principalmente em
                temas relacionados à design e UX/UI, então, foi na área de
                desenvolvimento web que eu encontrei a junção perfeita de tudo
                que eu mais amo fazer.
              </p>
              <p className="text-start modal-text-color">
                Tenho me dedicado à criar projetos de sites responsivos usando
                as tecnologias HTML, CSS, JS e React, e no momento atual, também
                tenho focado em me aprofundar na utilização de Python para a
                área de Dados com ênfase em Machine Learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreModal;
