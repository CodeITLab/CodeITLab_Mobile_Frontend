import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminJoePage } from './admin-joe.page';

describe('AdminJoePage', () => {
  let component: AdminJoePage;
  let fixture: ComponentFixture<AdminJoePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminJoePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminJoePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
