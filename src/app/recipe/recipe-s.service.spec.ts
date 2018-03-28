import { TestBed, inject } from '@angular/core/testing';

import { RecipeSService } from './recipe-s.service';

describe('RecipeSService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeSService]
    });
  });

  it('should be created', inject([RecipeSService], (service: RecipeSService) => {
    expect(service).toBeTruthy();
  }));
});
