import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExperienciasLaborales } from '../models/trabajos';
import { Global } from './global';

@Injectable()
export class TrabajoService{
    public url: string;
    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }
    prueba_trabajo(){
        return "Soy el servicios de estudios"
    }
    getTrabajos():Observable<any>{
        return this._http.get(this.url+'trabajos')
    }
    getTrabajo(trabajoId):Observable<any>{
        return this._http.get(this.url+'trabajo/'+trabajoId);
    }
}