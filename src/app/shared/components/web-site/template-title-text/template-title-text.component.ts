import { Component } from '@angular/core';

@Component({
  selector: 'app-template-title-text',
  styleUrls: ['./template-title-text.component.sass'],
  template: `
    <div class="titulo">
      <ng-content select="[title]"></ng-content>
    </div>
    <div class="texto">
      <ng-content select="[texto]"></ng-content>
    </div>
    `
})
export class TemplateTitleTextComponent {
  
}
