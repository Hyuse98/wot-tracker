import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ClanMemberCardComponent } from '../clan-member-card/clan-member-card.component';

interface ClanMember {
  role: string;
  role_i18n: string;
  joined_at: number;
  account_id: number;
  account_name: string;
}

interface ClanResponse {
  status: string;
  meta: {
    count: number;
  };
  data: {
    [clanId: string]: {
      members: ClanMember[];
      tag: string;
    };
  };
}

@Component({
  selector: 'app-member-clan-list',
  standalone: true,
  imports: [CommonModule, ClanMemberCardComponent],
  templateUrl: './member-clan-list.component.html',
  styleUrls: ['./member-clan-list.component.scss']
})
export class MemberClanListComponent implements OnInit {
  members: ClanMember[] = [];
  clanTag: string = '';
  loading: boolean = true;
  error: string | null = null;

  private API_KEY = '5c96e3e41e057bbe31261ac1aaea86d0';
  private CLAN_ID = '1000065908'; // ID do clã no exemplo

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchClanMembers();
  }

  fetchClanMembers(): void {
    const url = `https://api.worldoftanks.com/wot/clans/info/?application_id=${this.API_KEY}&clan_id=${this.CLAN_ID}`;

    this.http.get<ClanResponse>(url).subscribe({
      next: (response) => {
        if (response.status === 'ok') {
          
          const clanId = Object.keys(response.data)[0];
          const clan = response.data[clanId];

          this.members = clan.members;
          this.clanTag = clan.tag;
          this.loading = false;
        } else {
          this.error = 'Erro ao carregar dados do clã';
          this.loading = false;
        }
      },
      error: (err) => {
        this.error = `Erro na requisição: ${err.message}`;
        this.loading = false;
      }
    });
  }
}
