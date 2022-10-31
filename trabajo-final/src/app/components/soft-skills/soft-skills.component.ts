import { Component, OnInit } from '@angular/core';
import { SoftSkills } from 'src/app/model/soft-skills';
import { SoftSkillsService } from 'src/app/service/soft-skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.css']
})
export class SoftSkillsComponent implements OnInit {

  softskills: SoftSkills[] = [];

  constructor(private softskillsS: SoftSkillsService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void{
    this.softskillsS.lista().subscribe(
      data => {
        this.softskills = data;
      }
    )
  }

  delete(id: number){
    if(id != undefined){
      this.softskillsS.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("No se pudo borrar la skill");
        }
      );
    }
  }
}
