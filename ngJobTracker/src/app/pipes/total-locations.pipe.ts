import { Pipe, PipeTransform } from '@angular/core';
import { Job } from '../models/job';

@Pipe({
  name: 'totalLocations'
})
export class TotalLocationsPipe implements PipeTransform {

  transform(jobs: Job[]): Object[] {
    let results = [];
    let totals = {};
    if (jobs) {
      jobs.forEach((element) => {
        let location = element.city + ', ' + element.state;
        if (totals[location] != undefined) {
          totals[location]++;
        } else {
          totals[location] = 1;
        }
      });
      for (let att in totals) {
        results.push({name: att, total: totals[att]});
      }
    }
    return results;
  }

}
