import numeral from "numeral";

// Recibimos el valor
const dollarFilter = function(value) {
  // Si esta vacio o no existe devolvemos $0
  if (!value) {
    return "$ 0";
  }

  // Formateamos el valor
  return numeral(value).format("($ 0.00a)");
};

const percentFilter = function(value) {
  if (!value) {
    return "0%";
  }

  return `${Number(value).toFixed(2)}%`;
};

export { dollarFilter, percentFilter };
