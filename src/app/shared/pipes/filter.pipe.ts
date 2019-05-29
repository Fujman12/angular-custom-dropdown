import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class Filter implements PipeTransform {
  transform(items: string[], value: string, isAutocomplete, initialData): any {
    if (!isAutocomplete) { return items; }
    if (!items.length) { return items; }
    if (!value) { return initialData.slice(0, 5); }
    return items
      .sort((a: string, b: string): any => {
        a = a.toLowerCase();
        b = b.toLowerCase();
        value = value.toLowerCase();
        if (a.indexOf(value) === -1) {
          return 1;
        } else if (b.indexOf(value) === -1) {
          return -1;
        }
        return a.indexOf(value) - b.indexOf(value);
      })
      .slice(0, 5);
  }
}
