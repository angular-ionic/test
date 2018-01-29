import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockSearch'
})
export class StockSearchPipe implements PipeTransform {

  transform(list: any[], searchType?: string, searchKey?: string): any {

    if (!searchType || !searchKey) {
      return list;
    }
    return list.filter(item => {
      const value = item[searchType].toLowerCase();
      return value.indexOf(searchKey) !== -1;
    });
  }

}
