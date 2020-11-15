package com.skilldistillery.eventtracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.eventtracker.entities.Job;
import com.skilldistillery.eventtracker.repositories.JobRepository;
@Service
public class JobServiceImpl implements JobService {
	
	@Autowired
	private JobRepository jobRepo;
	
	@Override
	public Job find(int id) {
		Optional<Job> eventOpt = jobRepo.findById(id);
		return eventOpt.isPresent() ? eventOpt.get() : null;
	}

	@Override
	public List<Job> index() {
		return jobRepo.findAll();
	}

	@Override
	public Job create(Job job) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Job update(Job job, int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Boolean delete(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Job> findByKeyword(String kw) {
		// TODO Auto-generated method stub
		return null;
	}

}
