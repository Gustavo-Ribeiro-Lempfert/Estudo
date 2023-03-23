import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplicaPorPipe'
})
export class MultiplicaPorPipePipe implements PipeTransform {

  transform(value: number, multiplica: number): unknown {
    return value * multiplica;
  }

}
