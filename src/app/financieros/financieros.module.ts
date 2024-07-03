import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancierosListComponent } from './components/financieros-list/financieros-list.component';
import { FinancierosFormComponent } from './components/financieros-form/financieros-form.component';
// import { FinancierosComponent } from './name.component';

@NgModule({
  imports: [CommonModule],
  exports: [
    FinancierosListComponent
  ],
  declarations: [
    FinancierosListComponent,
    FinancierosFormComponent
  ],
  providers: [],
})
export class FinancierosModule { }
