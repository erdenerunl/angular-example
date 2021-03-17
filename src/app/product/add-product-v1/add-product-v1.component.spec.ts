import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductV1Component } from './add-product-v1.component';

describe('AddProductV1Component', () => {
  let component: AddProductV1Component;
  let fixture: ComponentFixture<AddProductV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
