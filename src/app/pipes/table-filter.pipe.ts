import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

  transform(value: any, args: string[]): any {
    let filter = args[0];

    if (filter) {
      filter.toString();
    }
    
    return filter ? value.filter(item => item.last_name.toString().indexOf(filter) != -1) : value;
  }

}
