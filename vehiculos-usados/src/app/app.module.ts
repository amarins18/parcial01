import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { VehiculoModule } from './vehiculo/vehiculo.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    VehiculoModule,
    AppComponent 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
