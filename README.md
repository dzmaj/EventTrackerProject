# Job Application Tracker Project

## Overview and Lessons Learned
For this project, I created a database for tracking job applications. The database consists of two tables: one for job applications, and one for updates to the status of those applications.

There is a single page front end that allows for basic CRUD operations on the job table. It displays a dynamic table of the jobs currently in the database. Clicking on one of the rows will change which job is currently active in the detail view.

The detail view will display the current information for a job in a form where it can be updated. The job can also be deleted here. There is also a separate form for creating a brand new job.

There is also a separate table to aggregate the total number of jobs for each location.

This project went faster than I expected on the back end, Spring data repositories cut out a lot of the work. I did feel like I improved from previous work with REST controllers by being more consistent with which logic I put into the service implementations and which logic in the controllers. The most time consuming part overall was testing.

The front end portion of this project was my first full project with javascript, and was more difficult and time consuming than I anticipated. I did not have time to make the front end as extensive as the back. I also struggled more with figuring out the overall structure of the front end than with the syntax and logic of individual functions.

Dealing with asynchronicity in particular gave me trouble. Initially I was trying to call a function for a XMLHttpRequest, and follow it with another function to update the display of data, which was not giving me the results I expected because I was not accounting for the XHR leaving the stack and then that data not being updated until after it had gone through the event loop.

## Technologies Used
- Spring Boot
- Spring Data
- JPA
- JUnit
- REST
- MySQL / Workbench
- Postman
- JavaScript
- HTML

## REST Mappings
Base URL
http://3.131.11.111:8080/EventTracker/api/
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
