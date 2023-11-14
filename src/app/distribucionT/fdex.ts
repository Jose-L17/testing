import { gammaFunctionOdd, gammaFunctionEven } from "./gamaFunction";

// Esta función calcula la función de distribución T.
// dof: Grados de libertad
// x: Valor para el cual se desea calcular la función de distribución T.
export function tDistributionFunction(dof: number, x: number) {
  // Valor de pi.
  const pi = 3.1416;

  let part1; // Parte 1 de la función.
  let part2; // Parte 2 de la función.
  let part3; // Parte 3 de la función.
  let part4; // Parte 4 de la función.
  let part5; // Parte 5 de la función.
  let part6; // Parte 6 de la función.
  let part7; // Parte 7 de la función.
  let part8; // Resultado final de la función.

  // Incrementa el grado de libertad dof en 1.
  const i = dof + 1;

  // Calcula part1 utilizando gam1 o gam2 dependiendo de si i es par o impar.
  if (i % 2 === 0) {
    part1 = gammaFunctionOdd(i / 2);
  } else {
    part1 = gammaFunctionEven(i);
  }

  // Calcula part2 como la raíz cuadrada de (dof * pi).
  part2 = Math.sqrt(dof * pi);

  // Calcula part3 utilizando gam1 o gam2 dependiendo de si dof es par o impar.
  if (dof % 2 === 0) {
    part3 = gammaFunctionOdd(dof / 2);
  } else {
    part3 = gammaFunctionEven(dof);
  }

  // Calcula part4 como la división de part1 entre (part2 * part3).
  part4 = part1 / (part2 * part3);

  // Calcula part5 como 1 + (x^2 / dof).
  part5 = 1 + (x * x / dof);

  // Calcula part6 como (dof + 1) / 2.
  part6 = (dof + 1) / 2;

  // Calcula part7 como la potencia de part5 elevada a -part6.
  part7 = Math.pow(part5, -part6);

  // Calcula part8 como la multiplicación de part4 y part7.
  part8 = part4 * part7;

  // Retorna el valor de part8 como resultado de la función de distribución T.
  return part8;
}
