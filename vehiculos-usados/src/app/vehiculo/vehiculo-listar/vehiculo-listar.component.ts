//  IMPORTS
import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../vehiculo';
import { NgForOf, KeyValuePipe } from '@angular/common'; 

@Component({
  selector: 'app-vehiculo-listar',
  standalone: true,
  imports: [NgForOf, KeyValuePipe], 
  templateUrl: './vehiculo-listar.component.html',
  styleUrls: ['./vehiculo-listar.component.css']
})
export class VehiculoListarComponent implements OnInit {

  vehiculos: Vehiculo[] = [];
  conteoMarcas: { [marca: string]: number } = {};

  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit() {
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;

      this.conteoMarcas = {};
      this.vehiculos.forEach((vehiculo) => {
        if (this.conteoMarcas[vehiculo.marca]) {
          this.conteoMarcas[vehiculo.marca]++;
        } else {
          this.conteoMarcas[vehiculo.marca] = 1;
        }
      });
    });
  }
}
