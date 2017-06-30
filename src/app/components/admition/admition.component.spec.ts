import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmitionComponent } from './admition.component';

describe('AdmitionComponent', () => {
  let component: AdmitionComponent;
  let fixture: ComponentFixture<AdmitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
