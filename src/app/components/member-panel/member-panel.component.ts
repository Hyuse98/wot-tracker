import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TankCardComponent} from '../tank-card/tank-card.component';
import {TankListService} from '../../service/tank-list/tank-list.service';

@Component({
  selector: 'app-member-panel',
  standalone: true,
  imports: [
    CommonModule,
    TankCardComponent
  ],
  templateUrl: './member-panel.component.html',
  styleUrl: './member-panel.component.scss'
})
export class MemberPanelComponent {
  tanks: any[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor(private tankListService: TankListService) {
  }

}
