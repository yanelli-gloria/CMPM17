import { Component } from "@angular/core";

@Component({
  selector: "app-quarterly-goals",
  template: `
    <div>
      <h3>Quarterly Goals</h3>
      <ul>
        <li>Do well in Algorithms Class</li>
      </ul>
    </div>
  `,
  styles: [
    `
      h3 {
        color: #ff5722;
        font-size: 1.8em;
      }
    `,
    `
      ul {
        list-style-type: none;
        padding: 0;
      }
    `,
    `
      li {
        font-size: 1.2em;
        margin: 5px 0;
        color: #666;
      }
    `,
  ],
})
export class QuarterlyGoalsComponent {}
