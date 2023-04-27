import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {

  clientForm = this.formBuilder.group({
    name: '',
    issue: '',
    date: new Date(),

  })

  client = {
    name: 'Gent',
    issue: 'Lcd',
    date: new Date(),
  }

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private clientService: ClientService
  ) { }

  onSubmit() {
    return this.clientService.createClient(this.client).
    subscribe(newClient   =>{
      console.log(`Client created`);

      })
  }
}
