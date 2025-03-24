import {Component, Input} from '@angular/core';

interface Tank {
  tankName: string;
  tankNation: string;
  tankTier: number;
}

@Component({
  selector: 'app-tank-card',
  imports: [],
  templateUrl: './tank-card.component.html',
  styleUrl: './tank-card.component.scss'
})
export class TankCardComponent {

  @Input() tank!: Tank;

}
