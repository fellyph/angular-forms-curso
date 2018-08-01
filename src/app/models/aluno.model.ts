export class Aluno {
  public id: number;
  public nome: String;
  public sobrenome: String;
  public profissao: String;
  public cidade: String;
  public estado: String;
  public email: String;

  constructor( nome: String, sobrenome: String, profissao: String , cidade: String, estado: String , email: String ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.profissao = profissao;
    this.cidade = cidade;
    this.estado = estado;
    this.email = email;
  }
}
