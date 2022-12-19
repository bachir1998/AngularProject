import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private userService: UserService, private router : Router){}

  onSubmit(credentials : any){

    console.log("parent",credentials)
    this.userService.login(credentials).subscribe({
      next: (data) => {

        console.log(data)
        localStorage.setItem('token',data['access_token'])
        this.userService.setLogin();
        this.router.navigateByUrl('/admin')

      },
      error: (error) => {
         console.log(error)
      }
    })

  }

}
