import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {TankCardComponent} from '../tank-card/tank-card.component';
import {TankListService} from '../../service/tank-list/tank-list.service';

@Component({
  selector: 'app-member-panel',
  standalone: true,
  imports: [
    CommonModule,
    TankCardComponent,
    NgOptimizedImage
  ],
  templateUrl: './member-panel.component.html',
  styleUrl: './member-panel.component.scss'
})
export class MemberPanelComponent implements OnInit {

  tanks: { tier: number; name: string; nation: string }[] = [];
  loading = false;

  constructor(private tankListService: TankListService) { }

  ngOnInit() {
    this.tankListService.tanks$.subscribe(tanks => {
      this.tanks = tanks;
    });

    this.tankListService.loading$.subscribe(loading => {
      this.loading = loading;
    })

  }

}
