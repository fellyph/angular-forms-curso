import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/aluno.model';

@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.css']
})
export class InscricaoComponent implements OnInit {
  public mensagem = '';
  public nome: String;
  public aluno: Aluno;

  constructor() {
    this.aluno = new Aluno('Fellyph', 'cintra', 'desenvolvedor', 'Caruaru', 'Pernambuco', 'fellyph@imedia.com.br');
  }

  ngOnInit() {
  }

  salvar() {
    this.mensagem = 'Salvando dados...';
  }
}
