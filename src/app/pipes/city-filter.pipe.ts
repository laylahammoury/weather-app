import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cityFilter'
})
export class CityFilterPipe implements PipeTransform {

  transform(value: any, citySearch: string): any {
    if (!citySearch)
      return value.filter(city=> city.country == "PA")
  }

}
