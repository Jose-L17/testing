import { ComponentFixture, TestBed } from '@angular/core/testing';
import { simpson } from './simpson.component';
import { SimpsonComponent } from './simpson.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('media test suite', () => {

  let component: SimpsonComponent;
  let fixture: ComponentFixture<SimpsonComponent>;

  beforeEach(async()  => {

    await TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      declarations: [SimpsonComponent],
    }).compileComponents();

    component = new SimpsonComponent();
    fixture = TestBed.createComponent(SimpsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('Should return p = 16 if f(x) = 2x, x0=0, x1=4, num_seg=4, dof=0', () => {
    const resultado = simpson('2x', 0, 4, 4, 0, 0.00001);
    expect(resultado).toBe(16);
  });

  it('Should return p=0.33333 if f(x) = x*x, x0=0, x1=1, num_seg=4, dof =0', () => {
    const resultado = simpson('x*x', 0, 1, 4, 0, 0.00001);
    expect(resultado).toBe(0.33333);
  });

  it('Should return p=1 if f(x) = 1/x, x0=1, x1=4, num_seg=6, dof=0', () => {
    const resultado = simpson('1/x', 1, 1, 6, 0, 0.00001);
    expect(resultado).toBe(1);
  });

  it('Should return p = 0.35006 if X = 1.1, num_seg = 10 and Dof = 9', () => {
    const result = simpson('', 0, 1.1, 10, 9, 0.00001);
    expect(result).toBe(0.35006);
  });


  it('Should return p=1 if f(x) = 1/x, x0=1, x1=4, num_seg=6, dof=0', () => {
    const resultado = simpson('5/x', 1, 1, 6, 0, 0.00001);
    expect(resultado).toBe(1);
    });


    it('Actualiza la propiedad f correctamente', () => {
      const mockEvent = { target: { value: 'test' } } as any as Event;
      component.ActualizarF(mockEvent);
      expect(component.f).toBe('test');
    });

    it('Actualiza la propiedad x0 correctamente', () => {
      const mockEvent = { target: { value: '42' } } as any as Event;
      component.ActualizarX0(mockEvent);
      expect(component.x0).toBe(42);
    });

    it('Actualiza la propiedad x1 correctamente', () => {
      const mockEvent = { target: { value: '10.5' } } as any as Event;
      component.ActualizarX1(mockEvent);
      expect(component.x1).toBe(10.5);
    });

    it('Actualiza la propiedad num_seg correctamente', () => {
      const mockEvent = { target: { value: '5' } } as any as Event;
      component.ActualizarNumSeg(mockEvent);
      expect(component.num_seg).toBe(5);
    });

    it('Actualiza la propiedad dof correctamente', () => {
      const mockEvent = { target: { value: '3' } } as any as Event;
      component.ActualizarDof(mockEvent);
      expect(component.dof).toBe(3);
    });

    it('Actualiza la propiedad error correctamente', () => {
      const mockEvent = { target: { value: '0.00001' } } as any as Event;
      component.ActualizarError(mockEvent);
      expect(component.error).toBe(0.00001);
    });

    it('Calcula correctamente el resultado de la función Simpson', () => {
      component.f = ' x*x';
      component.x0 = 0;
      component.x1 = 1;
      component.num_seg = 10;
      component.dof = 0;
      component.error = 0.00001;

      component.Funcion_Simpson();

      expect(component.resultado).toBeCloseTo(1);
    });

    it("Revisa que se manden a llamar los métodos de ActualizarF, ActualizarX0, ActualizarX1, ActualizarNumSeg y ActualizarDof al presionar el boton ObtenerResultado", () => {

        let botonObtenerResultado = fixture.debugElement.query(By.css('.ObtenerResultado'));

        botonObtenerResultado.triggerEventHandler('click', null);

        expect(component.f).toBeDefined();
        expect(component.x0).toBeDefined();
        expect(component.x1).toBeDefined();
        expect(component.num_seg).toBeDefined();
        expect(component.dof).toBeDefined();
        expect(component.error).toBeDefined();
        expect(component.resultado).toBeDefined();
    });

});
