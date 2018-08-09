import { Aluno } from './aluno.model';

export class Inscricao {
  id: Number;
  idCurso: Number;
  aluno: Aluno;

  constructor(id: Number, idCurso: Number, aluno: Aluno) {
    this.aluno = aluno;
    this.id = id;
    this.idCurso = idCurso;
  }
}
