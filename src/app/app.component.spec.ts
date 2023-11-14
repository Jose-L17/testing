import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DesviacionComponent } from './desviacion/desviacion.component';

import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, RouterTestingModule.withRoutes([{ path: 'Media', component: DesviacionComponent }])],
      declarations: [AppComponent, DesviacionComponent],

    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  xit('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  xit('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
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
