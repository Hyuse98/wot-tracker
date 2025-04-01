import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MemberCardComponent} from '../clan-member-card/member-card.component';
import {MemberListService} from '../../service/member-list/member-list.service';

@Component({
  selector: 'app-member-clan-list',
  standalone: true,
  imports: [CommonModule, MemberCardComponent],
  templateUrl: './member-clan-list.component.html',
  styleUrls: ['./member-clan-list.component.scss']
})
export class MemberClanListComponent implements OnInit {

  members: any[] = [];
  clanTag: string = '';
  clan_emblem: string = '';
  members_count: number = 0;
  loading: boolean = false;
  error: string | null = null;

  constructor(private memberListService: MemberListService) {
  }

  ngOnInit(): void {
    this.memberListService.members$.subscribe(members => {
      this.members = members;
    });

    this.memberListService.clanInfo$.subscribe(clanInfo => {
      if (clanInfo) {
        this.clanTag = clanInfo.clanTag;
        this.clan_emblem = clanInfo.clanEmblem;
        this.members_count = clanInfo.membersCount;
      } else {
        this.clanTag = '';
        this.clan_emblem = '';
        this.members_count = 0;
      }
    });

    this.memberListService.loading$.subscribe(loading => {
      this.loading = loading;
    });

    this.memberListService.error$.subscribe(error => {
      this.error = error;
    });
  }
}
