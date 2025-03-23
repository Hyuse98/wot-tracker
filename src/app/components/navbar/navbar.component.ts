import {Component} from '@angular/core';
import {MemberListService} from '../../service/member-list/member-list.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  clanId: string = '';

  constructor(private memberListService: MemberListService) {  }

  onFetchMembers(): void {
    if (this.clanId.trim()) {
      this.memberListService.fetchClanMembers(this.clanId);
    }
  }
}
