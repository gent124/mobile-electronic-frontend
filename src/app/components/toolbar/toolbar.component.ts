import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit, OnDestroy {
  isLoggedIn = false;
  isLoggedInSubscription!: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isLoggedInSubscription = this.authService.getIsLoggedIn().subscribe(
      isLoggedIn => {
        this.isLoggedIn = isLoggedIn;
      }
    );
  }

  ngOnDestroy() {
    this.isLoggedInSubscription.unsubscribe();
  }

  logOut() {
    this.authService.logout();
  }
}
