package com.skilldistillery.eventtracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.skilldistillery.eventtracker.entities.Job;
import com.skilldistillery.eventtracker.entities.Update;
import com.skilldistillery.eventtracker.repositories.JobRepository;
import com.skilldistillery.eventtracker.repositories.UpdateRepository;

public class UpdateServiceImpl implements UpdateService {
	
	@Autowired
	private UpdateRepository updateRepo;
	@Autowired
	private JobRepository jobRepo;

	@Override
	public Update find(int jobId, int updateId) {
		Optional<Job> jobOpt = jobRepo.findById(jobId);
		if (!jobOpt.isPresent()) {
			return null;
		}
		Job job = jobOpt.get();
		Optional<Update> updateOpt = updateRepo.findById(updateId);
		if (!updateOpt.isPresent()) {
			return null;
		}
		Update update = updateOpt.get();
		if (job != update.getJob()) {
			return null;
		}
		return update;
	}

	@Override
	public List<Update> index(int jobId) {
		if (!jobRepo.existsById(jobId)) {
			return null;
		}
		return updateRepo.findByJobId(jobId);
	}

	@Override
	public Update create(int jobId, Update update) {
		Optional<Job> jobOpt = jobRepo.findById(jobId);
		if (!jobOpt.isPresent()) {
			return null;
		}
		Job job = jobOpt.get();
		update.setJob(job);
		update = updateRepo.saveAndFlush(update);
		return update;
	}

	@Override
	public Update update(int jobId, int updateId, Update update) {
		Optional<Job> jobOpt = jobRepo.findById(jobId);
		if (!jobOpt.isPresent()) {
			return null;
		}
		Job job = jobOpt.get();
		Optional<Update> updateOpt = updateRepo.findById(updateId);
		if (!updateOpt.isPresent()) {
			return null;
		}
		Update dbUpdate = updateOpt.get();
		if (job != dbUpdate.getJob()) {
			return null;
		}
		if (update.getNote() != null) { dbUpdate.setNote(update.getNote()); }
		if (update.getStatus() != null) { dbUpdate.setStatus(update.getStatus()); }
		return updateRepo.saveAndFlush(dbUpdate);
	}

	@Override
	public Boolean delete(int jobId, int updateId) {
		Optional<Job> jobOpt = jobRepo.findById(jobId);
		if (!jobOpt.isPresent()) {
			return null;
		}
		Job job = jobOpt.get();
		Optional<Update> updateOpt = updateRepo.findById(updateId);
		if (!updateOpt.isPresent()) {
			return null;
		}
		Update dbUpdate = updateOpt.get();
		if (job != dbUpdate.getJob()) {
			return null;
		}
		updateRepo.deleteById(updateId);
		return updateRepo.existsById(updateId);
	}

}
