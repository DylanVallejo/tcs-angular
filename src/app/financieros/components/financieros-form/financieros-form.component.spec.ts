import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancierosFormComponent } from './financieros-form.component';

describe('FinancierosFormComponent', () => {
  let component: FinancierosFormComponent;
  let fixture: ComponentFixture<FinancierosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinancierosFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinancierosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
