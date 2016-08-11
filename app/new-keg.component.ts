import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
    <h3>Add new keg to the bar</h3>
    <input placeholder="nameOfKeg" #newNameOfKeg required>
    <input placeholder="brandOfBeer" #newBrandOfBeer required>
    <input placeholder="pricePerPint" #newPricePerPint required>
    <input placeholder="alcoholContent" #newAlcoholContent required>
    <button class="btn-success btn-lg add-button" (click)="addKeg(newNameOfKeg, newBrandOfBeer, newPricePerPint, newAlcoholContent)">Add</button>
  </div>
  `
})
export class NewKegComponent{
  public onSubmitNewKeg: EventEmitter<Keg>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(newNameOfKeg: HTMLInputElement, newBrandOfBeer: HTMLInputElement, newPricePerPint: HTMLInputElement, newAlcoholContent: HTMLInputElement){
    
    var newKeg = new Keg(parseFloat(newAlcoholContent.value), newBrandOfBeer.value, parseFloat(newPricePerPint.value), newNameOfKeg.value);
    console.log(newKeg);
    this.onSubmitNewKeg.emit(newKeg);
    newNameOfKeg.value = "";
    newBrandOfBeer.value = "";
    newPricePerPint.value = "";
    newAlcoholContent.value = "";
  }
}



// var params: String[] = [newNameOfKeg.value, newBrandOfBeer.value, newPricePerPint.value, newAlcoholContent.value];
// this.onSubmitNewKeg.emit(params);
// console.log(parseFloat(newAlcoholContent.value));
// console.log(new Keg(parseFloat(newAlcoholContent.value), newBrandOfBeer.value, parseFloat(newPricePerPint.value), newNameOfKeg.value));
