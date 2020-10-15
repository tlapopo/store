import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreationComponent } from './category/creation/creation.component';
import { EditionComponent } from './category/edition/edition.component';
import { ListComponent } from './category/list/list.component';
import { RemoveComponent } from './category/remove/remove.component';

const routes: Routes = [
  {
    path:'category-list',
    component:ListComponent 
  },
  {
    path:'category-creation',
    component:CreationComponent
  },
  {
    path:'category-edition',
    component:EditionComponent
  },
  {
    path:'category-remove',
    component:RemoveComponent
  },
  {
    path:'bran-list',
    component:ListComponent
  },
  {
    path:'bran-creation',
    component:CreationComponent
  },
  {
    path:'bran-edition',
    component:EditionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
