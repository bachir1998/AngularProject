import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBoComponent } from './navbar-bo.component';

describe('NavbarBoComponent', () => {
  let component: NavbarBoComponent;
  let fixture: ComponentFixture<NavbarBoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarBoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarBoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
