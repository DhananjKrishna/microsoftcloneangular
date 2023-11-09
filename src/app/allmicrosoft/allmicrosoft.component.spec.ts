import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmicrosoftComponent } from './allmicrosoft.component';

describe('AllmicrosoftComponent', () => {
  let component: AllmicrosoftComponent;
  let fixture: ComponentFixture<AllmicrosoftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllmicrosoftComponent]
    });
    fixture = TestBed.createComponent(AllmicrosoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
