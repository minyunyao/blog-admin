import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoundInfoComponent } from './bound-info.component';

describe('BoundInfoComponent', () => {
  let component: BoundInfoComponent;
  let fixture: ComponentFixture<BoundInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoundInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoundInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
