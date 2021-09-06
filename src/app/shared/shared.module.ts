import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MyHighlightDirective } from './directives/my-highlight.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MyHighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MyHighlightDirective
  ]
})
export class SharedModule { }
