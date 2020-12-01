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
  title = 'Job Tracker';
  newJob: Job = new Job();
  selected = null;
  editJob: Job = null;
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
        this.selected = Object.assign({}, data);;
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






}
