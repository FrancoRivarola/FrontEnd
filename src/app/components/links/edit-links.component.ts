import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-links',
  templateUrl: './edit-links.component.html',
  styleUrls: ['./edit-links.component.css'],
})
export class EditLinksComponent implements OnInit {
  persona: persona = new persona('', '', '', '');

  constructor(
    private activatedRouter: ActivatedRoute,
    private personaService: PersonaService,
    private router: Router,
    public imageService: ImageService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe({
      next: (data) => {
        this.persona = data;
      },
      error: (err) => {
        alert('Error al modificar experiencia');
        this.router.navigate(['']);
      },
    });
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.img = this.imageService.url;
    this.personaService.update(id, this.persona).subscribe({
      next: (data) => {
        alert('Imagen agregada');
        this.router.navigate(['']);
      },
      error: (err) => {
        alert('Error al agregar imagen');
        this.router.navigate(['']);
      },
    });
  }

  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = 'perfil_' + id;
    this.imageService.uploadImage($event, name);
  }
}
