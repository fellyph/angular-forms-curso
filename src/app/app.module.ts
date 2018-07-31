import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosListaComponent } from './cursos/cursos-lista/cursos-lista.component';
import { CursosItemComponent } from './cursos/cursos-item/cursos-item.component';
import { Routes, RouterModule } from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';
import { MainComponent } from './main/main.component';
import { NavigationComponent } from './main/navigation/navigation.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './/app-routing.module';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { HttpClientModule } from '@angular/common/http';
import { InscricaoComponent } from './inscricao/inscricao.component';

@NgModule({
  declarations: [AppComponent, CursosComponent,
    CursosListaComponent, CursosItemComponent,
    SobreComponent, MainComponent, NavigationComponent,
    NotFoundComponent, CursoDetalheComponent, InscricaoComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
