import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { CreationComponent } from './category/creation/creation.component';
import { EditionComponent } from './category/edition/edition.component';
import { ListComponent } from './category/list/list.component';
import { RemoveComponent } from './category/remove/remove.component';


@NgModule({
  declarations: [CreationComponent, EditionComponent, ListComponent, RemoveComponent],
  imports: [
    CommonModule,
    ParametersRoutingModule
  ]
})
export class ParametersModule { }
