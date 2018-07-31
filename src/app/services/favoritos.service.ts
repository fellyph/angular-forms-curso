import { Injectable } from '@angular/core';
import { Curso } from '../cursos/curso';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  private meusFavoritos = [];

  constructor() { }

  getMeusFavoritos() {
    return this.meusFavoritos.slice();
  }

  add(curso: Curso) {
    this.meusFavoritos.push(curso);
  }
}
