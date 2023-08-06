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

  adicionarFundos(id: number, valor: number) {
    return this.http.patch(`${this.baseUrl}/users/${id}`, { saldo: valor });
  }

  retirarFundos(id: number, valor: number) {
    return this.http.patch(`${this.baseUrl}/users/${id}`, { saldo: -valor });
  }
}