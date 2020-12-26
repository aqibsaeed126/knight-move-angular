import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnightMoveComponent } from './knight-move.component';

describe('KnightMoveComponent', () => {
  let component: KnightMoveComponent;
  let fixture: ComponentFixture<KnightMoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnightMoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnightMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
