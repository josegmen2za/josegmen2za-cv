import { Component, OnInit } from '@angular/core';
import { Routes, ActivatedRoute, Params, Router } from '@angular/router';
import { Global } from '../../services/global';
import { EstudioService } from '../../services/estudios.service';
import { EstudiosRealizados } from '../../models/estudios';


@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.css'],
  providers: [EstudioService]
})
export class EstudioComponent implements OnInit {

  public estudio: EstudiosRealizados;
  public url: string;

  constructor(
    private _estudioservice: EstudioService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url= Global.url;
   }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params['id'];
      console.log(id);
      this._estudioservice.getEstudio(id).subscribe(
        response => {
          console.log(response.EstudiosRealizados);
          if (response.EstudiosRealizados) {
            this.estudio = response.EstudiosRealizados;
          } else {
            this._router.navigate(['/home']);
          }
        },
        error => {
          console.log(error);
          this._router.navigate(['/home']);
        }
      );
    });
  }
  

}
