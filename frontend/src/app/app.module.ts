import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddeditproductComponent } from './components/addeditproduct/addeditproduct.component';
import { ListproductComponent } from './components/listproduct/listproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    AddeditproductComponent,
    ListproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
