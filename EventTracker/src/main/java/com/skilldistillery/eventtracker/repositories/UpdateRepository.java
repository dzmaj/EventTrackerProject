package com.skilldistillery.eventtracker.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtracker.entities.Update;

public interface UpdateRepository extends JpaRepository<Update, Integer> {
	List<Update> findByJobId (int jobId);

}
