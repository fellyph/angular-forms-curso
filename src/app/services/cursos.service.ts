import { Injectable, EventEmitter } from '@angular/core';
import { Curso } from '../cursos/curso';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  public cursoCurtido = new EventEmitter<Curso>();
  public favoritarCurso = new EventEmitter<Curso>();

  private cursos: Curso[] = [];
  private urlDados = 'assets/data/curso.json';
  constructor(private http: HttpClient) { }

  public getCursos(): Observable<Curso[]> {
    const request = this.http.get<Curso[]>(this.urlDados);
    request.subscribe(dados => this.cursos = dados);
    return request;
  }

  public getCurso(id: number) {
    return this.cursos.find(curso => curso.id === id);
  }
}
