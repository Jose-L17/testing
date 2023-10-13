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
    hoursService = jasmine.createSpyObj('HoursService', ['getHours']); // Crea un servicio "falso" con el método getHours
    sizeService = jasmine.createSpyObj('SizeService', ['getSize']); // Crea un servicio "falso" con el método getSize
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

  it('Probar que el metodo mediaSize esté funcionando', () => {
    const mediaSizeSpy = spyOn(component, 'getHours');
    fixture.detectChanges();
    expect(mediaSizeSpy).toHaveBeenCalled();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Funcionamiento ObtenerMediaHours', () => {
    const probar_componente = spyOn(component, 'getHours');
    component.getHours();
    expect(probar_componente).toHaveBeenCalled();
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

  xit('#getHours should fill the horas array with real data', () => {
    const hoursService = TestBed.inject(HoursService);
    const expectedData: any = [/* Datos reales que esperas */];

    // Realiza una llamada real al servicio
    hoursService.getHours().subscribe((data: any[]) => {
      expect(data).toEqual(expectedData);
      component.horas = data; // Llena el componente con los datos reales
    });

    const req = httpTestingController.expectOne('http://localhost:8080/hours');
    req.flush(expectedData);

    httpTestingController.verify();
  });

  it('#getHours should fill the horas array with real data', () => {

    fixture.detectChanges();
    fixture.componentInstance;

    console.log(component.horas);
  });


  it('Retorno correcto al llamado de Api Size', () => {
    //Simulación de lo que la Api retornará al hacer el método Get del Array Size
    let array:any = [
      160,
      591,
      114,
      229,
      230,
      270,
      128,
      1657,
      624,
      1503
    ]

    let datos_obtenidos: any;

    const servicio = spyOn(sizeService, 'getSize').and.returnValue(of({ data: array }));

    component.getSize();
    component.sizeService.getSize().subscribe((data) => datos_obtenidos = data.data)

    expect(servicio).toHaveBeenCalled();

    const result= component.getMedia( ...datos_obtenidos  );
    expect(result).toBe(550.6)

    expect(datos_obtenidos).toBe(array)
  })

  it('Retorno correcto al llamado de Api Hours', () => {
    //Simulación de lo que la Api retornará al hacer el método Get del Array Size
    let array:any = [
      15.0,
      69.9,
      6.5,
      22.4,
      28.4,
      65.9,
      19.4,
      198.7,
      38.8,
      138.2
    ]

    let datos_obtenidos: any;

    const servicio = spyOn(hoursService, 'getHours').and.returnValue(of({ data: array }));

    component.getHours();
    component.hoursService.getHours().subscribe((data) => datos_obtenidos = data.data)

    expect(servicio).toHaveBeenCalled();

    const result= component.getMedia( ...datos_obtenidos  );
    expect(result).toBe(60.32)

    expect(datos_obtenidos).toBe(array)
  })

  it('Probar metodo obtener Media'), () => {
    const horas = [1,2,3,4,5,6,7,8,9,10];
    const result = component.getMedia(...horas);
    expect(result).toBe(5.5);
  }



});
