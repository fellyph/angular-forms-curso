import { Inscricao } from '../models/inscricao.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class InscricaoService {
  private inscricoesApiUrl = 'api/inscricoes';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getInscricoes(): Observable<Inscricao[]> {
    const request = this.http.get<Inscricao[]>(this.inscricoesApiUrl);
    return request;
  }

  adicionarInscricao(inscricao: Inscricao): Observable<Inscricao> {
    const request = this.http.post<Inscricao>(this.inscricoesApiUrl, inscricao, this.httpOptions);
    return request;
  }
}
