import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pagination' })
export class PaginationPipe implements PipeTransform {
  transform(value: any[], page, pageSize): any {
    page = page - 1;
    //console.log(value, page, ...value.slice(pageSize * (page - 1), pageSize * page));
    return [...value.slice(pageSize * page, pageSize * (page + 1))];
    // return [...value]
  }
}
