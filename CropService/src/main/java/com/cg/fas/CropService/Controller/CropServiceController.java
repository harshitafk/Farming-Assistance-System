package com.cg.fas.CropService.Controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


import com.cg.fas.CropService.Exception.CropException;
import com.cg.fas.CropService.Model.BuyerCrops;
import com.cg.fas.CropService.Model.Crop;
import com.cg.fas.CropService.Service.CropServiceImpl;

@RestController
@CrossOrigin(origins = "*")
public class CropServiceController {
	@Autowired
	private CropServiceImpl cropservice;
	
	
	//Crop Control Starts
	@GetMapping("/get")
	public List<Crop> getAllCrop() throws CropException{
		try {
		return cropservice.getAllCrops();
		}
		catch(Exception ex){
			throw new CropException("No crop Found");
		}
		
	}
	
	@PostMapping(value="/add")
	public boolean addCrop(@RequestBody List<Crop> crop) {
		cropservice.addCrops(crop);
		return true;
		
	}
	
	@DeleteMapping("/deleteCrop/{farmerId}")
	public void deleteCrop(@PathVariable int farmerId) {
		cropservice.removeCrop(farmerId);
	}
	
//	@PutMapping("/updateCrop/{farmerId}")
//	public String updateCrop(@RequestBody List<Crop> crop, @PathVariable int farmerId) throws CropException  {
//		
//		cropservice.updateCrops(crop, farmerId);
//		return "Updted";
//		
//	}
	
	@GetMapping(value="/get/{cropName}")
	public Crop getCrops(@PathVariable int farmerId) {
		return cropservice.getCrop(farmerId);
	}
	
	
	//Crop Control Ends
	//Crop Buy Starts
	@PostMapping("/buyCrops/{farmerId}")
	public void buyCrops( @PathVariable int farmerId) {
		cropservice.addCropstoBuyer( farmerId);
	}
	
	@GetMapping("/getBuyerAll")
	public List<BuyerCrops> getCropsFromBuyer(){
		
			
			return cropservice.getAll();
		}
	
	
}