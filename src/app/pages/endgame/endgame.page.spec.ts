import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EndgamePage } from './endgame.page';

describe('EndgamePage', () => {
  let component: EndgamePage;
  let fixture: ComponentFixture<EndgamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndgamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EndgamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
