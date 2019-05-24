import { TestBed } from '@angular/core/testing';

import { QuanLiPhimService } from './quan-li-phim.service';

describe('QuanLiPhimService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuanLiPhimService = TestBed.get(QuanLiPhimService);
    expect(service).toBeTruthy();
  });
});
