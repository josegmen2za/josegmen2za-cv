import { Component, OnInit } from '@angular/core';
import { Routes, ActivatedRoute, Params, Router } from '@angular/router';
import { TrabajoService } from '../../services/trabajo.service';
import { ExperienciasLaborales } from '../../models/trabajos';
import { Global } from '../../services/global';
import { error } from 'util';


@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
  styleUrls: ['./trabajo.component.css'],
  providers: [TrabajoService]
})
export class TrabajoComponent implements OnInit {

  public trabajo: ExperienciasLaborales;
  public url: string;

  constructor(
    private _trabajoservice: TrabajoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url;
   }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params['id'];
      console.log(id);
      this._trabajoservice.getTrabajo(id).subscribe(
        response => {
         
          console.log(response);
          console.log(response.trabajorealizados);
          if(response.trabajorealizados){
            this.trabajo = response.trabajorealizados;
          }else{
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
