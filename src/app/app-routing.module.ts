import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrgComponent } from './org/org.component';

const routes: Routes = [
  {path: '', component: OrgComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
