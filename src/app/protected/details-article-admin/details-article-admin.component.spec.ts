import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsArticleAdminComponent } from './details-article-admin.component';

describe('DetailsArticleAdminComponent', () => {
  let component: DetailsArticleAdminComponent;
  let fixture: ComponentFixture<DetailsArticleAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsArticleAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsArticleAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
