import {Component, OnInit} from '@angular/core';
import { MemberClanListComponent } from "../../components/member-clan-list/member-clan-list.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import {MemberPanelComponent} from '../../components/member-panel/member-panel.component';
import {TankListService} from '../../service/tank-list/tank-list.service';
import {ClanHeaderComponent} from '../../components/clan-header/clan-header.component';

@Component({
  selector: 'app-dashboard',
  imports: [MemberClanListComponent, NavbarComponent, MemberPanelComponent, ClanHeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  constructor(public tankListService: TankListService) {}

  ngOnInit() {
    this.tankListService.initializeTier10Tanks()
  }
}
