import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemArticlesComponent } from './item-articles.component';

describe('ItemArticlesComponent', () => {
  let component: ItemArticlesComponent;
  let fixture: ComponentFixture<ItemArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
