import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SoftSkills } from 'src/app/model/soft-skills';
import { SoftSkillsService } from 'src/app/service/soft-skills.service';

@Component({
  selector: 'app-new-soft-skills',
  templateUrl: './new-soft-skills.component.html',
  styleUrls: ['./new-soft-skills.component.css']
})
export class NewSoftSkillsComponent implements OnInit {

  nombre:string;
  porcentaje: number;
  
  constructor(private softskillS: SoftSkillsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skill = new SoftSkills(this.nombre, this.porcentaje);
    this.softskillS.save(skill).subscribe(
      data => {
      alert("skill creada correctamente");
      this.router.navigate(['']);
    }, err => {
      alert("Fallo al añadir la skill");
      this.router.navigate(['']);
    });
  }
}
