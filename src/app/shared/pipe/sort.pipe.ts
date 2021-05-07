import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(_Array: Array<any>, order: string, key: string) {
    return _Array.sort((a, b) => {
      return order === 'asc' ? ((key)? (a[key] - b[key]) : (a - b)) : ((key) ? (b[key] - a[key]) : (b - a))
    })
  }

}
