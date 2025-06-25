import { Component, EnvironmentInjector, inject, Injector, Input, Type } from '@angular/core';


import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contentbar',
  imports: [CommonModule],
  templateUrl: './contentbar.component.html',
  styleUrl: './contentbar.component.scss'
})
export class ContentbarComponent {

  @Input() sectionName:string='';
  @Input() data:any[]=[];
  @Input() cardComponent!:Type<any>;


  private injector=inject(Injector);
  private envInjector=inject(EnvironmentInjector);



  createInjector(item:any):Injector {
    return Injector.create({
      providers:[
        {provide:'cardData',useValue:item}
      ],
      parent:this.injector,
    })
  }


  


}
