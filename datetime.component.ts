import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-datetime",
  template: `
    <div>
      <h2>{{ currentTime }}</h2>
      <p>{{ currentDate }}</p>
    </div>
  `,
  styles: [
    `
      h2 {
        font-size: 2em;
        color: #2196f3;
      }
    `,
    `
      p {
        color: #757575;
        font-size: 1.2em;
      }
    `,
  ],
})
export class DatetimeComponent implements OnInit {
  currentTime: string;
  currentDate: string;

  ngOnInit() {
    this.updateDateTime();
    setInterval(() => this.updateDateTime(), 1000); // Updates every second
  }

  updateDateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString();
    this.currentDate = now.toLocaleDateString();
  }
}
