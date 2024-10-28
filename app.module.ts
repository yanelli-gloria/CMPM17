import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { GreetingComponent } from "./greeting/greeting.component";
import { DatetimeComponent } from "./datetime/datetime.component";
import { QuarterlyGoalsComponent } from "./quarterly-goals/quarterly-goals.component";

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    DatetimeComponent,
    QuarterlyGoalsComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
