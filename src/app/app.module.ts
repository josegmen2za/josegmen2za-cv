import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { EsParPipe } from './pipes/espar.pipe';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SkillComponent } from './components/skill/skill.component';
import { DatospersonaComponent } from './components/datospersona/datospersona.component';
import { ConocimientosComponent } from './components/conocimientos/conocimientos.component';
import { BlogEstudiosComponent } from './components/blog-estudios/blog-estudios.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { EstudioComponent } from './components/estudio/estudio.component';
import { BlogTrabajosComponent } from './components/blog-trabajos/blog-trabajos.component';
import { TrabajosComponent } from './components/trabajos/trabajos.component';
import { TrabajoComponent } from './components/trabajo/trabajo.component';








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    SidebarComponent,
    SkillComponent,
    DatospersonaComponent,
    ConocimientosComponent,
    BlogEstudiosComponent,
    EstudiosComponent,
    EstudioComponent,
    BlogTrabajosComponent,
    TrabajosComponent,
    TrabajoComponent,






  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    MomentModule,
    AngularFileUploaderModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
