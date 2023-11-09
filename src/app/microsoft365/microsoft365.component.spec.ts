import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Microsoft365Component } from './microsoft365.component';

describe('Microsoft365Component', () => {
  let component: Microsoft365Component;
  let fixture: ComponentFixture<Microsoft365Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Microsoft365Component]
    });
    fixture = TestBed.createComponent(Microsoft365Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
