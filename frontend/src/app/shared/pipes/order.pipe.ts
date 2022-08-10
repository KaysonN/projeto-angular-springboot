import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'frontend': return 'code';
      case 'backend': return 'computer';
    }

    return 'code';
  }

}
