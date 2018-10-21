import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBasicsCopntComponent } from './the-basics-copnt.component';

describe('TheBasicsCopntComponent', () => {
  let component: TheBasicsCopntComponent;
  let fixture: ComponentFixture<TheBasicsCopntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheBasicsCopntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheBasicsCopntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
