import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../model/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  // Card data
  @Input() card!: Card;

  // Colors
  @Input() backgroundColor: string = '';
  @Input() foregroundColor: string = '';
  @Input() hoverBackgroundColor: string = '';
  @Input() hoverForegroundColor: string = '';

  // Width and Height
  @Input() width: number  = 200;
  @Input() height: number = 200;

  constructor() { }

  ngOnInit(): void { }
}
