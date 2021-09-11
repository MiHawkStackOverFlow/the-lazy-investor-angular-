import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Directives
import { MyHighlightDirective } from './directives/my-highlight.directive';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    CardComponent,
    MyHighlightDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CardComponent,
    MyHighlightDirective,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
