import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirst'
})
export class CapitalizeFirst implements PipeTransform {
  transform(value: string) {
    if (value === null)
       return null;
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}