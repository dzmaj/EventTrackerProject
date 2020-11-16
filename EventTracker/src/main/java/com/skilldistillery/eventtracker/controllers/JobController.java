package com.skilldistillery.eventtracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.eventtracker.entities.Job;
import com.skilldistillery.eventtracker.services.JobService;

@RequestMapping("api")
@RestController
public class JobController {
	
	@Autowired
	private JobService jobSvc;
	
	@GetMapping("ping")
	public String pong() {
		return "pong";
	}
	
	@GetMapping("jobs")
	public List<Job> index(HttpServletRequest request, HttpServletResponse response) {
		return jobSvc.index();
	}
	
	@GetMapping("jobs/{id}")
	public Job findById(@PathVariable Integer id, HttpServletRequest request, HttpServletResponse response) {
		Job job = jobSvc.find(id);
		
		if (job == null) {
			response.setStatus(404);
		}
		return job;
	}
	
	@PostMapping("jobs")
	public Job create(@RequestBody Job job, HttpServletRequest request, HttpServletResponse response) {
		try {
			job = jobSvc.create(job);
			response.setStatus(201);
			StringBuffer url = request.getRequestURL();
			url.append("/").append(job.getId());
			response.setHeader("Location", url.toString());
		} catch (Exception e) {
			response.setStatus(400);
			job = null;
		}
		
		return job;
	}
	
	@DeleteMapping("jobs/{id}")
	public void delete(@PathVariable Integer id, HttpServletRequest request, HttpServletResponse response) {
		try {
			Boolean deleted = jobSvc.delete(id);
			if (deleted == null) {
				response.setStatus(404);
			} else if (!deleted) {
				response.setStatus(400);
			} else {
				response.setStatus(204);
			}
		} catch (Exception e) {
			response.setStatus(400);
		}
	}
	
	@PutMapping("jobs/{id}")
	public Job update(@RequestBody Job job, @PathVariable Integer id,
						HttpServletRequest request, HttpServletResponse response) {
		try {
			job = jobSvc.update(job, id);
			if (job == null) {
				response.setStatus(404);
			} else {
				response.setStatus(202);
				StringBuffer url = request.getRequestURL();
				response.setHeader("Location", url.toString());
			}
		} catch (Exception e) {
			response.setStatus(400);
			job = null;
		}
		
		return job;
	}
	
	@GetMapping("jobs/search/{keyword}")
	public List<Job> searchKeyword(@PathVariable String keyword, HttpServletRequest request, HttpServletResponse response) {
		return jobSvc.findByKeyword(keyword);
	}

}
