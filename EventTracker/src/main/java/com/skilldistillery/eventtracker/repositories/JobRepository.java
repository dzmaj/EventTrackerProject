package com.skilldistillery.eventtracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtracker.entities.Job;

public interface JobRepository extends JpaRepository<Job, Integer> {

}
