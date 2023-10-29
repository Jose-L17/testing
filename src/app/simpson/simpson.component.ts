import { fx_1eX } from "./f(x)=1ex";
import { fx_2x } from "./f(x)=2x";
import { fx_XxX } from "./f(x)=XxX";

export function simpson(f: string, x0: number, x1: number, num_seg: number, dof: number) {

    let E = 0.00001; // Tolerancia de error
    let x = 0; // Variable para almacenar la posición actual
    let xC; // Valor de la función en x
    let y; // Valor del término y en la regla de Simpson
    let area_seg; // Área de cada segmento
    let P = 0; // Suma acumulada de áreas de segmentos
    let PF; // Resultado final de la aproximación de la integral
    let contador = 0; // Contador de iteraciones
    const arrP = []; // Arreglo para almacenar las sumas parciales
    let margenE = 1; // Margen de error

    do {
        margenE = 0; // Reinicia el margen de error en cada iteración
        let W = (x1 - x0) / num_seg; // Ancho de cada segmento
        let W3 = W / 3; // Tercio del ancho del segmento
        x = x0; // Inicializa la posición en el límite inferior del intervalo

        for (let i = 0; i <= num_seg; i++) {
            if (f.toLowerCase() == "2x") {
                xC = fx_2x(x);
            } else if (f.toLowerCase() == "x*x") {
                xC = fx_XxX(x);
            } else if (f.toLowerCase() == "1/x") {
                xC = fx_1eX(x);
            } else {
                xC = fx_2x(x); // Valor predeterminado si f no coincide con ninguno
            }

            if (i == 0 || i == num_seg) {
                y = xC * 1; // Primer y último término
            } else {
                y = (i % 2 === 0) ? xC * 2 : xC * 4; // Términos pares e impares
            }

            area_seg = y * W3; // Área del segmento actual
            P += area_seg; // Acumula el área en P
            x += W; // Avanza a la siguiente posición
        }

        arrP.push(P); // Almacena la suma parcial en el arreglo
        num_seg = num_seg * 2; // Duplica el número de segmentos
        contador += 1; // Incrementa el contador de iteraciones

        if (contador > 0) {
            margenE = arrP[0] - arrP[contador]; // Calcula el margen de error
        }

        PF = parseFloat(P.toFixed(5)); // Redondea PF a 5 decimales
        P = 0; // Reinicia P para la próxima iteración

    } while (margenE > E || contador < 2); // Continúa hasta que se cumpla el criterio de parada

    if (PF == 0) {
        PF = 1; // Si el resultado es 0, se establece en 1 (evita divisiones por 0)
    }

    return PF; // Devuelve el resultado final de la aproximación de la integral
}
