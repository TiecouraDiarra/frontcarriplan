import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsautoevaluationelevePage } from './detailsautoevaluationeleve.page';

describe('DetailsautoevaluationelevePage', () => {
  let component: DetailsautoevaluationelevePage;
  let fixture: ComponentFixture<DetailsautoevaluationelevePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsautoevaluationelevePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsautoevaluationelevePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
