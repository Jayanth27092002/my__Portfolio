import { Component, Inject } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificate-card',
  imports: [CommonModule],
  templateUrl: './certificate-card.component.html',
  styleUrl: './certificate-card.component.scss'
})
export class CertificateCardComponent {
  constructor(@Inject('cardData') public data:any){

  }

  get name():string{
    return this.data.name || "";
  };

  get description():string{
    return this.data.description || "";
  };

  get imageUrl():string{
    return this.data.imageUrl || "";
  }

  get isNew():boolean{
    return this.data.isNew || false;
  }

   get date():string{
    return this.data.date || "";
  }


}
