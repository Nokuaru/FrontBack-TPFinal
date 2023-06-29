import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddeditproductComponent } from './components/addeditproduct/addeditproduct.component';
import { ListproductComponent } from './components/listproduct/listproduct.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {path: '',component: ListproductComponent},
  {path: 'add',component: AddeditproductComponent},
  {path: 'about',component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
