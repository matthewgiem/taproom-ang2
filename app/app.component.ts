import { Component } from 'angular2/core';
import { KegListComponent} from './keg-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <h1>Keg List</h1>
      <keg-list [kegList]="kegs"></keg-list>
    </div>
  `
})
export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg(0.12, "Whiskey", 1425, "Jameson", 14),
      new Keg(0.08, "Beer", 425, "Sessions", 4)
    ];
  }
}
