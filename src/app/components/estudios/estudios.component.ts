import { Component, OnInit, Input } from '@angular/core';
import { EstudiosRealizados } from '../../models/estudios';
import { Global } from '../../services/global';
import { $ } from 'protractor';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  $: any;

  @Input() estudios : EstudiosRealizados[];
  public url: String;

  
  
  constructor(){
    this.url=Global.url;
   }

   ngOnInit() {
  }

  redireccion(){
    console.log("prueba")
    window.scrollTo(0, 0);
  }

}
