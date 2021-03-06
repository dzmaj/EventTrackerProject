import { TotalLocationsPipe } from './../../pipes/total-locations.pipe';
import { MapsService } from './../../services/maps.service';
import { JobService } from './../../services/job.service';
import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  jobs: Job[];
  title = 'Job Tracker';
  newJob: Job = new Job();
  selected = null;
  editJob: Job = null;
  stateAbbrevs: string[] = ['AK', 'AL', 'AR', 'AS', 'AZ', 'CA', 'CO', 'CT',
                            'DC', 'DE', 'FL', 'GA', 'GU', 'HI', 'IA', 'ID',
                            'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME',
                            'MI', 'MN', 'MO', 'MP', 'MS', 'MT', 'NC', 'ND',
                            'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK',
                            'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX',
                            'UM', 'UT', 'VA', 'VI', 'VT', 'WA', 'WI', 'WV',
                            'WY'];
  locSelected: string;
  mapCenter = {
    lat: 39.74,
    lng: 104.99
  }
  markers = [{}];
  constructor(private jobSvc: JobService, private mapsService: MapsService, private totalLocationsPipe: TotalLocationsPipe) { }

  ngOnInit(): void {
    this.reload();
    // this.mapCenter = this.mapsService.getCurrentLocation();
    console.log(navigator);
    if ('geolocation' in navigator) {

      navigator.geolocation.getCurrentPosition((pos) => {
        console.log(pos)
        this.mapCenter = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        }
        this.markers[0] = {
          position: {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          },
          label: 'Your Location'
        }
      })
    }
  }

  clearMarkers() {
    this.markers = this.markers.slice(0,1);
  }
  addAllMarkers(items) {
    let arr = this.totalLocationsPipe.transform(items);
    for(let i = 0; i < arr.length; i++) {
      this.getLocation(arr[i]);
    }
  }
  addMarker(marker) {
    let added = false;
    console.log(marker);
    for (let i = 0; i < this.markers.length; i++) {
      if (this.markers[i]['title'] === marker['title']) {
        this.markers[i] = marker;
        added = true;
      }
    }
    if (!added) {
      this.markers.push(marker)
    }
  }

  getLocation(item: object) {
    let place = item['name']
    let geocode = null;
    let result = null;
    this.mapsService.getGeocode(place).subscribe(
      data => {
        geocode = data;
        console.log(geocode);
        result = geocode['results'][0]['geometry']['location']
        console.log(result);
        this.mapCenter = result;
        this.addMarker(
          {
            position: result,
            label: place + ' - Jobs: ' + item['total'],
            title: place
          }
        )
      },
      err => console.error('Observer got an error from geocode: ' + err)
    )
  }

  reload():void {
    console.log('in reload');
    this.jobSvc.index().subscribe(
      data => this.jobs = data,
      err => console.error('Observer got an error from reload: ' + err)
    )
  }

  addJob(job: Job): void {
    this.jobSvc.create(job).subscribe(
      good => {
        this.newJob = new Job();
        this.reload();
      },
      err => console.error('Observer got an error from create: ' + err)
    );
  }

  updateJob(job: Job) {
    console.log('in updateJob()')
    console.log(job);

    this.jobSvc.update(job).subscribe(
      data => {
        this.reload();
        this.selected = Object.assign({}, data);
      },
      err => console.error('Observer got an error from update: ' + err)
    );
    this.editJob = null;
  };

  deleteJob(job: Job) {
    this.jobSvc.delete(job.id).subscribe(
      good => this.reload(),
      err => console.error('Observer got an error from delete: ' + err)
    );
    this.selected = null;
  }

  setEditJob() {
    this.editJob = Object.assign({}, this.selected);
  };

  selectJob(job) {
    this.selected = job;
  };

  cancelUpdate() {
    this.editJob = null;
  }

  clearNewJob() {
    this.newJob = new Job();
  }

  getNumJobs() {
    return this.jobs ? this.jobs.length : null;
  }

}
