import { Component, Inject } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-card',
  imports: [CommonModule],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.scss'
})
export class SkillCardComponent {
  constructor(@Inject('cardData') public data:any){

  };

  get title(): string {
    return this.data.title || '';
  }

  get imageUrl(): string {
    return this.data.imageUrl || '';
  }

  get isNew(): boolean {
    return !!this.data.isNew;
  }

}
