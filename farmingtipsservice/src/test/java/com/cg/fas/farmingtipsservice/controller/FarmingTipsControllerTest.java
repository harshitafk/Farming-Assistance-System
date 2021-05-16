package com.cg.fas.farmingtipsservice.controller;

import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.cg.fas.farmingtipsservice.dto.Tips;
import com.cg.fas.farmingtipsservice.exceptions.FarmingTipsNotFoundException;
import com.cg.fas.farmingtipsservice.service.FarmingTipsService;


class FarmingTipsControllerTest  {
	
	@InjectMocks
	FarmingTipsController controller;
	
	@Mock
	FarmingTipsService service;
	
	Tips tips;
	
	@BeforeEach
	void setUp() throws Exception {
		
		MockitoAnnotations.initMocks(this);
		
		tips = new Tips();
		
		tips.setTipsMessage("fertilizers");
		tips.setId((long) 1001);
	}

//	@Test
//	void testViewTips() throws FarmingTipsNotFoundException {
//		
//		ResponseEntity<List<Tips>> farmingTips = new ResponseEntity<List<Tips>>(null);
//		
//		when(service.viewTips()).thenReturn((List<Tips>) farmingTips);
//		
//		ResponseEntity<List<Tips>> farmingTipsNew = controller.viewTips();
//		
//		assertNotNull(farmingTipsNew);
//		
//	}
	
	@Test
	void testAddTips() {
		when(service.addTips(tips)).thenReturn("tips");
	}
	
	@Test
	void testDeleteTips() throws FarmingTipsNotFoundException {
		when(service.deleteTips((long) 1001)).thenReturn("Tips record deleted successfully!");
		
		
	}

	@Test
	void testUpdateTips() throws FarmingTipsNotFoundException {
		when(service.updateTips((long) 1001, tips)).thenReturn("Tips updated successfully!");
	}
		
	}

	


		
		
	
	
	
	
	
	
	

	
