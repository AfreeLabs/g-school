import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreeDetailsComponent } from './registree-details.component';

describe('RegistreeDetailsComponent', () => {
  let component: RegistreeDetailsComponent;
  let fixture: ComponentFixture<RegistreeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistreeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistreeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
