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
		job = jobRepo.saveAndFlush(job);
		return job;
	}

	@Override
	public Job update(Job job, int id) {
		Optional<Job> dbJobOpt = jobRepo.findById(id);
		if (!dbJobOpt.isPresent()) {
			return null;
		}
		Job dbJob = dbJobOpt.get();
		if (job.getCity() != null) { dbJob.setCity(job.getCity()); }
		if (job.getState() != null) { dbJob.setState(job.getState()); }
		if (job.getPosition() != null) { dbJob.setPosition(job.getPosition()); }
		if (job.getDescription() != null) { dbJob.setDescription(job.getDescription()); }
		if (job.getUrl() != null) { dbJob.setUrl(job.getUrl()); }
		if (job.getSource() != null) { dbJob.setSource(job.getSource()); }
		return jobRepo.saveAndFlush(dbJob);
	}

	@Override
	public Boolean delete(int id) {
		if (!jobRepo.existsById(id)) {
			return null;
		}
		jobRepo.deleteById(id);
		if (jobRepo.existsById(id)) {
			return false;
		} else {
			return true;
		}
		
	}

	@Override
	public List<Job> findByKeyword(String kw) {
		return jobRepo.findByPositionContainingOrDescriptionContainingOrCompanyContaining(kw, kw, kw);
	}

}
