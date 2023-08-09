import { Component, OnInit } from '@angular/core';
import { FundosService } from '../services/fundos.service';

@Component({
  selector: 'app-fundos',
  templateUrl: './fundos.component.html',
  styleUrls: ['./fundos.component.css']
})
export class FundosComponent implements OnInit {
  id: number; // Defina o ID do usuário logado
  
  saldoAtual: number;
  valorAdicionar: number;
  valorRetirar: number;

  constructor(private fundosService: FundosService) {
    this.id = Number(sessionStorage.getItem("id"));
   }

  ngOnInit() {

    console.log('id:', this.id);

    // Obter o saldo atual do usuário a partir do backend e exibi-lo na tela
    this.fundosService.getUser(this.id).subscribe((user: any) => {
      this.saldoAtual = user.saldo;
    });
  }

  adicionarFundos() {
    if (this.valorAdicionar > 0) {
      this.fundosService.transferencia(this.id, this.valorAdicionar, this.saldoAtual);
        this.saldoAtual += this.valorAdicionar;
        this.valorAdicionar = 0; // Limpar o campo após a adição

    }
  }

  retirarFundos() {
    if (this.valorRetirar > 0) {
      this.fundosService.transferencia(this.id, -this.valorRetirar, this.saldoAtual);
        this.saldoAtual -= this.valorRetirar;
        this.valorRetirar = 0; // Limpar o campo após a retirada

    }
  }
}
