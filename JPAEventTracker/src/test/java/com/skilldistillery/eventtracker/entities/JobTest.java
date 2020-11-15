package com.skilldistillery.eventtracker.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class JobTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Job job;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("EventPU");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		job  = em.find(Job.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		job = null;
	}

	@Test
	@DisplayName("test job entity")
	void test() {
		assertNotNull(job);
		assertEquals("Junior Web Developer", job.getPosition());
	}
	
	@Test
	@DisplayName("test job mapping to update")
	void test2() {
		assertNotNull(job);
		assertTrue(job.getUpdates().size() > 0);
		assertEquals("applied", job.getUpdates().get(0).getStatus());
	}

}
