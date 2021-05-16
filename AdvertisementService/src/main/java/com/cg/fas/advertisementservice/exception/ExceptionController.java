package com.cg.fas.advertisementservice.exception;

import java.util.HashMap;
import java.util.Map;

import javax.validation.ConstraintViolationException;

import org.springframework.web.bind.annotation.ExceptionHandler;

public class ExceptionController {
	@ExceptionHandler(AdvertisementNotFoundException.class)
	public String handleException(AdvertisementNotFoundException e) {
		
		return e.getMessage();
	}
	
	@ExceptionHandler(ConstraintViolationException.class)
	public Map<String, String> handleConstraintViolation(ConstraintViolationException ex) {
	    Map<String, String> errors = new HashMap<>();
	     
	    ex.getConstraintViolations().forEach(cv -> {
	        errors.put("message", cv.getMessage());
	        errors.put("path", (cv.getPropertyPath()).toString());
	    }); 
	 
	    return errors;
	}

}
