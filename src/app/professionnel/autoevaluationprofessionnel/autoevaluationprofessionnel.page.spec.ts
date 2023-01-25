import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutoevaluationprofessionnelPage } from './autoevaluationprofessionnel.page';

describe('AutoevaluationprofessionnelPage', () => {
  let component: AutoevaluationprofessionnelPage;
  let fixture: ComponentFixture<AutoevaluationprofessionnelPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoevaluationprofessionnelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutoevaluationprofessionnelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
