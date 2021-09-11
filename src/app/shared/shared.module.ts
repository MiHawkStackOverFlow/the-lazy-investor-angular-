import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Directives
import { MyHighlightDirective } from './directives/my-highlight.directive';
import { CardComponent } from './components/card/card.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    CardComponent,
    MyHighlightDirective,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CardComponent,
    MyHighlightDirective,
    ReactiveFormsModule,
    SpinnerComponent
  ]
})
export class SharedModule { }
