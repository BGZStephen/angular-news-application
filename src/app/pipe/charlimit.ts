import {Pipe} from '@angular/core'

@Pipe({
  name: 'charlimit',
})
export class CharLimit {
  transform(value: string, args: string[]) : string {
    let limit = 100;
    let trail = args.length > 1 ? args[1] : '...';

    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}
