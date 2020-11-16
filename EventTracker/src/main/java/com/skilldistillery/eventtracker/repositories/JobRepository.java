package com.skilldistillery.eventtracker.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtracker.entities.Job;

public interface JobRepository extends JpaRepository<Job, Integer> {
	List<Job> findByPositionContainingOrDescriptionContainingOrCompanyContaining(String kw1, String kw2, String kw3);
}
