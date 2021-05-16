/****************************************************************************************************************************
 - File Name        : Complaint Service Exception
 - Author           : Harshit Joshi
 - Creation Date    : 20-08-2020
 - Description      : This is a exception class to throw the exception for Complaint ID not found.
  ****************************************************************************************************************************/

package com.cg.farmingassistancesystem.complaintservice.exceptions;

public class ComplaintIdNotFoundException extends Exception {

	/****************************************************************************************************************************
	 * - Method Name : ComplaintIdNotFoundException - Input Parameters : String
	 * message - Author : Harshit Joshi - Creation Date : 20-08-2020 - Description :
	 * For throwing the exception with custom message.
	 ****************************************************************************************************************************/

	public ComplaintIdNotFoundException(String message) {
		super(message);
	}

}
