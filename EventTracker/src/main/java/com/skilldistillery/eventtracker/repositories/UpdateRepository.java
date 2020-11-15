package com.skilldistillery.eventtracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtracker.entities.Update;

public interface UpdateRepository extends JpaRepository<Update, Integer> {

}
