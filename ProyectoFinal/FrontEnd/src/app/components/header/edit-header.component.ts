import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-header',
  templateUrl: './edit-header.component.html',
  styleUrls: ['./edit-header.component.css'],
})
export class EditHeaderComponent implements OnInit {
  persona: persona = new persona('', '', '', '');

  constructor(
    private activatedRouter: ActivatedRoute,
    private personaServise: PersonaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaServise.detail(id).subscribe({
      next: (data) => {
        this.persona = data;
      },
      error: (err) => {
        alert('Error al modificar experiencia');
        location.replace('https://francorivarola.tech/#header');
      },
    });
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaServise.update(id, this.persona).subscribe({
      next: (data) => {
        alert('Editado correctamente');
        location.replace('https://francorivarola.tech/#header');
      },
      error: (err) => {
        alert('Error al modificar');
        location.replace('https://francorivarola.tech/#header');
      },
    });
  }
}
