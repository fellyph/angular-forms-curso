import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.css']
})
export class InscricaoComponent implements OnInit {
  public mensagem = '';
  public nome: String;

  constructor() {
  }

  ngOnInit() {
  }

  salvar() {
    this.mensagem = 'Salvando dados...';
    this.nome = 'nome foi enviado';
  }
}
