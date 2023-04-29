import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Client} from '../..//interfaces/client.interface'
import { MatDialog } from '@angular/material/dialog';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { EditClientComponent } from '../edit-client/edit-client.component';


const clients: Client[] = [
  {name: 'Gent', issue: 'LCD', phoneNumber: '049252420', date: new Date()},
  {name: 'Agron', issue: 'Audio', phoneNumber: '044607060', date: new Date()},
  {name: 'Vigan', issue: 'Imei', phoneNumber: '049684007', date: new Date()},
  {name: 'Redon', issue: "Port", phoneNumber: '044123456', date: new Date('3/24/22 12:50',)},
  {name: 'Redon', issue: "Port", phoneNumber: '044123456', date: new Date('3/24/22 12:50',)},
  {name: 'Redon', issue: "Port", phoneNumber: '044123456', date: new Date()},
  {name: 'Redon', issue: "Port", phoneNumber: '044123456', date: new Date()},
  {name: 'Redon', issue: "Port", phoneNumber: '044123456', date: new Date()},
  {name: 'Redon', issue: "Port", phoneNumber: '044123456', date: new Date('3/24/22 12:50',)}





];
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  showAudioOnly = false;
  showImeiOnly = false;
  clients = clients;

  searchQuery! : string;

  selectedFilter : string = '';

filteredArray: Client[] = clients.slice();

  constructor(
    private router : Router,
    private formBuilder : FormBuilder,
    private dialog : MatDialog
  ) { }


ngOnInit(): void {

}


  addClient() {
    this.router.navigate(['addClient']);
  }

  filter(date: string) {
    const data = new Date(date)
    const array : Client[] = [];
    for( let i=0; i < this.clients.length; i++){
        if(clients[i].date.toLocaleDateString() == data.toLocaleDateString() ){
          array.push(clients[i]);
        }
    }
    this.clients = [...array];

  }

  toggleShowAudioOnly() {
    this.showAudioOnly = !this.showAudioOnly;
    this.selectedFilter = this.showAudioOnly ? 'Audio' : '';
  };

  toggleShowImeiOnly() {
    this.showImeiOnly = !this.showImeiOnly;
    this.selectedFilter = this.showImeiOnly ? 'Imei' : '';
  }

  updateFilteredClients() {
    this.clients = this.clients.filter((client) =>
      client.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }


  deleteClient(client : Client) {
    const index = this.clients.findIndex(client => client === client );
    if (index !== -1) {
      this.clients.splice(index, 1);
      const newclients = [...this.clients ];
      this.clients = newclients;
    }
  }

  editClient(client: Client) {
    const dialogRef = this.dialog.open(EditClientComponent, {
      data: { type: 'product', data: client }
    })
  }

}
