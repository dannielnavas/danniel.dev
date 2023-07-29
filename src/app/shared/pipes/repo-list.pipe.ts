import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomlist',
})
export class RepoListPipe implements PipeTransform {
  transform(value: any[], ...args: number[]): any[] {
    if (value && Number(args[0]) !== 0) {
      return value.sort(() => 0.5 - Math.random()).slice(0, args[0]);
    }
    return value;
  }
}
