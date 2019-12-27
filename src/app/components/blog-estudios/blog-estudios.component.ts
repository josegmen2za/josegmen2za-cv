import { Component, OnInit, Input } from '@angular/core';
import { Routes, ActivatedRoute, Params, Router } from '@angular/router';
import { EstudioService } from '../../services/estudios.service';
import { EstudiosRealizados } from '../../models/estudios';
import { Global } from '../../services/global';

@Component({
  selector: 'app-blog-estudios',
  templateUrl: './blog-estudios.component.html',
  styleUrls: ['./blog-estudios.component.css'],
  providers: [EstudioService]
})
export class BlogEstudiosComponent implements OnInit {

  public estudios : EstudiosRealizados[];
  public url: String;

  constructor(
    private _estudioservice: EstudioService,
  ) {
    this.url =Global.url;
   }

  ngOnInit() {
    this._estudioservice.getEstudios().subscribe(
      response => {
        //console.log(response)
        if(response.EstudiosRealizados){
          this.estudios = response.EstudiosRealizados;
          //console.log(response.EstudiosRealizados);
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
