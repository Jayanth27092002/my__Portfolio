import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  constructor(@Inject('cardData') public data:any){

  };

  get title():string{
    return this.data.title || "";
  };

  get description():string{
    return this.data.description || "";
  };

  get imageUrl():string{
    return this.data.imageUrl || "";
  }

  get link():string{
    return this.data.link || "";
  }


  get stack():string[]{
    return this.data.stack || [""];
  }


   get timeTaken():string{
    return this.data.timeTaken || "";
  }


  
   get isNew():boolean{
    return this.data.isNew|| false;
  }





  


}
