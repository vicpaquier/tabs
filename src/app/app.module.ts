import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//material
import {MatTabsModule} from '@angular/material/tabs'; 



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabComponent } from './pages/tab/tab.component';
import { Componente1Component } from './pages/componente1/componente1.component';
import { Componente2Component } from './pages/componente2/componente2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Componente3Component } from './pages/componente3/componente3.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    Componente1Component,
    Componente2Component,
    Componente3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
