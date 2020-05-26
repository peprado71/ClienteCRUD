import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturaDetailsComponent } from './captura-details.component';

describe('CapturaDetailsComponent', () => {
  let component: CapturaDetailsComponent;
  let fixture: ComponentFixture<CapturaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapturaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapturaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
