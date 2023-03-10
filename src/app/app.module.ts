import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/redes/logo-ap.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencias/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { NuevaExperienciaComponent } from './components/experiencias/nueva-experiencia.component';
import { EditExperienciaComponent } from './components/experiencias/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { EditSkillsComponent } from './components/skills/edit-skills.component';
import { NewSkillsComponent } from './components/skills/new-skills.component';
import { NuevoProyectoComponent } from './components/proyecto/nuevo-proyecto.component';
import { EditProyectoComponent } from './components/proyecto/edit-proyecto.component';
import { LinksComponent } from './components/links/links.component';
import { ArribaComponent } from './components/arriba/arriba.component';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { NewAcercaDeComponent } from './components/acerca-de/new-acerca-de.component';
import { EditLinksComponent } from './components/links/edit-links.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { EditHeaderComponent } from './components/header/edit-header.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectoComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NuevaExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditEducacionComponent,
    EditSkillsComponent,
    NewSkillsComponent,
    NuevoProyectoComponent,
    EditProyectoComponent,
    LinksComponent,
    ArribaComponent,
    EditAcercaDeComponent,
    NewAcercaDeComponent,
    EditLinksComponent,
    EditHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({}),
    FormsModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
