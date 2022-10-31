import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardSkills } from 'src/app/model/hard-skills';
import { HardSkillsService } from 'src/app/service/hard-skills.service';

@Component({
  selector: 'app-new-hard-skills',
  templateUrl: './new-hard-skills.component.html',
  styleUrls: ['./new-hard-skills.component.css']
})

export class NewHardSkillsComponent implements OnInit {
  nombre:string;
  porcentaje: number;
  
  constructor(private hardskillS: HardSkillsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const hardskill = new HardSkills(this.nombre, this.porcentaje);
    this.hardskillS.save(hardskill).subscribe(
      data => {
      alert("skill creada correctamente");
      this.router.navigate(['']);
    }, err => {
      alert("Fallo al añadir la skill");
      this.router.navigate(['']);
    });
  }
}