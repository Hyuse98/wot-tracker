import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanHeaderComponent } from './clan-header.component';

describe('ClanHeaderComponent', () => {
  let component: ClanHeaderComponent;
  let fixture: ComponentFixture<ClanHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClanHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClanHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
