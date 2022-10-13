import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css'],
})
export class LinksComponent implements OnInit {
  persona: persona = new persona('', '', '', '');
  isLogged = false;

  constructor(
    public personaService: PersonaService,
    private router: Router,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.cargarPersona();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  cargarPersona() {
    this.personaService.detail(1).subscribe((data) => {
      this.persona = data;
    });
  }

  login() {
    this.router.navigate(['/login']);
  }

  toEdu() {
    document.getElementById('educacion').scrollIntoView({ behavior: 'smooth' });
  }

  toAcerca() {
    document.getElementById('acerca').scrollIntoView({ behavior: 'smooth' });
  }

  toExp() {
    document
      .getElementById('experiencia')
      .scrollIntoView({ behavior: 'smooth' });
  }

  toSkills() {
    document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
  }

  toProyecto() {
    document.getElementById('proyecto').scrollIntoView({ behavior: 'smooth' });
  }

  toFooter() {
    document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
  }
}
