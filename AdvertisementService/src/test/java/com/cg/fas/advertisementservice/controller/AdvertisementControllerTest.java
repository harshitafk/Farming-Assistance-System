package com.cg.fas.advertisementservice.controller;

import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;


import com.cg.fas.advertisementservice.dao.AdvertisementEntity;
import com.cg.fas.advertisementservice.dto.Advertisement;
import com.cg.fas.advertisementservice.exception.AdvertisementNotFoundException;
import com.cg.fas.advertisementservice.service.IAdvertisementService;



class AdvertisementControllerTest {
	
	@InjectMocks
	AdvertisementController controller;
    
    @Mock
    IAdvertisementService service;
    
    AdvertisementEntity advertisement;
    Advertisement advertisementdto;
    
   

    
    
    
	@BeforeEach
	void setUp() throws Exception {
	
		 MockitoAnnotations.initMocks(this);
	        
		 advertisementdto = new Advertisement();
	        
		 advertisementdto.setId(11);
		 advertisementdto.setCropname("corn");
		 advertisementdto.setQuantity(10);
		 
	    }

	 

	

//	@Test
//	void testGetAllAdvertisements() throws AdvertisementNotFoundException {
//		List<AdvertisementEntity> complaintSet = new ArrayList<AdvertisementEntity>();
//		when(service.getAllAdvertisements()).thenReturn(complaintSet);
//		
//		List<AdvertisementEntity> advertisementSet = (List<AdvertisementEntity>) controller.getAllAdvertisements();
//		
//		assertNotNull(advertisementSet);		
//	}

	@Test
	void testAddAdvertisement() {
		when(service.addAdvertisement(advertisementdto)).thenReturn("Advertisement added successfully");
	}

	@Test
	void testDeleteAdvertisementById() throws AdvertisementNotFoundException {
		when(service.deleteAsvertisementById(10)).thenReturn("Advertisement deleted successfully");
		
	}

}
