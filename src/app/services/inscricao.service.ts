import { Inscricao } from '../models/inscricao.model';
import { Injectable } from '@angular/core';
import { Aluno } from '../models/aluno.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class InscricaoService {
  private inscricaoApiUrl = 'api/inscricoes';
  private inscricoes: Inscricao[];

  constructor(private http: HttpClient) { }

  getInscricoes(): Observable<Inscricao[]> {
    const request = this.http.get<Inscricao[]>(this.inscricaoApiUrl);
    request.subscribe(dados => this.inscricoes = dados);
    return request;
  }

  adicionarInscricao(inscricao: Inscricao) {

  }
}
