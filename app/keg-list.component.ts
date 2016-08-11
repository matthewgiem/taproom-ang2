import { Component } from 'angular2/core';
import { AppComponent } from './app.component';
import { Keg } from './keg.model';
import { NewKegComponent } from './new-keg.component';

@Component({
  selector: "keg-list",
  inputs: ["kegList"],
  directives: [NewKegComponent],
  template: `
    <keg-display *ngFor="#keg of kegList"><div [style.color]="getStyle(keg)">Name of Keg: {{ keg.name }}</div><br> Alcohol Content: {{ keg.alcohol }}, Brewery: {{ keg.brand }}, Price of a Pint {{ keg.price }}, {{ keg.pints }} pints left <button (click)="sellPint(keg)">sell 1 pint</button>
    <br>
    </keg-display>
    <new-keg (onSubmitNewKeg)="addKegToList($event)"></new-keg>
    <br>
    <money-made></money-made>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  addKegToList(newKeg: Keg): void {
    this.kegList.push(newKeg);
  }
  sellPint(keg: Keg): void {
    console.log(keg);
    if(keg.pints === 11)  {
      alert("you're about to run out of " + keg.name);
    }
    if(keg.pints > 0) {
      keg.pints -=1;
    } else{
      alert("out of beer");
    }
  }
  getStyle(keg: Keg)  {
    if(keg.pints < 10){
      return "blue"
    } else {
      return "";
    }
  }
}
