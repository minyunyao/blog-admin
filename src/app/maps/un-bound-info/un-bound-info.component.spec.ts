import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnBoundInfoComponent } from './un-bound-info.component';

describe('UnBoundInfoComponent', () => {
  let component: UnBoundInfoComponent;
  let fixture: ComponentFixture<UnBoundInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnBoundInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnBoundInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
