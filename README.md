# Job Application Tracker Project

## Overview and Lessons Learned
This project is a full stack job tracker that allows the user to enter information for jobs they are interested in. Users can perform full CRUD operations on the jobs. It also totals the jobs up by location, and displays markers for the job locations in an embedded Google Map. The project was done in three stages as I learned: A back end database and REST api, a plain Javascript/HTML front end, and finally an angular front end.


### Back End REST - mySQL, JPA, Spring
For this project, I created a database for tracking job applications. The database consists of two tables: one for job applications, and one for updates to the status of those applications.

This project went faster than I expected on the back end, Spring data repositories cut out a lot of the work. I did feel like I improved from previous work with REST controllers by being more consistent with which logic I put into the service implementations and which logic in the controllers. The most time consuming part overall was testing.

### Front End - JavaScript Version
There is a single page front end that allows for basic CRUD operations on the job table. It displays a dynamic table of the jobs currently in the database. Clicking on one of the rows will change which job is currently active in the detail view.

The detail view will display the current information for a job in a form where it can be updated. The job can also be deleted here. There is also a separate form for creating a brand new job.

There is also a separate table to aggregate the total number of jobs for each location.

The front end portion of this project was my first full project with javascript, and was more difficult and time consuming than I anticipated. I did not have time to make the front end as extensive as the back. I also struggled more with figuring out the overall structure of the front end than with the syntax and logic of individual functions.

Dealing with asynchronicity in particular gave me trouble. Initially I was trying to call a function for a XMLHttpRequest, and follow it with another function to update the display of data, which was not giving me the results I expected because I was not accounting for the XHR leaving the stack and then that data not being updated until after it had gone through the event loop.

### Front End - Angular Version
The Angular version does everything the Javascript version does, but it has a few extra little features and is overall much nicer to use. Once I figured out the basics of Angular, everything went much more smoothly than working with just JavaScript, and I was able to put more time into exploring things like pipes, Bootstrap, and Google Maps.

I was able to get one of my stretch goals finished, which was to integrate a Google map into my application and dynamically add markers to the map. It was not actually too different from the rest of the project, as the main difficulty was to get a latitude and longitude based on a place name. To do so, I just needed to do a get request on the Google maps geocoding api, instead of on my own api, and then look up what the response would look like.

## Technologies Used
- Angular
- Spring Boot
- Spring Data
- JPA
- JUnit
- REST
- MySQL / Workbench
- Postman
- JavaScript
- HTML
- Bootstrap
- Google Maps api

## REST Mappings
| Return Type  | Route                                      | Functionality                                                                          |
|--------------|--------------------------------------------|----------------------------------------------------------------------------------------|
| List<Job>    | GET api/jobs                               | Gets a list of all jobs                                                                |
| Job          | GET api/jobs/{jobId}                       | Gets a job                                                                             |
| Job          | POST api/jobs                              | Creates a new job                                                                      |
| Job          | PUT api/jobs/{jobId}                       | Updates a job                                                                          |
| void         | DELETE api/jobs/{jobId}                    | Deletes a job                                                                          |
| List<Job>    | GET api/jobs/search/{keyword}              | Searches for jobs containing the keyword in the position, description, or company name |
| List<Update> | GET api/jobs/{jobId}/updates               | Gets a list of all updates for a job                                                   |
| Update       | GET api/jobs/{jobId}/updates/{updateId}    | Gets an update for a job                                                               |
| Update       | POST api/jobs/{jobId}/updates              | Creates an update for a job                                                            |
| Update       | PUT api/jobs/{jobId}/updates/{updateId}    | Updates an update for a job                                                            |
| void         | DELETE api/jobs/{jobId}/updates/{updateId} | Deletes an update for a job                                                            |
