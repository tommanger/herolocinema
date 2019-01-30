import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cleanTxt'
})
export class CleanTxtPipe implements PipeTransform {

  transform(value: any): any {
    return value.replace(/[^a-zA-Z0-9 ]/g, '')
  }

}
