import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBasicsComponent } from './the-basics.component';

describe('TheBasicsComponent', () => {
  let component: TheBasicsComponent;
  let fixture: ComponentFixture<TheBasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheBasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
