import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { Persona } from '../../models/persona';
import { Global } from 'src/app/services/global';



@Component({
  selector: 'app-datospersona',
  templateUrl: './datospersona.component.html',
  styleUrls: ['./datospersona.component.css'],
  providers: [PersonaService]
})
export class DatospersonaComponent implements OnInit {

  public persona: Persona;
  public url: string;

  constructor(
    private _personaservice: PersonaService,
  ) {
    this.url=Global.url;
   }

  ngOnInit() {
    this._personaservice.getPersona().subscribe(
      response => {
        console.log(response)
        if(response.datospersonales){
          this.persona=response.datospersonales;
          console.log(response.datospersonales);
        }else{
          alert('No se Cargaron Registro')
        }
      }
    )
  }

}
