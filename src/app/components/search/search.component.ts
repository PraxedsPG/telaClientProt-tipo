import { ClientService } from './../../service/client.service';
import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Client } from '../../model/client';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterLink, RouterModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  private clientService = inject(ClientService)

  clients: Client [] = [];

  constructor(private router: Router) {}

  ngOnInit(): any {
    this.loadAll();
  }

  goSearch() {
    this.router.navigate(['/search']);
  }

  goCreate() {
    this.router.navigate(['/create']);
  }

    loadAll() {
      this.clientService.list()
      .subscribe(clients => {
        this.clients = clients;
      });
    }

    deleteClient(client: Client) {
      if(confirm('Deseja realmente deletar esse cliente?')) {
        this.clientService.delete(client.id)
        .subscribe(() => {
          this.loadAll();
        });
        alert('Usuário excluído com sucesso!');
      } else {
        alert('Deleção cancelada');
      }
    }
}
