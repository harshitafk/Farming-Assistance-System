package com.cg.farmingassistancesystem.complaintservice.service;

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

import com.cg.farmingassistancesystem.complaintservice.dao.ComplaintDAO;
import com.cg.farmingassistancesystem.complaintservice.dto.ComplaintDTO;
import com.cg.farmingassistancesystem.complaintservice.exceptions.ComplaintIdNotFoundException;

class ComplaintServiceImplTest {

	@InjectMocks
	ComplaintServiceImpl complaintServiceImpl;
	
	@Mock
	ComplaintDAO complaintdao;
	
	ComplaintDTO complaintdto;
	
	
	@BeforeEach
	void setUp() throws Exception {
		MockitoAnnotations.initMocks(this);
        ComplaintDTO complaintdto = new ComplaintDTO(1234,5555,"Water supply closed",true);
	}

	@Test
	void testAddComplaint() {
		when(complaintdao.saveAndFlush(complaintdto)).thenReturn(complaintdto);
		
	}

	@Test
	void testGetAllComplaint() throws ComplaintIdNotFoundException {
		ArrayList<ComplaintDTO> complaintList = new ArrayList<ComplaintDTO>();
		
		when(complaintdao.findAll()).thenReturn(complaintList);
		
		Set<ComplaintDTO> complaint = complaintServiceImpl.getAllComplaint();
		
		assertNotNull(complaint);
	}

	@Test
	void testUpdateRoom() throws ComplaintIdNotFoundException {

		when(complaintdao.save(complaintdto)).thenReturn(complaintdto);
	}
	

}
