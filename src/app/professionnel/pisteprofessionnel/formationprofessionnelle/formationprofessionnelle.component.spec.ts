import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormationprofessionnelleComponent } from './formationprofessionnelle.component';

describe('FormationprofessionnelleComponent', () => {
  let component: FormationprofessionnelleComponent;
  let fixture: ComponentFixture<FormationprofessionnelleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationprofessionnelleComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormationprofessionnelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
