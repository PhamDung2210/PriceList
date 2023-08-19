import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PriceComponent } from './price/price.component';
import { DcreeComponent } from './dcree/dcree.component';
import { DocumentComponent } from './document/document.component';
const routes: Routes = [
  {path: 'price', component: PriceComponent},
  {path: 'dcree', component: DcreeComponent},
  {path: 'document', component: DocumentComponent},];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
