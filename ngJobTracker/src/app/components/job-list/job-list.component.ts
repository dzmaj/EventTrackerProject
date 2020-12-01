import { JobService } from './../../services/job.service';
import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  jobs: Job[];
  constructor(private jobSvc: JobService) { }

  ngOnInit(): void {
    this.reload();
  }

  reload():void {
    console.log('in reload');
    this.jobSvc.index().subscribe(
      data => this.jobs = data,
      err => console.error('Observer got an error from reload: ' + err)
    )
  }



}
