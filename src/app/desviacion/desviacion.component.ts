import { Component, OnInit } from '@angular/core';
import { HoursService } from '../services/data.service';
import { SizeService } from '../services/data2.service';

@Component({
  selector: 'app-desviacion',
  templateUrl: './desviacion.component.html',
  styleUrls: ['./desviacion.component.css'],
})
export class DesviacionComponent implements OnInit {
  constructor(
    public hoursService: HoursService,
    public sizeService: SizeService
  ) {}

  public horas: any[] | any;
  public size: any[] | any;
  public media: any[] | any;
  public desviacion_hours: any;
  public desviacion_size: any;

  public resultado = 0;
  public resultado2 = 0;
  public array_elegido: any;

  async ngOnInit(): Promise<void> {
    await this.getHours();
    await this.getSize();
    this.obtenerMediaHours();
    this.obtenerMediaSize();
    this.calcularDesviacionHours();
    this.calcularDesviacionSize();
  }

  async getHours() {
    return new Promise<void>((resolve, reject) => {
      this.hoursService.getHours().subscribe((data: any[]) => {
        this.horas = data;
        this.array_elegido = data;
        resolve();
      });
    });
  }

  async getSize() {
    return new Promise<void>((resolve, reject) => {
      this.sizeService.getSize().subscribe((data: any[]) => {
        this.size = data;
        this.array_elegido = data;
        resolve();
      });
    });
  }

  async obtenerMediaHours() {
    if (this.horas && this.horas.data && Array.isArray(this.horas.data)) {
      this.media = this.getMedia(...this.horas.data);
    }
  }

  async obtenerMediaSize() {
    if (this.size && this.size.data && Array.isArray(this.size.data)) {
      this.media = this.getMedia(...this.size.data);
    }
  }

  async calcularDesviacionHours() {
    if (this.horas && this.horas.data && Array.isArray(this.horas.data)) {
      const media = this.getMedia(...this.horas.data);
      this.desviacion_hours = this.getDesviacion(this.horas.data, media);
    }
  }

  async calcularDesviacionSize() {
    if (this.size && this.size.data && Array.isArray(this.size.data)) {
      const media = this.getMedia(...this.size.data);
      this.desviacion_size = this.getDesviacion(this.size.data, media);
    }
  }

  getMedia(...numbers: number[]): number {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b, 0);
    return +(sum / numbers.length).toFixed(2);
  }

  getDesviacion(arreglo: number[], media: number): number {
    let acumulador = 0;

    for (let i = 0; i < arreglo.length; i++) {
      const diferencia = arreglo[i] - media;
      acumulador += diferencia * diferencia;
    }

    const varianza = acumulador / (arreglo.length - 1);
    const desviacion = Math.sqrt(varianza);
    return +desviacion.toFixed(2);
  }

  calcularMedia(array: number[] | any) {
    const result = this.getMedia(...array.data);
    this.resultado = result;
    return result;
  }

  calcularDesviacion(array: number[] | any) {
    const media = this.getMedia(...array.data);
    const result = this.getDesviacion(array.data, media);
    this.resultado2 = result;
    return result;
  }
}
