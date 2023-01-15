import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MetierprofessionnelleComponent } from './metierprofessionnelle.component';

describe('MetierprofessionnelleComponent', () => {
  let component: MetierprofessionnelleComponent;
  let fixture: ComponentFixture<MetierprofessionnelleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MetierprofessionnelleComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MetierprofessionnelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
