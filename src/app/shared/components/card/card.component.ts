import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../model/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card!: Card;
  @Input() backgroundColor: string = '';
  @Input() foregroundColor: string = '';
  @Input() hoverBackgroundColor: string = '';
  @Input() hoverForegroundColor: string = '';

  constructor() { }

  ngOnInit(): void { }
}
