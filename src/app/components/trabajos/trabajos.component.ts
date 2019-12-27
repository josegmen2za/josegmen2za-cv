import { Component, OnInit, Input } from '@angular/core';
import { ExperienciasLaborales } from '../../models/trabajos'
import { Global } from '../../services/global';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {

  @Input() trabajos: ExperienciasLaborales[];
  public url: string;



  constructor() {
    this.url=Global.url;
   }

  ngOnInit() {
  }

}
