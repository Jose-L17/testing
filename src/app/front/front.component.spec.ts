import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontComponent } from './front.component';

import { RouterTestingModule } from '@angular/router/testing';
import { DesviacionComponent } from '../desviacion/desviacion.component';

import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('FrontComponent', () => {
  let component: FrontComponent;
  let fixture: ComponentFixture<FrontComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, RouterTestingModule.withRoutes([{ path: 'Media', component: DesviacionComponent }])],
      declarations: [FrontComponent, DesviacionComponent],

    }).compileComponents();
    fixture = TestBed.createComponent(FrontComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  xit('should create the app', () => {
    const fixture = TestBed.createComponent(FrontComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  xit('should render title', () => {
    const fixture = TestBed.createComponent(FrontComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'testing_pruebas app is running!'
    );
  });

  it('should import MediaComponent when the button is clicked', () => {
    const button = fixture.debugElement.query(By.css('.A1'));

    button.nativeElement.click();
    fixture.detectChanges();

    const mediaComponent = fixture.debugElement.query(By.directive(DesviacionComponent));
    expect(mediaComponent).toBeDefined();
  });

});
