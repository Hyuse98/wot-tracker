import {Component, OnInit} from '@angular/core';
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
export class MemberPanelComponent implements OnInit {

  tanks: { tier: number; name: string; nation: string }[] = [];

  constructor(private tankListService: TankListService) { }

  ngOnInit() {
    this.tankListService.tanks$.subscribe(tanks => {
      this.tanks = tanks;
    });
  }

}
