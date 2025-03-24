import { TestBed } from '@angular/core/testing';

import { TankListService } from './tank-list.service';

describe('TankListService', () => {
  let service: TankListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TankListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
