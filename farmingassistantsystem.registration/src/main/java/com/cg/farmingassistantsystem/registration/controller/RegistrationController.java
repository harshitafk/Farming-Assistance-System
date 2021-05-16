package com.cg.farmingassistantsystem.registration.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.farmingassistantsystem.registration.dto.AdminDto;
import com.cg.farmingassistantsystem.registration.dto.FarmerDto;
import com.cg.farmingassistantsystem.registration.dto.SupplierDto;
import com.cg.farmingassistantsystem.registration.service.RegistrationService;

@RestController
@RequestMapping("/registration")
@CrossOrigin(origins = "*")
public class RegistrationController {
	
	@Autowired
	private RegistrationService registrationservice;
	
	@PostMapping("/farmersignup")
	public ResponseEntity<FarmerDto> registerFarmer(@RequestBody FarmerDto farmerdto) throws Exception {
		    String farmerUsername = farmerdto.getFarmerusername();
		    if(farmerUsername != null && !"".equals(farmerUsername)) {
		    	FarmerDto farmerAvailable = registrationservice.fetchFarmerByUsername(farmerUsername);
		    	if(farmerAvailable != null) {
		    		throw new Exception("Farmer with "+farmerUsername+" already exists.");
		    	}
		    }
			registrationservice.registerFarmer(farmerdto);
			return new ResponseEntity<FarmerDto>(farmerdto, HttpStatus.CREATED);
	}
	
	
	@PostMapping("/farmerlogin")
	public FarmerDto loginFarmer(@RequestBody FarmerDto farmerdto) throws Exception {
		String farmerUsername = farmerdto.getFarmerusername();
		String farmerPassword = farmerdto.getFarmerpassword();
		FarmerDto farmerdtoTemp =  null;
		if(farmerUsername != null && farmerPassword != null) {
			farmerdtoTemp = registrationservice.fetchFarmerByUsernameAndPassword(farmerUsername, farmerPassword);	
		}
		if(farmerdtoTemp == null) {
			throw new Exception("Uggh! User account not found.");
		}
		return farmerdtoTemp;
	}
	
	
	@PostMapping("/suppliersignup")
	public ResponseEntity<SupplierDto> registerSupplier(@RequestBody SupplierDto supplierdto) throws Exception {
		    String supplierUsername = supplierdto.getSupplierusername();
		    if(supplierUsername != null && !"".equals(supplierUsername)) {
		    	SupplierDto supplierAvailable = registrationservice.fetchSupplierByUsername(supplierUsername);
		    	if(supplierAvailable != null) {
		    		throw new Exception("Supplier with "+supplierUsername+" already exists.");
		    	}
		    }
			registrationservice.registerSupplier(supplierdto);
			return new ResponseEntity<SupplierDto>(supplierdto, HttpStatus.CREATED);
	}
	
	
	@PostMapping("/supplierlogin")
	public SupplierDto loginSupplier(@RequestBody SupplierDto supplierdto) throws Exception {
		String supplierUsername = supplierdto.getSupplierusername();
		String supplierPassword = supplierdto.getSupplierpassword();
		SupplierDto supplierdtoTemp =  null;
		if(supplierUsername != null && supplierPassword != null) {
			supplierdtoTemp = registrationservice.fetchSupplierByUsernameAndPassword(supplierUsername, supplierPassword);
		}
		if(supplierdtoTemp == null) {
			throw new Exception("Uggh! User account not found.");
		}
		return supplierdtoTemp;
	}
	
	@PostMapping("/adminlogin")
	public AdminDto loginAdmin(@RequestBody AdminDto admindto) throws Exception {
		String adminUsername = admindto.getAdminusername();
		String adminPassword = admindto.getAdminpassword();
		AdminDto admindtoTemp =  null;
		if(adminUsername != null && adminPassword != null) {
			admindtoTemp = registrationservice.fetchAdminByUsernameAndPassword(adminUsername, adminPassword);
		}
		if(admindtoTemp == null) {
			throw new Exception("Uggh! User account not found.");
		}
		return admindtoTemp;
	}

}
