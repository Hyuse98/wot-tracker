import {Component, Input} from '@angular/core';
import {TitleCasePipe} from '@angular/common';

interface Tank {
  tankName: string;
  tankNation: string;
  tankTier: number;
}

@Component({
  selector: 'app-tank-card',
  imports: [
    TitleCasePipe
  ],
  templateUrl: './tank-card.component.html',
  styleUrl: './tank-card.component.scss'
})
export class TankCardComponent{

  @Input() name!: string;
  @Input() tier!: number;
  @Input() nation!: string;

}
