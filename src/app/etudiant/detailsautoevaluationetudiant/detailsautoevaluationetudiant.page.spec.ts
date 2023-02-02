import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsautoevaluationetudiantPage } from './detailsautoevaluationetudiant.page';

describe('DetailsautoevaluationetudiantPage', () => {
  let component: DetailsautoevaluationetudiantPage;
  let fixture: ComponentFixture<DetailsautoevaluationetudiantPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsautoevaluationetudiantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsautoevaluationetudiantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
