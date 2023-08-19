import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateDocumentComponent } from './add-update-document.component';

describe('AddUpdateDocumentComponent', () => {
  let component: AddUpdateDocumentComponent;
  let fixture: ComponentFixture<AddUpdateDocumentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUpdateDocumentComponent]
    });
    fixture = TestBed.createComponent(AddUpdateDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
