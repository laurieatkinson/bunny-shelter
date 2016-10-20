import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'colorRange' })
export class ColorRangePipe implements PipeTransform {
    transform(value: number): string {
        if (value <= 25) {
            return 'red';
        }
        if (value <= 75) {
            return 'yellow';
        }
        return 'chartreuse';
    }
}