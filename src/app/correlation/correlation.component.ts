import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/datatest1.service';
import {
  B0,
  B1,
  sum,
  sumX,
  sumXX,
  sumXY,
  sumYY,
  yk,
} from '../linear-regression/linear-regression.component';

@Component({
  selector: 'app-correlation',
  templateUrl: './correlation.component.html',
  styleUrls: ['./correlation.component.css'],
})
export class CorrelationComponent implements OnInit {
  constructor(public testService: TestService) { }

  public datos_Api_Test1: any;
  public datos_Api_Test2: any;
  public datos_Api_Test3: any;
  public datos_Api_Test4: any;

  public resultado = 0;
  public resultado2 = 0;
  public array_elegido: any = [];

  public SumXY = 0;
  public SumY = 0;
  public SumX = 0;
  public SumXX = 0;
  public SumYY = 0;
  public B0v = 0;
  public B1v = 0;
  public Yk = 0;

  public xk: any = '';

  ngOnInit(): void {
    this.testService.obtenerDatos1().subscribe((data: any) => {
      this.datos_Api_Test1 = data;
    });
    this.testService.obtenerDatos2().subscribe((data: any) => {
      this.datos_Api_Test2 = data;
    });
    this.testService.obtenerDatos3().subscribe((data: any) => {
      this.datos_Api_Test3 = data;
    });
    this.testService.obtenerDatos4().subscribe((data: any) => {
      this.datos_Api_Test4 = data;
    });

    this.ObtenerArreglo11();
    this.ObtenerArreglo22();
    this.ObtenerArreglo33();
    this.ObtenerArreglo44();
  }

  FormulaCorrelacion(x: number[], y: number[]): number {
    let n = x.length;

    this.SumXY = sumXY(x, y);
    this.SumY = sum(y);
    this.SumX = sumX(x);
    this.SumXX = sumXX(x);
    this.SumYY = sumYY(y);

    let formula =
      (n * this.SumXY - this.SumX * this.SumY) /
      Math.sqrt(
        (n * this.SumXX - Math.pow(this.SumX, 2)) *
        (n * this.SumYY - Math.pow(this.SumY, 2))
      );

    this.resultado = formula;

    return formula;
  }

  rr(r: number): number {
    return Math.pow(r, 2);
  }

  ObtenerB0(x: number[], y: number[]): number {
    this.B0v = B0(x, y);
    return this.B0v
  }

  ObtenerB1(x: number[], y: number[]): number {
    this.B1v = B1(x, y);
    return this.B1v
  }

  ObtenerYk(x: number[], y: number[], xk: number): number {
    this.Yk = yk(x, y, xk);
    return this.Yk
  }

  CalcularResultado(x: number[], y: number[]) {
    this.resultado = this.FormulaCorrelacion(x, y);

    this.B0v = this.ObtenerB0(x, y);
    this.B1v = this.ObtenerB1(x, y);
    this.Yk = this.ObtenerYk(x, y, this.xk);

    this.resultado2 = this.rr(this.resultado);
  }

  ActualizarValorXk(event: Event): void {
    this.xk = (event.target as HTMLInputElement).value;
  }


  async ObtenerArreglo11() {
    this.datos_Api_Test1 = await this.testService.obtenerDatos1().toPromise();
    this.array_elegido = this.datos_Api_Test1;
    this.array_elegido.dato1 = this.array_elegido.proxy_size;
    this.array_elegido.dato2 = this.array_elegido.actual_added;
    return this.array_elegido;
  }

  async ObtenerArreglo22() {
    this.datos_Api_Test2 = await this.testService.obtenerDatos2().toPromise();
    this.array_elegido = this.datos_Api_Test2;
    this.array_elegido.dato1 = this.array_elegido.proxy_size;
    this.array_elegido.dato2 = this.array_elegido.actual_develop;
    return this.array_elegido;
  }

  async ObtenerArreglo33() {
    this.datos_Api_Test3 = await this.testService.obtenerDatos3().toPromise();
    this.array_elegido = this.datos_Api_Test3;
    this.array_elegido.dato1 = this.array_elegido.plan_added;
    this.array_elegido.dato2 = this.array_elegido.actual_added;
    return this.array_elegido;
  }

  async ObtenerArreglo44() {
    this.datos_Api_Test4 = await this.testService.obtenerDatos4().toPromise();
    this.array_elegido = this.datos_Api_Test4;
    this.array_elegido.dato1 = this.array_elegido.proxy_added;
    this.array_elegido.dato2 = this.array_elegido.actual_develop;
    return this.array_elegido;
  }


}
