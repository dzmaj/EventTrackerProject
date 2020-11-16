# Job Application Tracker Project

## Overview and Lessons Learned
For this project, I created a database for tracking job applications. The database consists of two tables: one for job applications, and one for updates to the status of those applications.

For now this project does not have a front end.

This project went faster than I expected, Spring data repositories cut out a lot of the work. I did feel like I improved from previous work with REST controllers by being more consistent with which logic I put into the service implementations and which logic in the controllers. The most time consuming part overall was testing.

## Technologies Used
- Spring Boot
- Spring Data
- JPA
- JUnit
- REST
- MySQL / Workbench
- Postman

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
| List<Update> | GET api/jobs/{jobId}/updates               | Gets a list of all updates for a job                                                   |
| Update       | GET api/jobs/{jobId}/updates/{updateId}    | Gets an update for a job                                                               |
| Update       | POST api/jobs/{jobId}/updates              | Creates an update for a job                                                            |
| Update       | PUT api/jobs/{jobId}/updates/{updateId}    | Updates an update for a job                                                            |
| void         | DELETE api/jobs/{jobId}/updates/{updateId} | Deletes an update for a job                                                            |
