package com.skilldistillery.eventtracker.services;

import java.util.List;

import com.skilldistillery.eventtracker.entities.Event;

public interface EventService {
	Event find(int id);
	List<Event> index();
}
