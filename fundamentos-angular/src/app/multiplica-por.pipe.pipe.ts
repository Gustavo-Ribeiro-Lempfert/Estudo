import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplicaPorPipe'
})
export class MultiplicaPorPipePipe implements PipeTransform {

  transform(valor: number, multiplica: number): unknown {
    return valor * multiplica;
  }

}
