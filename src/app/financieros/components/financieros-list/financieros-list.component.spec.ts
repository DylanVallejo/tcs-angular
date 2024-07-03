import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancierosListComponent } from './financieros-list.component';

describe('FinancierosListComponent', () => {
  let component: FinancierosListComponent;
  let fixture: ComponentFixture<FinancierosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinancierosListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinancierosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
