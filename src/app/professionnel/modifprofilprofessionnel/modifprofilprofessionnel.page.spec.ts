import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModifprofilprofessionnelPage } from './modifprofilprofessionnel.page';

describe('ModifprofilprofessionnelPage', () => {
  let component: ModifprofilprofessionnelPage;
  let fixture: ComponentFixture<ModifprofilprofessionnelPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifprofilprofessionnelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModifprofilprofessionnelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
