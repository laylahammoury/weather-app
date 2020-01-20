import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cityFilter'
})
export class CityFilterPipe implements PipeTransform {

  transform(value: any, citySearch: string): any {
    if (citySearch == ""){
      let palestine = value.filter(city=> city.country == "PS");
      return palestine.slice(1,30);
      
    }
    return value.filter(city => city.name.toLowerCase().includes(citySearch.toLowerCase()));
  }

}
