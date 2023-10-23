import { HoursService } from './../services/data.service';
import { SizeService } from '../services/data2.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { MediaComponent } from './media.component';

describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;
  let hoursService: HoursService;
  let sizeService: SizeService;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [{ provide: HoursService, useValue: hoursService }, HoursService, SizeService] // Proporciona el servicio falso
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    hoursService = TestBed.inject(HoursService);
    sizeService = TestBed.inject(SizeService);
    httpTestingController = TestBed.inject(HttpTestingController); // Obtiene una instancia del controlador de pruebas HTTP

  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('should return mean = 60.32 with the data Hours', () => {
    const result= component.getMedia(
      15.0,
      69.9,
      6.5,
      22.4,
      28.4,
      65.9,
      19.4,
      198.7,
      38.8,
      138.2);
    //Testear que la media retornada sea 60.32
    expect(result).toBe(60.32)
  })

  it('should return mean = 550.6 with the data Size', () => {
    //Mandar al método getMedia el array de datos que nos retorna la ejecución de obtenerMediaSize
    const result= component.getMedia(
      160,
      591,
      114,
      229,
      230,
      270,
      128,
      1657,
      624,
      1503);
    //Testear que la media retornada sea 550.6
    expect(result).toBe(550.6)
  })


  it('Probar metodo obtener Media'), () => {
    const horas = [1,2,3,4,5,6,7,8,9,10];
    const result = component.getMedia(...horas);
    expect(result).toBe(5.5);
  }



});
