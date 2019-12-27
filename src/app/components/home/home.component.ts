import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title: string;
  public homeText= 'Bienvenidos a mi Sitio Web'
  public intro= 'Técnico Superior en Informática con experiencia en desarrollo de aplicaciones en Visual Studio.net, desarrollador frontend en Angular, React, javascript, Vuejs node.js typescript, HTML5, CSS3, Backend con javascript, administración de bases de datos SQL Server y Mysql, Mongodb, instalación de software, instalación y configuración de redes alámbricas y wifi, instalación y configuración de servidores, web, proxy, ftp, de Bases de Datos en Linux y Windows, Proactivo, dinámico, con alto interés en aprender y adquirir nuevos conocimientos, con nivel del idioma inglés medio.';

  constructor() {

    this.title = 'Informacion General';

   }

  ngOnInit() {
  }

}
