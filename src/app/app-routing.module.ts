import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos/cursos.component';
import { SobreComponent } from './sobre/sobre.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';

const appRoutes: Routes = [
  { path: 'cursos', component: CursosComponent},
  { path: '',
    redirectTo: '/cursos',
    pathMatch: 'full'
  },
  { path: 'curso/:id', component: CursoDetalheComponent },
  { path: 'sobre', component: SobreComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
