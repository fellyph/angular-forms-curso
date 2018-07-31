import { TestBed, inject } from '@angular/core/testing';

import { FavoritosService } from './favoritos.service';

describe('FavoritosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavoritosService]
    });
  });

  it('should be created', inject([FavoritosService], (service: FavoritosService) => {
    expect(service).toBeTruthy();
  }));
});
