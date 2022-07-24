import React from "react";
export default function ComParametro(props) {
  const status = props.nota >= 7 ? "Aprovado" : "De recuperação";
  return (
    <div>
      <h2> {props.titulo} </h2>
      <p>
        O Aluno <strong> {props.aluno} </strong>
        Possui nota: <strong> {props.nota} </strong>e está{" "}
        <strong>{status}</strong>
      </p>
    </div>
  );
}
