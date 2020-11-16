package com.skilldistillery.eventtracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.eventtracker.entities.Update;
import com.skilldistillery.eventtracker.services.UpdateService;

@RequestMapping("api")
@RestController
public class UpdateController {
	
	@Autowired
	private UpdateService updateSvc;
	
	@GetMapping("jobs/{jobId}/updates")
	public List<Update> index(@PathVariable Integer jobId, HttpServletRequest request, HttpServletResponse response) {
		List<Update> updates = updateSvc.index(jobId);
		if (updates == null) {
			response.setStatus(404);
		}
		return updates;
	}
	
	@GetMapping("jobs/{jobId}/updates/{updateId}")
	public Update findById(@PathVariable Integer jobId, @PathVariable Integer updateId, HttpServletRequest request, HttpServletResponse response) {
		Update update = updateSvc.find(jobId, updateId);
		if (update == null) {
			response.setStatus(404);
		}
		return update;
	}
	
	@PostMapping("jobs/{jobId}/updates")
	public Update create(@PathVariable Integer jobId, @RequestBody Update update, HttpServletRequest request, HttpServletResponse response) {
		try {
			update = updateSvc.create(jobId, update);
			if (update == null) {
				response.setStatus(404);
				return null;
			}
			response.setStatus(201);
			StringBuffer url = request.getRequestURL();
			url.append("/").append(update.getId());
			response.setHeader("Location", url.toString());
		} catch (Exception e) {
			response.setStatus(400);
			update = null;
		}
		
		return update;
	}
	
	@DeleteMapping("jobs/{jobId}/updates/{updateId}")
	public void delete(@PathVariable Integer jobId, @PathVariable Integer updateId, HttpServletRequest request, HttpServletResponse response) {
		try {
			Boolean deleted = updateSvc.delete(jobId, updateId);
			if (deleted == null) {
				response.setStatus(404);
			} else if (!deleted) {
				response.setStatus(400);
			} else {
				response.setStatus(204);
			}
		} catch (Exception e) {
			response.setStatus(400);
		}
	}
	
	@PutMapping("jobs/{jobId}/updates/{updateId}")
	public Update update(@PathVariable Integer jobId, @PathVariable Integer updateId, @RequestBody Update update,
						HttpServletRequest request, HttpServletResponse response) {
		try {
			update = updateSvc.update(jobId, updateId, update);
			if (update == null) {
				response.setStatus(404);
			} else {
				response.setStatus(202);
				StringBuffer url = request.getRequestURL();
				response.setHeader("Location", url.toString());
			}
		} catch (Exception e) {
			response.setStatus(400);
			update = null;
		}
		
		return update;
	}
	
}
