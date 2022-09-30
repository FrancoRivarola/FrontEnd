import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencias/edit-experiencia.component';
import { NuevaExperienciaComponent } from './components/experiencias/nueva-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewSkillsComponent } from './components/skills/new-skills.component';
import { EditSkillsComponent } from './components/skills/edit-skills.component';
import { NuevoProyectoComponent } from './components/proyecto/nuevo-proyecto.component';
import { EditProyectoComponent } from './components/proyecto/edit-proyecto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NuevaExperienciaComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'nuevaedu', component: NeweducacionComponent },
  { path: 'editedu/:id', component: EditEducacionComponent },
  { path: 'newskills', component: NewSkillsComponent },
  { path: 'editskills/:id', component: EditSkillsComponent },
  { path: 'nuevopro', component: NuevoProyectoComponent },
  { path: 'editpro/:id', component: EditProyectoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
