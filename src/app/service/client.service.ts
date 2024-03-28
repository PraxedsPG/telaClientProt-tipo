import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Client } from "../model/client";

@Injectable({
  providedIn: 'root'
})

export class ClientService {
    private http = inject(HttpClient);

    create(client: Client) {
      return this.http.post<Client>('http://localhost:9001/api/clients', client);
    }

    list() {
      return this.http.get<Client[]>('http://localhost:9001/api/clients');
    }

    get(id: string) {
      return this.http.get<Client>(`http://localhost:9001/api/clients/getId/${id}`);
    }

    update(id: string, client: Client) {
      return this.http.put<Client>(`http://localhost:9001/api/clients/${id}`, client);
    }

    delete(id: string) {
      return this.http.delete<void>(`http://localhost:9001/api/clients/${id}`);
    }
}
