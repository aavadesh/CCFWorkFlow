import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.competencyFrameworkID.toLocaleLowerCase().includes(args)) || (val.name.toLocaleLowerCase().includes(args));
      return rVal;
    })
  }

}
