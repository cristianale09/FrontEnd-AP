import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HardSkills } from 'src/app/model/hard-skills';
import { HardSkillsService } from 'src/app/service/hard-skills.service';

@Component({
  selector: 'app-edit-hard-skills',
  templateUrl: './edit-hard-skills.component.html',
  styleUrls: ['./edit-hard-skills.component.css']
})

export class EditHardSkillsComponent implements OnInit {
  hardskills: HardSkills = null;

  constructor(private hardskillS: HardSkillsService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.hardskillS.detail(id).subscribe(
      data => {
        this.hardskills = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.hardskillS.update(id, this.hardskills).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la skill");
        this.router.navigate(['']);
      }
    )
  }
}
