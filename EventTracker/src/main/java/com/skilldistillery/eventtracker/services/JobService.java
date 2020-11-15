package com.skilldistillery.eventtracker.services;

import java.util.List;

import com.skilldistillery.eventtracker.entities.Job;

public interface JobService {
	Job find(int id);
	List<Job> index();
	Job create(Job job);
	Job update(Job job, int id);
	Boolean delete(int id);
	List<Job> findByKeyword(String kw);
}
