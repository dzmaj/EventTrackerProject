package com.skilldistillery.eventtracker.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class UpdateTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Update update;

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
		update  = em.find(Update.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		update = null;
	}

	@Test
	@DisplayName("test update entity")
	void test() {
		assertNotNull(update);
		assertEquals("applied", update.getStatus());
	}
	
	@Test
	@DisplayName("test update mapping to job")
	void test2() {
		assertNotNull(update);
		assertNotNull(update.getJob());
		assertEquals("Denver", update.getJob().getCity());
	}

}
