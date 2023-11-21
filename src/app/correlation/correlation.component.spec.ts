import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { LinearRegressionComponent } from '../linear-regression/linear-regression.component';
import { CorrelationComponent } from './correlation.component';

import { TestService } from '../services/datatest1.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('CorrelationComponent', () => {
  let component: CorrelationComponent;
  let componentLinear: LinearRegressionComponent;
  let fixture: ComponentFixture<CorrelationComponent>;
  let fixtureLinear: ComponentFixture<LinearRegressionComponent>;
  let mockTestService: jasmine.SpyObj<TestService>;
  let testService: TestService;

  beforeEach(async () => {
    mockTestService = jasmine.createSpyObj('TestService', [
      'obtenerDatos1',
      'obtenerDatos2',
      'obtenerDatos3',
      'obtenerDatos4',
    ]);
    const datosTest = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601],
    };

    const datosTest2 = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_develop: [
        15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
      ],
    };

    const datosTest3 = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601],
    };

    const datosTest4 = {
      proxy_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_develop: [
        15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
      ],
    };

    mockTestService.obtenerDatos1.and.returnValue(of(datosTest));
    mockTestService.obtenerDatos2.and.returnValue(of(datosTest2));
    mockTestService.obtenerDatos3.and.returnValue(of(datosTest3));
    mockTestService.obtenerDatos4.and.returnValue(of(datosTest4));

    await TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [{ provide: TestService, useValue: mockTestService }],
      declarations: [CorrelationComponent, LinearRegressionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CorrelationComponent);
    fixtureLinear = TestBed.createComponent(LinearRegressionComponent);
    testService = TestBed.inject(TestService);
    component = fixture.componentInstance;
    componentLinear = fixtureLinear.componentInstance;
    testService = TestBed.inject(TestService);
    fixture.detectChanges();

    spyOn(component, 'ObtenerArreglo11').and.returnValue(Promise.resolve());
    spyOn(component, 'ObtenerArreglo22').and.returnValue(Promise.resolve());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return r=0.9545 with the dataset Data_Test1', () => {
    let r = component.FormulaCorrelacion(
      component.datos_Api_Test1.proxy_size,
      component.datos_Api_Test1.actual_added
    );

    expect(r).toBeCloseTo(0.9545, 4);
  });

  it('Should return rr=0.9111 with the dataset Data_Test1', () => {
    let r = component.FormulaCorrelacion(
      component.datos_Api_Test1.proxy_size,
      component.datos_Api_Test1.actual_added
    );

    let rr = component.rr(r);

    expect(rr).toBeCloseTo(0.9111, 4);
  });

  it('Should return r=0.9333 with the dataset Data_Test2', () => {
    let r = component.FormulaCorrelacion(
      component.datos_Api_Test2.proxy_size,
      component.datos_Api_Test2.actual_develop
    );

    expect(r).toBeCloseTo(0.9333, 4);
  });

  it('Should return rr=0.8711 with the dataset Data_Test2', () => {
    let r = component.FormulaCorrelacion(
      component.datos_Api_Test2.proxy_size,
      component.datos_Api_Test2.actual_develop
    );

    let rr = component.rr(r);

    expect(rr).toBeCloseTo(0.8711, 4);
  });

  it('Should return r=0.9631 with the dataset Data_Test3', () => {
    let r = component.FormulaCorrelacion(
      component.datos_Api_Test3.plan_added,
      component.datos_Api_Test3.actual_added
    );

    expect(r).toBeCloseTo(0.9631, 4);
  });

  it('Should return rr=0.9276. with the dataset Data_Test3', () => {
    let r = component.FormulaCorrelacion(
      component.datos_Api_Test3.plan_added,
      component.datos_Api_Test3.actual_added
    );

    let rr = component.rr(r);

    expect(rr).toBeCloseTo(0.9276, 4);
  });

  it('Should return r=0.9480 with the dataset Data_Test4', () => {
    let r = component.FormulaCorrelacion(
      component.datos_Api_Test4.proxy_added,
      component.datos_Api_Test4.actual_develop
    );

    expect(r).toBeCloseTo(0.948, 4);
  });

  it('Should return rr=0.8988 with the dataset Data_Test4', () => {
    let r = component.FormulaCorrelacion(
      component.datos_Api_Test4.proxy_added,
      component.datos_Api_Test4.actual_develop
    );

    let rr = component.rr(r);

    expect(rr).toBeCloseTo(0.8988, 4);
  });

  it('should calculate B0 correctly', () => {
    const result = component.ObtenerB0([1, 2, 3], [4, 5, 6]);
    const reult2 = component.ObtenerB1([1, 2, 3], [4, 5, 6]);
    const result3 = component.ObtenerYk([1, 2, 3], [4, 5, 6], 7);
    expect(result).toBe(3);
    expect(reult2).toBe(1);
    expect(result3).toBe(10);
    expect(component.ObtenerArreglo22).toBeDefined();
  });

  it('should calculate B0, B1, Yk, and rr correctly in CalcularResultado', () => {
    spyOn(component, 'FormulaCorrelacion').and.returnValue(0.8);
    spyOn(component, 'ObtenerB0').and.returnValue(2);
    spyOn(component, 'ObtenerB1').and.returnValue(3);
    spyOn(component, 'ObtenerYk').and.returnValue(4);
    spyOn(component, 'rr').and.returnValue(0.9);

    component.CalcularResultado([1, 2, 3], [4, 5, 6]);

    expect(component.resultado).toBe(0.8);
    expect(component.B0v).toBe(2);
    expect(component.B1v).toBe(3);
    expect(component.Yk).toBe(4);
    expect(component.resultado2).toBe(0.9);
  });

  it('should update xk correctly in ActualizarValorXk', () => {
    const mockEvent: any = { target: { value: '5' } };

    component.ActualizarValorXk(mockEvent);

    expect(component.xk).toBe('5');
  });

  it ("should call CalcularResultado when CalcularRegresionLineal is called", () => {

    component.array_elegido.dato1 = [1, 2, 3];

    component.array_elegido.dato2 = [4, 5, 6];

    let calcularBoton = fixture.debugElement.query(By.css('.ResultadoRegresion'));

    calcularBoton.triggerEventHandler('click', null);

    expect(component.resultado).toBe(1);
    expect(component.B0v).toBe(3);
    expect(component.B1v).toBe(1);
    expect(component.Yk).toBe(3);
    expect(component.resultado2).toBe(1);
  });

  it ("should call CalcularResultado when CalcularRegresionLineal is called", () => {

    component.array_elegido.dato1 = [1, 2, 3];

    component.array_elegido.dato2 = [4, 5, 6];

    let calcularBoton = fixture.debugElement.query(By.css('.ResultadoRegresion'));

    calcularBoton.triggerEventHandler('click', null);

    expect(component.resultado).toBe(1);
    expect(component.B0v).toBe(3);
    expect(component.B1v).toBe(1);
    expect(component.Yk).toBe(3);
    expect(component.resultado2).toBe(1);
  });

  it ("Probar que al presionar el boton para obtener el arreglo 11 se llene el arreglo 11", () =>
  {
    let botonArreglo11 = fixture.debugElement.query(By.css('.BotonObtenerArreglo11'));

    botonArreglo11.triggerEventHandler('click', null);

    expect(component.datos_Api_Test1).toBeDefined();
    expect(component.datos_Api_Test1.proxy_size).toBeDefined();
    expect(component.datos_Api_Test1.actual_added).toBeDefined();
    expect(component.array_elegido.dato1).toBeDefined();
    expect(component.array_elegido.dato2).toBeDefined();

  });

  //Probar input de xk
  it("Should set xk model through ngModel", async () => {
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(
      By.css('input[name="Input-xk"]')
    ).nativeElement;
    inputElement.value = "2.71";
    inputElement.dispatchEvent(new Event("input"));
    fixture.detectChanges();
    expect(component.xk).toEqual('2.71');
  });

});
