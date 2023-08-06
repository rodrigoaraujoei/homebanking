import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginEmail: string = '';
  loginPassword: string = '';
  registerEmail: string = '';
  registerName: string='';
  registerPassword1: string = '';
  registerPassword2: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const url = 'http://localhost:3000/users'; // Update the URL


    this.http.get(url).subscribe((resp: any) => {
      const user = resp.find((u: any) => u.email === this.loginEmail&&u.password === this.loginPassword);

      // Loop through the response array to find the user
      if (user) {
        sessionStorage.setItem('id', ''+(user.id)); //
        this.router.navigate(['/home']); //{queryParams: {user: user.id-1}}
      } 
      else{
      // If no user is found
      console.log("User not found with email:", this.loginEmail);
    }
    });
  }
  
  register() {

    const url = 'http://localhost:3000/users'; // Update the URL

    if(this.registerName===''){
      console.log("Name is blank");
    }
    else if(this.registerPassword1==this.registerPassword2){
      this.http.get(url).subscribe((resp: any) => {
        const user = resp.find((u: any) => u.email === this.registerEmail);
        if(user){
          console.log("Mail already created");
          return;
        }
        else{
          const newUser = {
            id: resp.length+1,
            name: this.registerName,
            email: this.registerEmail,
            saldo: 0,
            password: this.registerPassword1
          };


          // Send a POST request to add the new user
          this.http.post(url, newUser).subscribe((response: any) => {
            console.log("New user added:", response);
          });

          this.registerEmail= '';
          this.registerName='';
          this.registerPassword1= '';
          this.registerPassword2 = '';
          
        }
      });
    }
    else{
      console.log("Passwords are not the same:");
    }
  }
}
