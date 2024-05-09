import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesPracticeComponent } from './directives-practice.component';

describe('DirectivesPracticeComponent', () => {
  let component: DirectivesPracticeComponent;
  let fixture: ComponentFixture<DirectivesPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectivesPracticeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectivesPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
