import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculoRoutingModule } from './vehiculo-routing.module';
import { VehiculoListarComponent } from './vehiculo-listar/vehiculo-listar.component';

@NgModule({
  imports: [
    CommonModule,
    VehiculoRoutingModule,
    VehiculoListarComponent 
  ]
})
export class VehiculoModule { }
