import { MapsService } from './services/maps.service';
import { JobService } from './services/job.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TrimTextPipe } from './pipes/trim-text.pipe';
import { TotalLocationsPipe } from './pipes/total-locations.pipe';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    TrimTextPipe,
    TotalLocationsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    GoogleMapsModule
  ],
  providers: [
    JobService,
    MapsService,
    TotalLocationsPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
