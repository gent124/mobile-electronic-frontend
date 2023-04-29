import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { ClientService } from 'src/app/services/client.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  clientForm! : FormGroup


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private clientService: ClientService,
    private router : Router
  ) { }
  ngOnInit(): void {
    this.clientForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
      issue: this.formBuilder.control('', [Validators.required, Validators.minLength(2)]),
      phoneNumber: this.formBuilder.control('', [Validators.required, Validators.minLength(6)]),
      date: new Date(),

    })
  }

  onSubmit() {
    return this.clientService.createClient(this.clientForm.value).
    subscribe(newClient   =>{
      console.log(`Client created`);

      })
  }


  backToClients() {
    this.router.navigate(['client'])
  }
}
