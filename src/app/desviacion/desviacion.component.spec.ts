import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { DesviacionComponent } from './desviacion.component';
import { HoursService } from '../services/data.service';
import { SizeService } from '../services/data2.service';

describe('DesviacionComponent', () => {
  let component: DesviacionComponent;
  let fixture: ComponentFixture<DesviacionComponent>;
  let hoursService: HoursService;
  let sizeService: SizeService;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ DesviacionComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ HoursService, SizeService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesviacionComponent);
    component = fixture.componentInstance;
    hoursService = TestBed.inject(HoursService);
    sizeService = TestBed.inject(SizeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return mean = 60.32 with the data Hours', () => {
    component.horas = { data: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2] };
    const result = component.getMedia(...component.horas.data);
    expect(result).toBe(60.32);
  });

  it('should return mean = 550.6 with the data Size', () => {
    component.size = { data: [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503] };
    const result = component.getMedia(...component.size.data);
    expect(result).toBe(550.6);
  });

  it('should return mean = 5.5 with sample data', () => {
    const result = component.getMedia(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    expect(result).toBe(5.5);
  });

  it('should return standard deviation = 2.87 with sample data', () => {
    const sampleData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const media = component.getMedia(...sampleData);
    const result = component.getDesviacion(sampleData, media);
    expect(result).toBe(3.03);
  });

  it('should return standard deviation = 62.26 with data Hours', () => {
    component.horas = { data: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2] };
    const media = component.getMedia(...component.horas.data);
    const result = component.getDesviacion(component.horas.data, media);
    expect(result).toBe(62.26);
  });

  it('should call getHours and getSize during ngOnInit', async () => {
    spyOn(component, 'getHours').and.returnValue(Promise.resolve());
    spyOn(component, 'getSize').and.returnValue(Promise.resolve());

    await component.ngOnInit();

    expect(component.getHours).toHaveBeenCalled();
    expect(component.getSize).toHaveBeenCalled();
  });

  it('should handle data for getHours and getSize during ngOnInit', async () => {
    const hoursData = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    const sizeData = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

    spyOn(component, 'getHours').and.returnValue(Promise.resolve());
    spyOn(component, 'getSize').and.returnValue(Promise.resolve());

    spyOn(component.hoursService, 'getHours').and.returnValue(of(hoursData));
    spyOn(component.sizeService, 'getSize').and.returnValue(of(sizeData));

    await component.ngOnInit();
    component.horas = hoursData;
    component.size = sizeData;
    expect(component.horas).toEqual(hoursData);
    expect(component.size).toEqual(sizeData);
  });

  it('should return data for getHours', async () => {
    const hoursData = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

    spyOn(component.hoursService, 'getHours').and.returnValue(of(hoursData));

    await component.getHours();

    expect(component.horas).toEqual(hoursData);
  });

  it('should return data for getSize', async () => {
    const sizeData = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

    spyOn(component.sizeService, 'getSize').and.returnValue(of(sizeData));

    await component.getSize();

    expect(component.size).toEqual(sizeData);
  });

  // Prueba para cubrir this.size.data && Array.isArray(this.size.data)
  it('should return data for getSize', async () => {
    const sizeData = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

    spyOn(component.sizeService, 'getSize').and.returnValue(of(sizeData));

    await component.getSize();

    expect(component.size).toEqual(sizeData);
  });

  // Prueba para cubrir this.horas && this.horas.data && Array.isArray(this.horas.data)
  it('should return data for getHours', async () => {
    const hoursData = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

    spyOn(component.hoursService, 'getHours').and.returnValue(of(hoursData));

    await component.getHours();

    expect(component.horas).toEqual(hoursData);
  });

  it('should calculate media_hours if horas.data is valid', () => {
    const horasData = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

    component.horas = { data: horasData };

    spyOn(component, 'getMedia').and.returnValue(5.5);

    component.obtenerMediaHours();

    expect(component.getMedia).toHaveBeenCalledWith(...horasData);

    expect(component.media_hours).toBeDefined();
  });

  it('should calculate media_size if size.data is valid', () => {
    const sizeData = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

    component.size = { data: sizeData };

    spyOn(component, 'getMedia').and.returnValue(5.5);

    component.obtenerMediaSize();

    expect(component.getMedia).toHaveBeenCalledWith(...sizeData);

    expect(component.media_size).toBeDefined();
  });

  it('should calculate desviacion_hours if horas.data is valid', () => {
    const horasData = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

    component.horas = { data: horasData };

    spyOn(component, 'getMedia').and.returnValue(5.5);
    spyOn(component, 'getDesviacion').and.returnValue(3.03);

    component.calcularDesviacionHours();

    expect(component.getMedia).toHaveBeenCalledWith(...horasData);
    expect(component.getDesviacion).toHaveBeenCalledWith(horasData, 5.5);

    expect(component.desviacion_hours).toBeDefined();
  });

  it('should calculate desviacion_size if size.data is valid', () => {
    const sizeData = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

    component.size = { data: sizeData };

    spyOn(component, 'getMedia').and.returnValue(5.5);
    spyOn(component, 'getDesviacion').and.returnValue(3.03);

    component.calcularDesviacionSize();

    expect(component.getMedia).toHaveBeenCalledWith(...sizeData);
    expect(component.getDesviacion).toHaveBeenCalledWith(sizeData, 5.5);

    expect(component.desviacion_size).toBeDefined();
  });

  it('should call getHours and getSize during ngOnInit', async () => {
    spyOn(component, 'getHours').and.returnValue(Promise.resolve());
    spyOn(component, 'getSize').and.returnValue(Promise.resolve());

    await component.ngOnInit();

    expect(component.getHours).toHaveBeenCalled();
    expect(component.getSize).toHaveBeenCalled();
  });

  it('should return 0 when numbers array is empty', () => {
    const result = component.getMedia();
    expect(result).toBe(0);
  });

});
