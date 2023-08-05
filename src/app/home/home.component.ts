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
  constructor(private http: HttpClient,private route: ActivatedRoute) {
  }
  id:number;
  ngOnInit(): void {
    const url = 'http://localhost:3000/users'; // Update the URL
    
    /*this.route
    .queryParams
    .subscribe(params => {
      this.userData=params['user'];
    });
    */
    this.userData=sessionStorage.getItem('id');
    this.http.get(url).subscribe((resp: any) => {
      this.userName = resp[this.userData].name;
      this.userEmail = resp[this.userData].email;
      this.userSaldo = resp[this.userData].saldo;
    });
  }
}
