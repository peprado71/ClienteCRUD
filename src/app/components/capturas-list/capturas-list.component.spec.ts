import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturasListComponent } from './capturas-list.component';

describe('CapturasListComponent', () => {
  let component: CapturasListComponent;
  let fixture: ComponentFixture<CapturasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapturasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapturasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
