import {Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'charlimit',
})
export class CharLimit implements PipeTransform {
  transform(value: string, args: string[]) : string {
    let limit = 130;
    let trail = '...';
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}
