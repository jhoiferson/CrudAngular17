import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/component/layout/layout.component';

export const routes: Routes = [{
  path:"",
  component:LayoutComponent,
  children:[
    {
      path:"alumnos",
      loadChildren:()=>import('./views/alumnos/alumnos.routes').then(m=> m.ALUMNOS_ROUTES)
    }
  ]
}];
