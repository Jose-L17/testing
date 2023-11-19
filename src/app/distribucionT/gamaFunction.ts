// Esta función calcula la función gamma (gam1) para grados de libertad impares.
export function gammaFunctionOdd(dof: number) {
  let i = 0;
  let mult = 1; // Inicializa el multiplicador en 1.
  let gamma; // Valor de la función gamma.

  // Realiza un bucle para calcular la función gamma.
  do {
    dof = dof - 1;
    mult = dof * mult; // Actualiza el multiplicador.
    i++;
  } while (dof !== 1);

  return (gamma = mult); // Retorna el valor calculado de la función gamma.
}

// Esta función calcula la función gamma (gam2) para grados de libertad pares.
export function gammaFunctionEven(dof: number) {
  let i = 0;
  let mult = 1; // Inicializa el multiplicador en 1.
  let div, gamma; // Valor de la función gamma.

  // Realiza un bucle para calcular la función gamma.
  do {
    dof = dof - 2;
    div = dof / 2;
    mult = div * mult; // Actualiza el multiplicador.
    i++;
  } while (dof > 1);

  return (gamma = mult * 1.77245); // Retorna el valor calculado de la función gamma multiplicado por 1.77245.
}

