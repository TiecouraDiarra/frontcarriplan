import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsautoevaluationprofessionnelPage } from './detailsautoevaluationprofessionnel.page';

describe('DetailsautoevaluationprofessionnelPage', () => {
  let component: DetailsautoevaluationprofessionnelPage;
  let fixture: ComponentFixture<DetailsautoevaluationprofessionnelPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsautoevaluationprofessionnelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsautoevaluationprofessionnelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
