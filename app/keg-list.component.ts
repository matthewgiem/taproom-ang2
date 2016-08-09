import { Component } from 'angular2/core';
import { AppComponent } from './app.component';
import { Keg } from './keg.model';

@Component({
  selector: "keg-list",
  inputs: ["kegList"],
  template: `
    <keg-display *ngFor="#keg of kegList">{{ keg.name }}
    </keg-display>
  `
})
export class KegListComponent {
  public kegList: Keg[];

}
