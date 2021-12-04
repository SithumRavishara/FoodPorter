import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FoodporterAppComponent } from './foodporter-app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './view/main/home/home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    FoodporterAppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [FoodporterAppComponent]
})
export class AppModule { }
