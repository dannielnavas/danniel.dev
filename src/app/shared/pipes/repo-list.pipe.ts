import { Pipe, PipeTransform } from '@angular/core';
import { IResponseGithub } from 'src/app/core/models/response-github.interface';

@Pipe({
  name: 'randomlist',
})
export class RepoListPipe implements PipeTransform {
  transform(value: IResponseGithub[], ...args: number[]): IResponseGithub[] {
    if (value && Number(args[0]) !== 0) {
      return value.sort(() => 0.5 - Math.random()).slice(0, args[0]);
    }
    return value;
  }
}
