import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberClanListComponent } from './member-clan-list.component';

describe('MemberClanListComponent', () => {
  let component: MemberClanListComponent;
  let fixture: ComponentFixture<MemberClanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberClanListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberClanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
