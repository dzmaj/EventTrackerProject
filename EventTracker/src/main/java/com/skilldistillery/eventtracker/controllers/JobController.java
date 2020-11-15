package com.skilldistillery.eventtracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

}
