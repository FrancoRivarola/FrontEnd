import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css'],
})
export class EditProyectoComponent implements OnInit {
  proyecto: Proyecto = null;

  constructor(
    private sProyecto: ProyectoService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.detail(id).subscribe({
      next: (data) => {
        this.proyecto = data;
      },
      error: (err) => {
        alert('Error al modificar proyecto');
        location.replace('https://francorivarola.tech/#proyecto');
      },
    });
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.update(id, this.proyecto).subscribe({
      next: (data) => {
        alert('Proyecto editado correctamente');
        location.replace('https://francorivarola.tech/#proyecto');
      },
      error: (err) => {
        alert('Error al modificar proyecto');
        location.replace('https://francorivarola.tech/#proyecto');
      },
    });
  }
}
