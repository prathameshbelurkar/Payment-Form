import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  names = '';
  date = '';
  amount = 0;
  miles = 0;

  onMilesChange(event: Event) {
    const target = event.target as HTMLInputElement;
    let value = target.value;
    this.miles = parseFloat(value);
  }

  onNameChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.names = target.value;
  }

  onDateChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.date = target.value;
  }

  onAmountChange(event: Event) {
    const target = event.target as HTMLInputElement;
    let value = target.value;

    this.amount = parseFloat(value);
  }
}
