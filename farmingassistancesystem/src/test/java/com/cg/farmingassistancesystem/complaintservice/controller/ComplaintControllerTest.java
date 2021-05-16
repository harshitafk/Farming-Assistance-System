package com.cg.farmingassistancesystem.complaintservice.controller;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;


import com.cg.farmingassistancesystem.complaintservice.dto.ComplaintDTO;
import com.cg.farmingassistancesystem.complaintservice.exceptions.ComplaintIdNotFoundException;
import com.cg.farmingassistancesystem.complaintservice.service.ComplaintService;

class ComplaintControllerTest {

	@InjectMocks
	ComplaintController complaintcontroller;

	@Mock
	ComplaintService complaintservice;

	ComplaintDTO complaintdto;

	@BeforeEach
	void setUp() throws Exception {
		MockitoAnnotations.initMocks(this);
		complaintdto = new ComplaintDTO(1234,5555,"Water supply problem",true);
	}

	@Test
	void testAddComplaint() {
		when(complaintservice.addComplaint(complaintdto)).thenReturn(complaintdto);
		
	}

	@Test
	void testGetAllComplaint() throws ComplaintIdNotFoundException {
			HashSet<ComplaintDTO> complaintSet = new HashSet<ComplaintDTO>();
			when(complaintservice.getAllComplaint()).thenReturn(complaintSet);
			
			Set<ComplaintDTO> complaintSetNew = complaintcontroller.getAllComplaint();
			
			assertNotNull(complaintSetNew);		
		
	}

	@Test
	void testUpdateComplaint() throws ComplaintIdNotFoundException {
		when(complaintservice.updateComplaint(1234, complaintdto)).thenReturn("Complaint Updated Successfully.");
	}

}
