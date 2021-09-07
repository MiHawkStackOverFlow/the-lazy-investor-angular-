import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Directives
import { MyHighlightDirective } from './directives/my-highlight.directive';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    CardComponent,
    MyHighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    MyHighlightDirective
  ]
})
export class SharedModule { }
