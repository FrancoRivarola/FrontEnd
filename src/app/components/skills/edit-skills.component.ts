import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css'],
})
export class EditSkillsComponent implements OnInit {
  skills: Skills = null;

  constructor(
    private skill: SkillsService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skill.detail(id).subscribe({
      next: (data) => {
        this.skills = data;
      },
      error: (err) => {
        alert('Error al modificar');
        location.replace('https://francorivarola.tech/#skills');
      },
    });
  }

  onUpdate() {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skill.update(id, this.skills).subscribe({
      next: (data) => {
        alert('Skill editado correctamente');
        location.replace('https://francorivarola.tech/#skills');
      },
      error: (err) => {
        alert('Error al modificar el skill');
        location.replace('https://francorivarola.tech/#skills');
      },
    });
  }
}
