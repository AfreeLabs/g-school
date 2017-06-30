import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepConfigComponent } from './dep-config.component';

describe('DepConfigComponent', () => {
  let component: DepConfigComponent;
  let fixture: ComponentFixture<DepConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
