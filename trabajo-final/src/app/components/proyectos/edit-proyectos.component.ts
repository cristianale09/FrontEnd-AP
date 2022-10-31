import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent implements OnInit {

  proyectos : Proyectos = null;

  constructor(private proytectosS:ProyectosService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proytectosS.detail(id).subscribe(
      data => {
        this.proyectos = data;
      }, err => {
        alert("error al modificar el proyecto");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proytectosS.update(id, this.proyectos).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("error al modificar el proyecto");
        this.router.navigate(['']);
      }
    )
  }
}
