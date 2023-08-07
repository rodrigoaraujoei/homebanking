import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  userName: string = '';
  userEmail: string = '';
  userSaldo: number = 0;
  userData:any;

  constructor(private http: HttpClient) {
  }

  id:number;

  ngOnInit(): void {

    const url = 'http://localhost:3000/users'; 
    
    this.userData=sessionStorage.getItem('id');

    this.http.get(url).subscribe((resp: any) => {

      const user=resp.find((u:any)=>u.id==this.userData);
      
      this.userName = user.name;
      this.userEmail = user.email;
      this.userSaldo = user.saldo;

    });

  }

}
