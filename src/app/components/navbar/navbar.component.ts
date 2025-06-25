import { Component, HostListener } from '@angular/core';

import {MenubarModule} from "primeng/menubar";
import {ButtonModule} from "primeng/button";
import { CardModule } from 'primeng/card';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  standalone:true,
  imports: [MenubarModule,ButtonModule,CardModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  
  }











////Scrolling NavBar




// isNavBarVisible=true;
//   lastScrollTop=0;

//   @HostListener('window:scroll',[])
//   onWindowScroll(){
//     const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
//     console.log('current:', currentScroll, 'last:', this.lastScrollTop);
//     if (currentScroll > this.lastScrollTop && currentScroll > 50) {
//       // Scrolling down
//       this.isNavBarVisible = false;
//     } else {
//       // Scrolling up
//       this.isNavBarVisible = true;
//     }

//     this.lastScrollTop = currentScroll;
//   }









  //    items: MenuItem[] = [];

  //    ngOnInit() {
  //   this.items = [
  //     { label: 'About', routerLink: '/#about' },
  //     { label: 'Projects', routerLink: '/#projects' },
  //     { label: 'Skills', routerLink: '/#skills' },
  //     { label: 'Certifications', routerLink: '/#certifications' }
  //   ]
  // }


