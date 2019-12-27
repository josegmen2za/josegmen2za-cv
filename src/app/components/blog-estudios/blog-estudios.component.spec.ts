import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogEstudiosComponent } from './blog-estudios.component';

describe('BlogEstudiosComponent', () => {
  let component: BlogEstudiosComponent;
  let fixture: ComponentFixture<BlogEstudiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogEstudiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogEstudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
