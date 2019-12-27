import { Component, OnInit, Input } from '@angular/core';
import { EstudiosRealizados } from '../../models/estudios';
import { Global } from '../../services/global';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  @Input() estudios : EstudiosRealizados[];
  public url: String;

  
  
  constructor(){
    this.url=Global.url;
   }

   ngOnInit() {
  }

}
