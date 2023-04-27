import { Component } from '@angular/core';
import { Router,Event, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  constructor(
    private router: Router,
    private authService: AuthService
    ) {

    this.router.events.pipe(
  filter((event: Event): event is NavigationStart => event instanceof NavigationStart)
).subscribe((event: NavigationStart) => {
  if (!this.authService.isLoggedIn && event.url.startsWith('/dashboard')) {
    // Redirect to the login page
    this.router.navigate(['/login']);
  }
});
  }
}
