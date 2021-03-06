import { Component } from 'angular2/core';
import { AppComponent } from './app.component';
import { Keg } from './keg.model';
import { NewKegComponent } from './new-keg.component';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { CompletenessPipe } from './completeness.pipe';

@Component({
  selector: "keg-list",
  inputs: ["kegList"],
  directives: [NewKegComponent],
  pipes: [CompletenessPipe],
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="price">price</option>
      <option value="pints">pints</option>
      <option value="none" selected="selected">no order</option>
    </select>
    <div *ngFor="#keg of kegList | completeness:selectedCompleteness"><div [style.color]="getStyle(keg)">Name of Keg: {{ keg.name }}</div><br><div>Alcohol Content: {{ keg.alcohol }}, Brewery: {{ keg.brand }}, Price of a Pint {{ keg.price }}, {{ keg.pints }} pints left</div><br><button (click)="sellPint(keg)">sell 1 pint</button>
    <button (click)="addKeg(keg)">add keg</button><button (click)="sellKeg(keg)">sell keg</button>
    <hr>
    <br>
    </div>
    <new-keg (onSubmitNewKeg)="addKegToList($event)"></new-keg>
    <br>
    <money-made></money-made>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public selectedCompleteness: string = "none"
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
    if(keg.pints <= 10){
      return "blue"
    } else {
      return "";
    }
  }
  addKeg(keg: Keg)  {
    keg.pints +=124;
  }
  sellKeg(keg: Keg) {
    if(keg.pints >=124) {
      keg.pints -= 124;
    } else  {
      alert("you've already opened your last keg and can't return it");
    }
  }
  onChange(optionFromMenu)  {
    this.selectedCompleteness = optionFromMenu;
  }
}
