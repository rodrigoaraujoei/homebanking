// fundos.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FundosService {
  private baseUrl = 'http://localhost:3000'; // Ajuste para a URL do seu backend JSON Server

  constructor(private http: HttpClient) { }

  getUser(id: number) {
    return this.http.get(`${this.baseUrl}/users/${id}`);
  }

  

  transferencia(id: number, valor: number,saldo: number) {
    const movimento = {
      userid: id,
      data: new Date(),
      transferencia: valor,
      saldodepois: saldo+valor,
    };
    this.http.patch(`${this.baseUrl}/users/${id}`, { saldo: valor+saldo }).subscribe();
    this.http.post(`${this.baseUrl}/movimentos/`, movimento).subscribe((response: any) => {
      console.log(movimento);
    });

  }
}
