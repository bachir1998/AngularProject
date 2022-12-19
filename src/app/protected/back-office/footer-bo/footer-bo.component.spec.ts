import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBoComponent } from './footer-bo.component';

describe('FooterBoComponent', () => {
  let component: FooterBoComponent;
  let fixture: ComponentFixture<FooterBoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterBoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterBoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
