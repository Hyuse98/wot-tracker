import { Component } from '@angular/core';
import { MemberClanListComponent } from "../../components/member-clan-list/member-clan-list.component";

@Component({
  selector: 'app-dashboard',
  imports: [MemberClanListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
