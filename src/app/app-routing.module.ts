import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteunoComponent } from './public/home/componenteuno/componenteuno.component';

const routes: Routes = [

  {
    path:'Home',
    component:ComponenteunoComponent
     },

  {
    path:'',
    pathMatch:'full',
    redirectTo: '/Home'
  },

  {
    path:'security',
    loadChildren: ()=> import('./modules/security/security.module') .then(m => m.SecurityModule)
  },
  {
    path:'parameters',
    loadChildren:()=> import('./modules/parameters/parameters.module').then(m => m.ParametersModule)
  },


  /**Ultimo componente para redirigir a raiz */

  {
    path:'**',
    redirectTo: '/Home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
