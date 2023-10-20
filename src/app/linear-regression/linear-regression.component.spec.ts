import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { LinearRegressionComponent } from './linear-regression.component';
import { TestService } from '../service/datatest1.service';
import { Calculate } from '../calculate';

describe('LinearRegressionComponent', () => {
  let component: LinearRegressionComponent;
  let fixture: ComponentFixture<LinearRegressionComponent>;
  let service: TestService;
  let datos1: any;
  let datos2: any;
  let datos3: any;
  let datos4: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [TestService],
      declarations: [ LinearRegressionComponent ]

    })
    .compileComponents();
    service = TestBed.inject(TestService);

    fixture = TestBed.createComponent(LinearRegressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach((done: DoneFn) => {
    service.getTest1().subscribe(response => {
      datos1 = response;
      done();
    });
  });

  beforeEach((done: DoneFn) => {
    service.getTest2().subscribe(response => {
      datos2 = response;
      done();
    });
  });

  beforeEach((done: DoneFn) => {
    service.getTest3().subscribe(response => {
      datos3 = response;
      done();
    });
  });

  beforeEach((done: DoneFn) => {
    service.getTest4().subscribe(response => {
      datos4 = response;
      done();
    });
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Return B0=-22.55', () => {
    const B0 = component.B0(datos1.proxy_size, datos1.actual_added);
    expect(B0).toBeCloseTo(-22.55, 2);
  });

  it('Return B1=1.7279 ', () => {
    const B1 = component.B1(datos1.proxy_size, datos1.actual_added);
    expect(B1).toBeCloseTo(1.7279, 4);
  });

  it('Return yk=644.429 if x=386', () => {
    const yk = component.yk(datos1.proxy_size, datos1.actual_added, 386);
    expect(yk).toBeCloseTo(644.429, 3);
  });


  it('Return B0=-4.039 ', () =>{
    const B0 =component.B0(datos2.proxy_size, datos2.actual_develop);
    expect(B0).toBeCloseTo(-4.039, 3);
  });

  it('Return B1=0.1681 ', () =>{
    const B1 =component.B1(datos2.proxy_size, datos2.actual_develop);
    expect(B1).toBeCloseTo(0.1681, 4);
  })

  it('Return yk=60.858  if x=386', () =>{
    const yk = component.yk(datos2.proxy_size, datos2.actual_develop, 386);
    expect(yk).toBeCloseTo(60.858, 3);
  })

  it('Return B0=-23.92 ', () =>{
    const B0 =component.B0(datos3.plan_added, datos3.actual_added);
    expect(B0).toBeCloseTo(-23.92, 2);
  })

  it('Return B1=1.43097   ', () =>{
    const B1 =component.B1(datos3.plan_added, datos3.actual_added);
    expect(B1).toBeCloseTo(1.43097, 5);
  })

  it('Return yk=528.4294  if x=386  ', () =>{
    const yk = component.yk(datos3.plan_added, datos3.actual_added, 386);
    expect(yk).toBeCloseTo(528.4294, 4);
  })

  it(' Return B0=-4.604   ', () =>{
    const B0 =component.B0(datos4.proxy_added, datos4.actual_develop);
    expect(B0).toBeCloseTo(-4.604, 3);
  })

  it(' Return B1=0.16064   ', () =>{
    const B1 =component.B1(datos4.proxy_added, datos4.actual_develop);
    expect(B1).toBeCloseTo(0.14016, 4);
  })

  xit('Return yk=49.4994  if x=386', () =>{
    const yk = component.yk(datos4.proxy_added, datos4.actual_develop, 386);
    expect(yk).toBeCloseTo(49.4994, 4);
  })
});
