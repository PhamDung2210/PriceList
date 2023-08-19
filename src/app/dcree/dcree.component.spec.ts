import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcreeComponent } from './dcree.component';

describe('DcreeComponent', () => {
  let component: DcreeComponent;
  let fixture: ComponentFixture<DcreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcreeComponent]
    });
    fixture = TestBed.createComponent(DcreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
