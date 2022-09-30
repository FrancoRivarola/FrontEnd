import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css'],
})
export class NuevoProyectoComponent implements OnInit {
  nombre: string = '';
  descripcion: string = '';
  constructor(private sProyecto: ProyectoService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const proyecto = new Proyecto(this.nombre, this.descripcion);
    this.sProyecto.save(proyecto).subscribe({
      next: (data) => {
        alert('Proyecto agregado');
        this.router.navigate(['']);
      },
      error: (err) => {
        alert('Fallo la carga');
        this.router.navigate(['']);
      },
    });
  }
}
