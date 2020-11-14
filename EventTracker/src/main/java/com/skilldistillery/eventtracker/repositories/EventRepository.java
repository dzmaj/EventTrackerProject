package com.skilldistillery.eventtracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtracker.entities.Event;

public interface EventRepository extends JpaRepository<Event, Integer> {

}
