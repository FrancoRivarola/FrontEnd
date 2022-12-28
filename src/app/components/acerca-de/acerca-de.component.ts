import { Component, OnInit } from '@angular/core';
import { AcercaDe } from 'src/app/model/acerca-de';
import { AcercaDeService } from 'src/app/service/acerca-de.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
})
export class AcercaDeComponent implements OnInit {
  acercaDe: AcercaDe[] = [];

  constructor(
    private acercaDeS: AcercaDeService,
    private tokenService: TokenService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarAcercaDe();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarAcercaDe(): void {
    this.acercaDeS.lista().subscribe((data) => {
      this.acercaDe = data;
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.acercaDeS.delete(id).subscribe({
        next: (data) => {
          this.cargarAcercaDe();
        },
        error: (err) => {
          alert('No se pudo eliminar');
        },
      });
    }
  }
}
