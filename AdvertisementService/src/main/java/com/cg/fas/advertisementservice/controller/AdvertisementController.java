package com.cg.fas.advertisementservice.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.fas.advertisementservice.dao.AdvertisementEntity;
import com.cg.fas.advertisementservice.dto.Advertisement;
import com.cg.fas.advertisementservice.exception.AdvertisementNotFoundException;
import com.cg.fas.advertisementservice.service.IAdvertisementService;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@Validated
@RequestMapping("/advertisement")
public class AdvertisementController {
	@Autowired
	private IAdvertisementService service;
	
	@GetMapping
	public ResponseEntity<List<AdvertisementEntity>> getAllAdvertisements() throws AdvertisementNotFoundException
	{
		 List<AdvertisementEntity> list=service.getAllAdvertisements();
		 return new ResponseEntity<>(list,HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<String> addAdvertisement(@Valid @RequestBody Advertisement advertisement){
		String p = service.addAdvertisement(advertisement);
		
		return ResponseEntity.status(HttpStatus.OK).body(p);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteAdvertisementById( @Valid @PathVariable int id) throws AdvertisementNotFoundException{
		return ResponseEntity.ok(service.deleteAsvertisementById(id)); 
	}

}
