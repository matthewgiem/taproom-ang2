import { Pipe, PipeTransform } from 'angular2/core';
import { Keg } from './keg.model';

@Pipe({
  name: "completeness",
  pure: false
})
export class CompletenessPipe implements PipeTransform{
  transform(input: Keg[], args) {
    var desiredSort = args[0];
    if(desiredSort === "pints") {
      input.sort(function(a,b)  {
        return b.pints - a.pints;
      });
    } else if(desiredSort === "price") {
      input.sort(function(a,b)  {
        return b.price - a.price;
      });
    } else  {
      return input;
    };
    return input;
  }
}
