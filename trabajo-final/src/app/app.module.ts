import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { BannerComponent } from './components/banner/banner.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { FooterComponent } from './components/footer/footer.component';
import { HardSoftSkillsComponent } from './components/hard-soft-skills/hard-soft-skills.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoSocialComponent } from './components/logo-social/logo-social.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, NgModel } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { EditSkillComponent } from './components/hard-soft-skills/edit-skill.component';
import { NewSkillComponent } from './components/hard-soft-skills/new-skill.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { HardSkillsComponent } from './components/hard-skills/hard-skills.component';
import { SoftSkillsComponent } from './components/soft-skills/soft-skills.component';
import { NewHardSkillsComponent } from './components/hard-skills/new-hard-skills.component';
import { EditHardSkillsComponent } from './components/hard-skills/edit-hard-skills.component';
import { NewSoftSkillsComponent } from './components/soft-skills/new-soft-skills.component';
import { EditSoftSkillsComponent } from './components/soft-skills/edit-soft-skills.component';
import { EditProyectosComponent } from './components/proyectos/edit-proyectos.component';
import { NewProyectosComponent } from './components/proyectos/new-proyectos.component';


@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    BannerComponent,
    ContactoComponent,
    EducacionComponent,
    ExperienciaComponent,
    FooterComponent,
    HardSoftSkillsComponent,
    HeaderComponent,
    LogoSocialComponent,
    ProyectosComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditAcercaDeComponent,
    HardSkillsComponent,
    SoftSkillsComponent,
    NewHardSkillsComponent,
    EditHardSkillsComponent,
    NewSoftSkillsComponent,
    EditSoftSkillsComponent,
    EditProyectosComponent,
    NewProyectosComponent,
],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],

  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
