import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterData'
})
export class FilterDataPipe implements PipeTransform {

  transform(value: any, idState: string, name: string, status: string): any {
    console.log(idState, name, status);
    if (!idState && !name && !status) {
      return value
    } else {
      if (idState) {
        value = value.filter(item => {
          return item.id.toString().indexOf(idState) != -1
        })
      }

      if (name) { 
        value = value.filter(item => {
          return item.name.toLowerCase().indexOf(name.toLowerCase()) != -1
        })
      }

      if (status) {
        value = value.filter(item => {
          return item.status.toString().toLowerCase().indexOf(status.toLowerCase()) != -1
        })
      }
    }
    return value;
  }

}
