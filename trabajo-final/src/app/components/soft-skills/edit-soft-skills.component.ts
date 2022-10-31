import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SoftSkills } from 'src/app/model/soft-skills';
import { SoftSkillsService } from 'src/app/service/soft-skills.service';

@Component({
  selector: 'app-edit-soft-skills',
  templateUrl: './edit-soft-skills.component.html',
  styleUrls: ['./edit-soft-skills.component.css']
})
export class EditSoftSkillsComponent implements OnInit {

  softskills: SoftSkills = null;

  constructor(private softskillS: SoftSkillsService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.softskillS.detail(id).subscribe(
      data => {
        this.softskills = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.softskillS.update(id, this.softskills).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la skill");
        this.router.navigate(['']);
      }
    )
  }
}
