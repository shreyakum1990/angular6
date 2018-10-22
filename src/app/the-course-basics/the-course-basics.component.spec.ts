import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheCourseBasicsComponent } from './the-course-basics.component';

describe('TheCourseBasicsComponent', () => {
  let component: TheCourseBasicsComponent;
  let fixture: ComponentFixture<TheCourseBasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheCourseBasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheCourseBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
