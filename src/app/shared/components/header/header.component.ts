import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges {
  @Input('title') headerTitle!: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('test changes', changes);
  }

}
