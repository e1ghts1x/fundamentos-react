import React from "react";

export default (props) => {
  const max = props.max;
  const min = props.min;
  const aleatorio = Math.floor(Math.random() * (max - min) + min);
  return (
    <div>
      <h2>Número aleatório</h2>
      <p>Valor Mínimo: <strong>{min}</strong></p>
      <p>Valor Máximo: <strong>{max}</strong></p>
      <p>Valor aleatório: <strong>{aleatorio}</strong> </p>
    </div>
  );
};
