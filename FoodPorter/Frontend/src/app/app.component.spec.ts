import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FoodporterAppComponent } from './foodporter-app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        FoodporterAppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(FoodporterAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'FoodPorterFrontend'`, () => {
    const fixture = TestBed.createComponent(FoodporterAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('FoodPorterFrontend');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(FoodporterAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('FoodPorterFrontend app is running!');
  });
});
