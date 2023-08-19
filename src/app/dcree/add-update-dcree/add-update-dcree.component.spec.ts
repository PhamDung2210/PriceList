import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateDcreeComponent } from './add-update-dcree.component';

describe('AddUpdateDcreeComponent', () => {
  let component: AddUpdateDcreeComponent;
  let fixture: ComponentFixture<AddUpdateDcreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUpdateDcreeComponent]
    });
    fixture = TestBed.createComponent(AddUpdateDcreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
