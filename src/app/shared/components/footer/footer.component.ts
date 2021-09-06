import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public footerTitle = '';
  @Output() goToGithub = new EventEmitter<boolean>();

  constructor() { }

  @Input()
  set title(title: string) {
    this.footerTitle = title || `Rate me on GitHub`;
  }

  ngOnInit(): void {  }

  goToGitHubPage(value: boolean) {
    this.goToGithub.emit(value);
  }

}
