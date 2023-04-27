import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

import { AppComponent } from './app.component';
import { ClientComponent } from './components/client/client.component';
import { LoginComponent } from './components/login/login.component';
import { StockComponent } from './components/stock/stock.component';
import { BillsComponent } from './components/bills/bills.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    LoginComponent,
    StockComponent,
    BillsComponent,
    DashboardComponent,
    ToolbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  MatToolbarModule,
  MatInputModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatOptionModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
