import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-navbar-bo',
  templateUrl: './navbar-bo.component.html',
  styleUrls: ['./navbar-bo.component.scss']
})
export class NavbarBoComponent {
 
  constructor(private userService : UserService,private router :Router){}
  logout(){
    this.userService.isLogout();
    this.router.navigateByUrl('login')
  }
  
}
