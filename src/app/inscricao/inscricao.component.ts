import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.css']
})
export class InscricaoComponent implements OnInit {
  public mensagem = '';

  constructor() { }

  ngOnInit() {
  }

  salvar() {
    this.mensagem = 'Salvando dados...';
  }
}
