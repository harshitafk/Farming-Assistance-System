package com.cg.fas.CropService.Controller;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.cg.fas.CropService.Exception.CropException;
import com.cg.fas.CropService.Model.Crop;
import com.cg.fas.CropService.Service.CropServiceImpl;

public class CropControllerTest {
	@InjectMocks
	CropServiceController cropController;
	@Mock
	CropServiceImpl cropService;
	
	Crop crop;
	@BeforeEach
	void setUp() throws Exception{
		MockitoAnnotations.initMocks(this);
		crop =new Crop();
		crop.setFarmerId(101);
		crop.setCropName("Rice");
		crop.setCropPrice(40);
		crop.setCropQuantity(100);
		
	}
	
	@Test
	void testGetAllCrops() throws CropException {
		List<Crop> crops = new LinkedList<Crop>();
		when(cropService.getAllCrops()).thenReturn(crops);
		
		List<Crop> cropsNew = cropController.getAllCrop();
		
		assertNotNull(cropsNew);	
	}
	
	
	
	@Test
	void testAddCrops() {
		when(cropService.addCrops((List<Crop>) crop)).thenReturn(true);
	}
//	@SuppressWarnings("unchecked")
//	@Test
//	void testUpdateCrops() {
//		when(cropService.updateCrops((List<Crop>) crop)).thenReturn(1);
//	}
	@Test
	void testGetCrop() {
		when(cropService.getCrop(crop.getFarmerId())).thenReturn(crop);
	}
	
	
	
	
	
}
