import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import {ClanHeaderComponent} from './components/clan-header/clan-header.component';
import {MemberClanListComponent} from './components/member-clan-list/member-clan-list.component';
import {MemberPanelComponent} from './components/member-panel/member-panel.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {TankListService} from './service/tank-list/tank-list.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ClanHeaderComponent, MemberClanListComponent, MemberPanelComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'qualy';

  constructor(public tankListService: TankListService) {}

  ngOnInit() {
    this.tankListService.initializeTier10Tanks()
  }
}
