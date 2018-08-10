import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/aluno.model';
import { CursosService } from '../services/cursos.service';
import { InscricaoService } from '../services/inscricao.service';

@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.css']
})
export class InscricaoComponent implements OnInit {
  public mensagem = '';
  public nome: String;
  public aluno: Aluno;
  public curso: String;
  public idade: Number;
  public idadeInvalida: Boolean = false;
  public cursos;
  public cursosFiltrados;
  public inscricoes;

  constructor(private cursosService: CursosService, private inscricaoService: InscricaoService) {
    this.aluno = new Aluno('Fellyph', 'cintra', 'desenvolvedor', 'Caruaru', 'PE', 'fellyph@imedia.com.br');
  }

  ngOnInit() {
    this.cursosService.getCursos().subscribe(dados => this.cursos = dados);
    this.inscricaoService.getInscricoes().subscribe(dadosApi => this.inscricoes = dadosApi);
  }

  salvar() {
    this.mensagem = 'Salvando dados...';
  }

  filtrarCursos (event) {
    this.cursosFiltrados = this.cursos.filter( curso => curso.categoria === event);
  }

  validarIdade(event) {
    if (event >= 12 && event <= 120) {
      alert('valid');
      this.idadeInvalida = false;
    } else {
      alert('invalid');
      this.idadeInvalida = true;
    }
  }
}
