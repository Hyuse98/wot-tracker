import {Component} from '@angular/core';
import {SharedService} from '../../service/shared/shared.service';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  inputValue: string = '';

  constructor(private sharedService: SharedService,
              private router: Router) {
  }

  onInputChange(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value;
    this.sharedService.updateInputValue(this.inputValue);
  }

  redirect() {
    this.router.navigate(['/dashboard']);
  }
}
