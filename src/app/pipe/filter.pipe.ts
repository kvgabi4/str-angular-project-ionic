import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[] | null, phrase: any): any[] | null {

    if (!Array.isArray(value) || !phrase) {
      return value;
    }

    phrase = ('' + phrase).toLowerCase();

    return value.filter(item => {
      let strItem: string = ''
      for (let i of Object.keys(item)) {
        if (typeof item[i] == 'object') {
          for (let j of Object.keys(item[i])) {
            strItem += ('' + item[i][j]).toLowerCase();
          }
        } else {
          strItem += ('' + item[i]).toLowerCase();
        }
      };
      return strItem.includes((phrase as string));
    })
  }


}
