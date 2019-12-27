import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstudiosRealizados } from '../models/estudios';
import { Global } from './global';

@Injectable()
export class EstudioService{
    public url: string;
    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }
    prueba(){
        return "Soy el servicios de estudios"
    }

    getEstudios():Observable<any>{
        return this._http.get(this.url+'estudios')
    }
    getEstudio(estudioId):Observable<any>{
        return this._http.get(this.url+'estudio/'+estudioId);
    }
}