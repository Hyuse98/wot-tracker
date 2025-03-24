import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TankListService} from '../../service/tank-list/tank-list.service';

interface ClanMember {
  role: string;
  role_i18n: string;
  joined_at: number;
  account_id: string;
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
  private tankIds: any[] = [];

  constructor(private tankListService: TankListService) { }

  formatDate(timestamp: number): string {
    return new Date(timestamp * 1000).toLocaleDateString();
  }

  onClick(): void {
    this.tankListService.getTanksByMemberId(this.member.account_id).subscribe(
      (tankIds) => {
        this.tankIds = tankIds;
        console.log('Tank IDs:', this.tankIds);
      },
      (error) => {
        console.error('Erro ao buscar os tanks:', error);
      }
    );
  }
}
