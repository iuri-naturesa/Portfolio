import React from "react";
import Setita from "../../icon/setita.png";
import "./First.css";

const First = () => {
  return (
    <div className="first">
      <h1 className="iuri">Iuri Naturesa</h1>
      <h2 className="descricao">Loren & Loren & Loren & Loren</h2>
      <div className="setita">
        <img src={Setita} />
      </div>
    </div>
  );
};

export default First;
