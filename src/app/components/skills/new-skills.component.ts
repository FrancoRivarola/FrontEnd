import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css'],
})
export class NewSkillsComponent implements OnInit {
  nombre: string;
  porcentaje: number;

  constructor(private Sskills: SkillsService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const skill = new Skills(this.nombre, this.porcentaje);
    this.Sskills.save(skill).subscribe({
      next: (data) => {
        alert('Skill creada correctamente');
        location.replace('https://francorivarola.tech/#skills');
      },
      error: (err) => {
        alert('Fallo al agregar Skill');
        location.replace('https://francorivarola.tech/#skills');
      },
    });
  }
}
