import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiPracticeComponent } from './di-practice.component';

describe('DiPracticeComponent', () => {
  let component: DiPracticeComponent;
  let fixture: ComponentFixture<DiPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiPracticeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
