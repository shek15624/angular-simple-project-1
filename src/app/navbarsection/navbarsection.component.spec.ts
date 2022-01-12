import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarsectionComponent } from './navbarsection.component';

describe('NavbarsectionComponent', () => {
  let component: NavbarsectionComponent;
  let fixture: ComponentFixture<NavbarsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarsectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
