import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddeditpokemonComponent } from './components/addeditpokemon/addeditpokemon.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {path: '',component: PokedexComponent},
  {path: 'add',component: AddeditpokemonComponent},
  {path: 'about',component: AboutComponent},
  { path:'add/:id', component: AddeditpokemonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
