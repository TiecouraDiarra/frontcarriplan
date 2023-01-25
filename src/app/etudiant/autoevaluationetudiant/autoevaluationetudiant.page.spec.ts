import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutoevaluationetudiantPage } from './autoevaluationetudiant.page';

describe('AutoevaluationetudiantPage', () => {
  let component: AutoevaluationetudiantPage;
  let fixture: ComponentFixture<AutoevaluationetudiantPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoevaluationetudiantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutoevaluationetudiantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
