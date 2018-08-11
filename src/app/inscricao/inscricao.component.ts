import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/aluno.model';
import { CursosService } from '../services/cursos.service';
import { InscricaoService } from '../services/inscricao.service';
import { NgForm } from '@angular/forms';
import { Inscricao } from '../models/inscricao.model';

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
  public inscricaoNova: Inscricao;

  constructor(private cursosService: CursosService, private inscricaoService: InscricaoService) {
    this.aluno = new Aluno('Fellyph', 'cintra', 'desenvolvedor', 'Caruaru', 'PE', 'fellyph@imedia.com.br');
    this.inscricaoNova = new Inscricao(1, 2, this.aluno);
  }

  ngOnInit() {
    this.cursosService.getCursos().subscribe(dados => this.cursos = dados);
    this.inscricaoService.getInscricoes().subscribe(dadosApi => this.inscricoes = dadosApi);
  }

  salvar(form: NgForm) {
    if (form.valid) {
      this.inscricaoService.adicionarInscricao(this.inscricaoNova).subscribe(inscricao => this.inscricoes.push(inscricao));
    } else {
      console.log('dados invalido');
    }
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
