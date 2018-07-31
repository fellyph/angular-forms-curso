export class Curso {
  constructor (
              public id: number,
              public nome: string,
              public categoria: string,
              public cargaHoraria: number,
              public thumbnail: string,
              public dataCurso: string,
              public descricao: string = '') {
    this.nome = nome;
    this.categoria = categoria;
    this.cargaHoraria = cargaHoraria;
    this.thumbnail = thumbnail;
    this.dataCurso = this.dataCurso;
  }
}
