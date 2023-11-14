import { tDistributionFunction } from "./fdex";

export function simpsonMethodForT(dof: number, numSegments: number, x1: number) {
  // Calcula el ancho de cada segmento.
  let segmentWidth = x1 / numSegments;
  // Calcula un tercio del ancho del segmento.
  let oneSixthSegmentWidth = segmentWidth / 3;
  let x = 0; // Inicializa la variable x.
  let integral = 0; // Inicializa la variable para la integral.
  let y, area;
  let i = 0;

  do {
    // Verifica si i es igual a 0 o igual al número de segmentos.
    if (i === 0 || i === numSegments) {
      y = tDistributionFunction(dof, x) * 1;
      area = y * oneSixthSegmentWidth;
    } else if (i % 2 === 0) {
      // Si i es par, multiplica por 2.
      y = tDistributionFunction(dof, x) * 2;
      area = y * oneSixthSegmentWidth;
    } else {
      // Si i es impar, multiplica por 4.
      y = tDistributionFunction(dof, x) * 4;
      area = y * oneSixthSegmentWidth;
    }

    x = x + segmentWidth; // Actualiza el valor de x.
    integral = integral + area; // Acumula el área al valor de la integral.
    i++;
  } while (i <= numSegments);

  return Number(integral.toFixed(5)); // Retorna el valor de la integral redondeado a 5 decimales.
}
