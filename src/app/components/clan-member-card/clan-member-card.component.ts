import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ClanMember {
  role: string;
  role_i18n: string;
  joined_at: number;
  account_id: number;
  account_name: string;
}

@Component({
  selector: 'app-clan-member-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clan-member-card.component.html',
  styleUrls: ['./clan-member-card.component.scss']
})

export class ClanMemberCardComponent {
  @Input() member!: ClanMember;

  formatDate(timestamp: number): string {
    return new Date(timestamp * 1000).toLocaleDateString();
  }
}
