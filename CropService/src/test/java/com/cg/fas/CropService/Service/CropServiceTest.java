package com.cg.fas.CropService.Service;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

import java.util.LinkedList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.cg.fas.CropService.Model.Crop;
import com.cg.fas.CropService.Repository.CropRepository;

public class CropServiceTest {
	@InjectMocks
	CropServiceImpl cropService;
	@Mock
	CropRepository cropRepo;
	
	Crop crop;
	
	@BeforeEach
	void setUp() throws Exception {
		MockitoAnnotations.initMocks(this);
        Crop crop = new Crop();
		crop.setFarmerId(101);
		crop.setCropName("Rice");
		crop.setCropPrice(30);
		crop.setCropQuantity(100);
	}
	
	@Test
	void testAddCrops() {
		when(cropService.addCrops((List<Crop>) crop)).thenReturn(true);
	}
	
	@Test
	void testGetAllCrops() {
		List<Crop> crops = new LinkedList<Crop>();
		when(cropService.getAllCrops()).thenReturn(crops);
		
		List<Crop> cropsNew = cropService.getAllCrops();
		
		assertNotNull(cropsNew);	
	}
	
	
//	@Test
//	void testUpdateCrops() {
//		when(cropService.updateCrops((List<Crop>) crop)).thenReturn(1);
//	}
	
	@Test
	void testGetCrop() {
		when(cropService.getCrop(crop.getFarmerId())).thenReturn(crop);
	}
	
	
	
}
