package com.skilldistillery.eventtracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.eventtracker.entities.Event;
import com.skilldistillery.eventtracker.repositories.EventRepository;
@Service
public class EventServiceImpl implements EventService {
	
	@Autowired
	private EventRepository eventRepo;
	
	@Override
	public Event find(int id) {
		Optional<Event> eventOpt = eventRepo.findById(id);
		return eventOpt.isPresent() ? eventOpt.get() : null;
	}

	@Override
	public List<Event> index() {
		return eventRepo.findAll();
	}

}
