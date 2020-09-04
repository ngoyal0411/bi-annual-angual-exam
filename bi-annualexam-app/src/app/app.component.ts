import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'bi-annualexam-app';

  constructor(private route: Router) {}
  goToProduct() {
    this.route.navigate(['/product']);
  }
}
