import { Component } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  public active: boolean = false;

  constructor(public spinner: SpinnerService) { }

  ngOnInit() {
    this.spinner.status.subscribe((status: boolean) => {
      this.active = status;
    });
  }
}
