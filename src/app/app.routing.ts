// importar los modulos del router de angular.

import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


// Importar componentes a los cuales les quiero hacer una pagina exclusiva
import { HomeComponent } from './components/home/home.component';
import { DatospersonaComponent } from './components/datospersona/datospersona.component';
import { ConocimientosComponent } from './components/conocimientos/conocimientos.component';
import { BlogEstudiosComponent } from './components/blog-estudios/blog-estudios.component';
import { EstudioComponent } from './components/estudio/estudio.component';
import { BlogTrabajosComponent } from './components/blog-trabajos/blog-trabajos.component';
import { TrabajoComponent } from './components/trabajo/trabajo.component';







// Array de rutas

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'datospersonales', component: DatospersonaComponent},
    {path: 'conocimientos', component: ConocimientosComponent },
    {path: 'blog/estudios', component: BlogEstudiosComponent},
    {path: 'estudio/:id', component: EstudioComponent},
    {path: 'blog/trabajos', component: BlogTrabajosComponent},
    {path: 'trabajo/:id', component: TrabajoComponent},
/*    
    {path: 'buscar/:search', component: SearchComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: '**', component: ErrorComponent}*/
    { path: '**', redirectTo: '/', pathMatch: 'full' },
];

export const appRoutingProviders: any[] = [{ provide: LocationStrategy, useClass: HashLocationStrategy}];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
