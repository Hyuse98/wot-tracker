import {Component} from '@angular/core';
import {MemberListService} from '../../service/member-list/member-list.service';
import {FormsModule} from '@angular/forms';
import {NgOptimizedImage} from '@angular/common';
import {Theme} from '../../service/theme/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    FormsModule,
    NgOptimizedImage
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  clanId: string = '';

  constructor(private memberListService: MemberListService, private themeService: Theme ) {  }

  onFetchMembers(): void {
    if (this.clanId.trim()) {
      this.memberListService.fetchClanMembers(this.clanId);
    }
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
