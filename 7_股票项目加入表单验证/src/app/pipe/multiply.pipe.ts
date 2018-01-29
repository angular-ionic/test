import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply'
})
export class MultiplyPipe implements PipeTransform {

  transform(value: number, args?: number): any {
    if (!args) {
      args = 1;
    }
    return value * args;
  }

}
