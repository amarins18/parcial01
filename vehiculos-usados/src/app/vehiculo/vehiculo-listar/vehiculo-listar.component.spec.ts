import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiculoListarComponent } from './vehiculo-listar.component';
import { VehiculoService } from '../vehiculo.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';



describe('VehiculoService', () => {
  let service: VehiculoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VehiculoService]
    });
    service = TestBed.inject(VehiculoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
