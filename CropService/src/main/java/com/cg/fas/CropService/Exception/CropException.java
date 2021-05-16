package com.cg.fas.CropService.Exception;



public class CropException extends Exception {


	public CropException(String string) {
	
	}

	public String CropNotFoundException(String message) {
		return message;
	}

}
