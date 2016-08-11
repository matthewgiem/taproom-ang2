import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
  <div class="keg-form">
    <h3>Add new keg</h3>
    <input [(ngModel)]="keg.pints"/>
  </div>
  `
})
export class EditKegDetailsComponent  {
  public keg: Keg;
}
