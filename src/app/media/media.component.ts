import { Component, OnInit } from '@angular/core';
import { HoursService } from '../services/data.service';
import { SizeService } from '../services/data2.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css'],
})
export class MediaComponent implements OnInit {
  constructor(
    public hoursService: HoursService,
    public sizeService: SizeService
  ) {}

  public horas: any[] | any;
  public size: any[] | any;
  public media: any;

  public array_elegido: any;
  public resultado = 0;

  async ngOnInit(): Promise<void> {
    await this.getHours();
    await this.getSize();
    this.obtenerMediaHours();
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

  getMedia(...numbers: number[]): number {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b, 0);
    return +(sum / numbers.length).toFixed(2);
  }

  calcularMedia(array: number[] | any): void {
    const result = this.getMedia(...array.data);
    this.resultado = result;
  }
}
