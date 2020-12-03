import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimText'
})
export class TrimTextPipe implements PipeTransform {

  transform(str: string, cutoff: number): string {
    if (!str) {
      return str;
    }
    if (str.length >= cutoff) {
      return str.slice(0,cutoff - 3) + '...';
    }
    else {
      return str;
    }
  }

}
