/****************************************************************************************************************************
 - File Name        : Complaint Service Controller
 - Author           : Harshit Joshi
 - Creation Date    : 17-08-2020
 - Description      : This is an end point controller to consume Complaint Services.
  ****************************************************************************************************************************/

package com.cg.farmingassistancesystem.complaintservice.controller;

import java.util.HashSet;
import java.util.Set;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.farmingassistancesystem.complaintservice.dto.ComplaintDTO;
import com.cg.farmingassistancesystem.complaintservice.exceptions.ComplaintIdNotFoundException;
import com.cg.farmingassistancesystem.complaintservice.service.ComplaintService;

@RestController
@RequestMapping("/complaintservice")
@Validated
public class ComplaintController {

	@Autowired
	private ComplaintService complaintservice;
	
	    //localhost:8084/complaintservice/addComplaint
		// ADDING Complaint
		/****************************************************************************************************************************
		 - Method Name      : addComplaint
		 - Input Parameters : ComplaintDTO complaintdto
		 - Return type      : ResponseEntity<ComplaintDTO>
		 - Author           : Harshit Joshi
		 - Creation Date    : 17-08-2020
		 - Description      : Inserting the complaint into the database.
		 - End Point Url    : localhost:8084
		  ****************************************************************************************************************************/ 

	@PostMapping("/addComplaint")
	public ResponseEntity<ComplaintDTO> addComplaint(@Valid @RequestBody ComplaintDTO complaintdto) {
		try {
			complaintservice.addComplaint(complaintdto);
			return new ResponseEntity<>(complaintdto, HttpStatus.CREATED);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}
	
	        //localhost:8084/complaintservice/getallcomplaint
			// GET all Complaints
			/****************************************************************************************************************************
			 - Method Name      : getAllComplaint
			 - Return type      : HashSet<ComplaintDTO>
			 - Author           : Harshit Joshi
			 - Creation Date    : 17-08-2020
			 - Description      : Get all the complaint in the database.
			 - End Point Url    : localhost:8084
			  ****************************************************************************************************************************/ 

	@GetMapping("/getallcomplaint")
	public Set<ComplaintDTO> getAllComplaint() throws ComplaintIdNotFoundException {
		return  complaintservice.getAllComplaint();
	}
	
	       // GET all Complaints
	       /****************************************************************************************************************************
	        - Method Name      : updateComplaint
	        - Input Parameters : long complaintid, ComplaintDTO complaintdto
	        - Return type      : HashSet<ComplaintDTO>
	        - Author           : Harshit Joshi
	        - Creation Date    : 17-08-2020
	        - Description      : Update all the complaint in the database.
	        - End Point Url    : localhost:8084
	        ****************************************************************************************************************************/ 

	@PutMapping("/updatecomplaint/{complaintid}")
	public ResponseEntity<String> updateComplaint(@Valid @PathVariable("complaintid") long complaintid,
			@Valid @RequestBody ComplaintDTO complaintdto) throws ComplaintIdNotFoundException {
		try {
			String msg = complaintservice.updateComplaint(complaintid, complaintdto);
			return new ResponseEntity<>(msg, HttpStatus.ACCEPTED);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}

}
