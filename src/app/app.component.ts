import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ClanHeaderComponent} from './components/clan-header/clan-header.component';
import {MemberClanListComponent} from './components/member-clan-list/member-clan-list.component';
import {MemberPanelComponent} from './components/member-panel/member-panel.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {TankListService} from './service/tank-list/tank-list.service';

@Component({
  selector: 'app-root',
  imports: [ClanHeaderComponent, MemberClanListComponent, MemberPanelComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'wot-tracker';

  constructor(public tankListService: TankListService) {}

  ngOnInit() {
    this.tankListService.initializeTier10Tanks()
  }
}
