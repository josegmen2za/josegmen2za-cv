// importar los modulos del router de angular.

import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


// Importar componentes a los cuales les quiero hacer una pagina exclusiva
import { HomeComponent } from './components/home/home.component';


// Array de rutas

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
/*     {path: 'blog', component: BlogComponent},
    {path: 'conocimientos', component: ConocimientosComponent },
    {path: 'datospersonales', component: DatospersonaComponent},
    {path: 'blog/estudios', component: BlogEstudiosComponent},
    {path: 'estudio/:id', component: EstudioComponent},
    {path: 'trabajo/:id', component: TrabajoComponent},
    {path: 'blog/trabajos', component: BlogTrabajosComponent},
    {path: 'blog/articulo/:id', component: ArticleComponent},
    {path: 'blog/crear', component: ArticleNewComponent},
    {path: 'blog/editar/:id', component: ArticleEditComponent},
    {path: 'buscar/:search', component: SearchComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: 'pagina1', component: Pagina1Component},
    {path: 'pagina2', component: Pagina2Component},
    {path: 'pagina2/:nombre/:apellidos', component: Pagina2Component}, 
    {path: '**', component: ErrorComponent}*/
    { path: '**', redirectTo: '/', pathMatch: 'full' },
];

export const appRoutingProviders: any[] = [{ provide: LocationStrategy, useClass: HashLocationStrategy}];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
