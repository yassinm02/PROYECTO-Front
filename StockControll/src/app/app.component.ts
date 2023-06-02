import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StockControll';

  isConnected = false;
  connectionCheckInterval: any;
  connectionCheckSubscription: Subscription;

  constructor(private http: HttpClient) {
    this.checkConnection();
    this.connectionCheckInterval = setInterval(() => {
      this.checkConnection();
    }, 7500);
  }

  ngOnDestroy(): void {
    // Clear the interval and unsubscribe from the subscription when the component is destroyed
    clearInterval(this.connectionCheckInterval);
    this.connectionCheckSubscription?.unsubscribe();
  }

  checkConnection(): void {
    // Make a simple HTTP GET request to your server URL
    this.connectionCheckSubscription = this.http.get<any>('http://192.168.0.17:8085/productos/check').subscribe(
      () => {
        // Connection successful
        this.isConnected = true;
      },
      (error) => {
        // Connection failed
        this.isConnected = false;
      }
    );
  }

  reloadPage(): void {
    location.reload();
  }
  
}
