import { Component, OnInit, Input } from '@angular/core';
import { Routes, ActivatedRoute, Params, Router } from '@angular/router';
import { TrabajoService } from '../../services/trabajo.service';
import { ExperienciasLaborales} from '../../models/trabajos';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-blog-trabajos',
  templateUrl: './blog-trabajos.component.html',
  styleUrls: ['./blog-trabajos.component.css'],
  providers: [TrabajoService]
})
export class BlogTrabajosComponent implements OnInit {

  public trabajos: ExperienciasLaborales[];
  public url: string;

  constructor(
    private _trabajoservice: TrabajoService,
  ) {
    this.url= Global.url;
   }

   ngOnInit() {
    this._trabajoservice.getTrabajos().subscribe(
      response => {
       // console.log(response)
        if(response.TrabajosRealizados){
          this.trabajos = response.TrabajosRealizados;
          //console.log(response.TrabajosRealizados);
        }else{
          alert('No se Cargaron Registro');
        }
      },
      error => {
        console.log(error);
      }
    );

  }

}