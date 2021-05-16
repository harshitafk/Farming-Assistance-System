package com.cg.fas.farmingtipsservice.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.fas.farmingtipsservice.dto.Tips;
import com.cg.fas.farmingtipsservice.exceptions.FarmingTipsNotFoundException;
import com.cg.fas.farmingtipsservice.service.FarmingTipsService;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/tips")
public class FarmingTipsController {
	
	@Autowired
	FarmingTipsService service;
	
	//http://localhost:9090/tips/viewTips
	@GetMapping("/viewTips")
	public ResponseEntity<List<Tips>> viewTips() {
		List<Tips> tipsList=service.viewTips();
		return new ResponseEntity<>(tipsList,HttpStatus.OK);
		
	}
	
	//http://localhost:9090/tips/addTips
	@PostMapping("/addTips")
	public ResponseEntity<String> addTips(@Valid @RequestBody Tips tips) {
		String msg= service.addTips(tips);
		ResponseEntity<String> response = new ResponseEntity(msg, HttpStatus.ACCEPTED);
		return new ResponseEntity<String>(msg,HttpStatus.ACCEPTED);
			}
	
	//http://localhost:9090/tips/deleteTips/1003
	@DeleteMapping("/deleteTips/{id}")
	public ResponseEntity<String> deleteTips(@PathVariable Long id) throws FarmingTipsNotFoundException{
		return ResponseEntity.ok(service.deleteTips(id));
	}
	
	//http://localhost:9090/tips/updateTips/1003
	@PutMapping("/updateTips/{id}")
	public ResponseEntity<String> updateTips(@PathVariable Long id, @RequestBody Tips tips) throws FarmingTipsNotFoundException{
		return ResponseEntity.ok(service.updateTips(id, tips));
	}
	
	

}


