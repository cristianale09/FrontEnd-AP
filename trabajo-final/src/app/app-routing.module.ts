import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditHardSkillsComponent } from './components/hard-skills/edit-hard-skills.component';
import { NewHardSkillsComponent } from './components/hard-skills/new-hard-skills.component';
import { EditSkillComponent } from './components/hard-soft-skills/edit-skill.component';
import { NewSkillComponent } from './components/hard-soft-skills/new-skill.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditProyectosComponent } from './components/proyectos/edit-proyectos.component';
import { NewProyectosComponent } from './components/proyectos/new-proyectos.component';
import { EditSoftSkillsComponent } from './components/soft-skills/edit-soft-skills.component';
import { NewSoftSkillsComponent } from './components/soft-skills/new-soft-skills.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path:'nuevaedu', component: NewEducacionComponent},
  {path:'editedu/:id', component: EditEducacionComponent},
  {path:'newskill', component: NewSkillComponent},
  {path:'editskill/:id', component: EditSkillComponent},
  {path:'editacercade/:id', component:EditAcercaDeComponent},
  {path:'edithardskills/:id', component:EditHardSkillsComponent},
  {path:'editsoftskills/:id', component:EditSoftSkillsComponent},
  {path:'newhardskills', component:NewHardSkillsComponent},
  {path:'newsoftskills', component:NewSoftSkillsComponent},
  {path:'editproyectos/:id', component:EditProyectosComponent},
  {path:'newproyectos', component:NewProyectosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
