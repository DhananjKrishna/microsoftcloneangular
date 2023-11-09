import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceComponent } from './surface.component';

describe('SurfaceComponent', () => {
  let component: SurfaceComponent;
  let fixture: ComponentFixture<SurfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurfaceComponent]
    });
    fixture = TestBed.createComponent(SurfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
