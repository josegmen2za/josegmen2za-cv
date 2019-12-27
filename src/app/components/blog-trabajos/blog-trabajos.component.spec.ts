import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTrabajosComponent } from './blog-trabajos.component';

describe('BlogTrabajosComponent', () => {
  let component: BlogTrabajosComponent;
  let fixture: ComponentFixture<BlogTrabajosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogTrabajosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogTrabajosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
