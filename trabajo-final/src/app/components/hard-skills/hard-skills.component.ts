import { Component, OnInit } from '@angular/core';
import { HardSkills } from 'src/app/model/hard-skills';
import { HardSkillsService } from 'src/app/service/hard-skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.css']
})
export class HardSkillsComponent implements OnInit {
  hardSkills: HardSkills[] = [];

  constructor(private hardskillS: HardSkillsService, private tokenService: TokenService) { }

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
    this.hardskillS.lista().subscribe(
      data => {
        this.hardSkills = data;
      }
    )
  }

  delete(id: number){
    if(id != undefined){
      this.hardskillS.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("No se pudo borrar la skill");
        }
      )
    }
  }
}