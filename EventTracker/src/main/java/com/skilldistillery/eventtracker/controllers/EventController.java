package com.skilldistillery.eventtracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.eventtracker.entities.Event;
import com.skilldistillery.eventtracker.services.EventService;

@RequestMapping("api")
@RestController
public class EventController {
	
	@Autowired
	private EventService eventSvc;
	
	@GetMapping("ping")
	public String pong() {
		return "pong";
	}
	
	@GetMapping("events")
	public List<Event> index(HttpServletRequest request, HttpServletResponse response) {
		return eventSvc.index();
	}
	
	@GetMapping("events/{id}")
	public Event findById(@PathVariable Integer id, HttpServletRequest request, HttpServletResponse response) {
		Event event = eventSvc.find(id);
		
		if (event == null) {
			response.setStatus(404);
		}
		
		return event;
	}

}
