import { Component, OnInit, inject } from '@angular/core';
import {ActivatedRoute, Router, RouterModule, RouterLink} from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ClientService } from '../../service/client.service';
import { Client } from '../../model/client';

import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-insert-client',
  standalone: true,
  imports: [RouterModule, NgOptimizedImage, ReactiveFormsModule],
  templateUrl: './insert-client.component.html',
  styleUrl: './insert-client.component.css'
})
export class InsertClientComponent implements OnInit {



  private formB = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private clientService = inject(ClientService);



  form?: FormGroup;
  client?: Client;

  ngOnInit(): void {
   const id = this.route.snapshot.paramMap.get('id');

   if (id) {
   this.clientService.get(id)
     .subscribe(client => {
      this.client = client;
        this.form = this.formB.group({
          name: [client.name, [Validators.required]],
          email: [client.email, [Validators.required, Validators.email]],
          cel: [client.cel, [Validators.required]],
          cpf: [client.cpf, [Validators.required]],
          registryUser: [client.registryUser, [Validators.required]],
        });
     })
   } else {
     this.form = this.formB.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required,  Validators.email]],
      cel: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      registryUser: ['', [Validators.required]],
    });
   }
}

  save() {
    if (this.form?.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const clientForm = this.form!.value;

    if (this.client) {
      this.clientService.update(this.client.id, clientForm)
      .subscribe(() => {
        this.router.navigate(['/search']);
    });

    } else {
      this.clientService.create(clientForm)
      .subscribe(() => {
        this.router.navigate(['/search']);
      });
    }
  }

}
