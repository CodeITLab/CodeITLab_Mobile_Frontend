import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategorySelectionPage } from './category-selection.page';

describe('CategorySelectionPage', () => {
  let component: CategorySelectionPage;
  let fixture: ComponentFixture<CategorySelectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorySelectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategorySelectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
