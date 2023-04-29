import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Client} from '../..//interfaces/client.interface'


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
    private formBuilder : FormBuilder
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

  sortByName() {
    const newArr = this.clients.sort((a,b) => a.name.localeCompare(b.name));
    console.log(newArr)
    this.clients = newArr;
  }

  sortByDate() {
    console.log(this.clients.sort((a,b) => b.date.getDate() - a.date.getDate()))
    return this.clients.sort((a,b) => b.date.getDate() - a.date.getDate());
  }

  sortByIssue() {
    const sortedByIssues =  this.clients.sort((a,b) => a.issue.localeCompare(b.issue));
    this.clients = sortedByIssues;
  }

}
