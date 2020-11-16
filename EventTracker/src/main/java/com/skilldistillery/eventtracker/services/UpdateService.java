package com.skilldistillery.eventtracker.services;

import java.util.List;

import com.skilldistillery.eventtracker.entities.Job;
import com.skilldistillery.eventtracker.entities.Update;

public interface UpdateService {
	Update find(int jobId, int updateId);
	List<Update> index(int jobId);
	Update create(int jobId, Update update);
	Update update(int jobId, int updateId, Update update);
	Boolean delete(int jobId, int updateId);
}
