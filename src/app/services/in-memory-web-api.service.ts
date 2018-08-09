import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryWebApiService implements InMemoryDbService {
  createDb () {
    const inscricoes = [
      {id: 11, idCurso: 1, aluno: 1}
    ];
    const cursos = [
      { id: 1,
        nome: 'JavaScript',
        categoria: 'Desenvolvimento',
        cargaHoraria: 20,
        thumbnail:  'assets/img/javascript.jpg',
        dataCurso: '30 Set'
      },
      {id: 2,
        nome: 'TypeScript',
        categoria: 'Desenvolvimento',
        cargaHoraria: 40,
        thumbnail:  'assets/img/typescript.jpg',
        dataCurso: '20 Out'},
      {id: 3,
        nome: 'Angular',
        categoria: 'Desenvolvimento',
        cargaHoraria: 60,
        thumbnail:  'assets/img/angular.jpg',
        dataCurso: '10 Nov'},
      {id: 4,
        nome: 'React.js',
        categoria: 'Desenvolvimento',
        cargaHoraria: 20,
        thumbnail:  'assets/img/react.jpg',
        dataCurso: '02 Nov'},
      {id: 4,
        nome: 'Angular Avançado',
        categoria: 'Desenvolvimento',
        cargaHoraria: 20,
        thumbnail:  'assets/img/angular.jpg',
        dataCurso: '02 Dez'},
      {id: 5,
        nome: 'Photoshop',
        categoria: 'Design',
        cargaHoraria: 60,
        thumbnail:  'assets/img/photoshop.jpg',
        dataCurso: '02 De'}
    ];

    return {inscricoes, cursos};
  }
}
