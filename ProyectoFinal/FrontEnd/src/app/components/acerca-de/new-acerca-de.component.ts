import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcercaDe } from 'src/app/model/acerca-de';
import { AcercaDeService } from 'src/app/service/acerca-de.service';

@Component({
  selector: 'app-new-acerca-de',
  templateUrl: './new-acerca-de.component.html',
  styleUrls: ['./new-acerca-de.component.css'],
})
export class NewAcercaDeComponent implements OnInit {
  descripcion: string = '';

  constructor(private acercadeS: AcercaDeService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const acercaDe = new AcercaDe(this.descripcion);
    this.acercadeS.save(acercaDe).subscribe({
      next: (data) => {
        alert('Descripcion agregada correctamente');
        this.router.navigate(['']);
      },
      error: (err) => {
        alert('Fallo la carga');
        this.router.navigate(['']);
      },
    });
  }
}
