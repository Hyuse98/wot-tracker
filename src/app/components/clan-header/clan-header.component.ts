import {Component, OnInit} from '@angular/core';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {MemberListService} from '../../service/member-list/member-list.service';

@Component({
  selector: 'app-clan-header',
  imports: [
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './clan-header.component.html',
  styleUrl: './clan-header.component.scss'
})
export class ClanHeaderComponent implements OnInit {

  clanTag: string = '';
  clan_emblem: string = '';
  members_count: number = 0;

  constructor(private memberListService: MemberListService) {
  }

  ngOnInit() {

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
  }

}
