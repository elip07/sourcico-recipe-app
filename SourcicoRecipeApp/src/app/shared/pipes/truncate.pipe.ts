import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
   transform(value: string, limit: number, ellipsis = '...') {
    if (value.length >= limit) {
        const lastWord = value.split(' ');
        limit = value.substr(0, limit).lastIndexOf('');
        return `${value.substr(0, limit)}${ellipsis}${lastWord[lastWord.length - 1]}`;
    } else {
        return value;
    }
  }
}
