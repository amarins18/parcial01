import { Component } from '@angular/core';
import { VehiculoListarComponent } from './vehiculo/vehiculo-listar/vehiculo-listar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VehiculoListarComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vehiculos-usados';
}
