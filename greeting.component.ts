import { Component } from "@angular/core";

@Component({
  selector: "app-greeting",
  template: `<h1>Hello, welcome!</h1>`,
  styles: [
    `
      h1 {
        font-family: Lato;
        color: #4caf50;
      }
    `,
  ],
})
export class GreetingComponent {}
