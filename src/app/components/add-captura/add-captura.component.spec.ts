import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCapturaComponent } from './add-captura.component';

describe('AddCapturaComponent', () => {
  let component: AddCapturaComponent;
  let fixture: ComponentFixture<AddCapturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCapturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCapturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
