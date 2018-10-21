import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroAnguar7Component } from './intro-anguar7.component';

describe('IntroAnguar7Component', () => {
  let component: IntroAnguar7Component;
  let fixture: ComponentFixture<IntroAnguar7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroAnguar7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroAnguar7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
