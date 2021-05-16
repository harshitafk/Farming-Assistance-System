/****************************************************************************************************************************
 - File Name        : Complaint Service Service
 - Author           : Harshit Joshi
 - Creation Date    : 15-08-2020
 - Description      : This is a service interface of Complaint Services.
  ****************************************************************************************************************************/

package com.cg.farmingassistancesystem.complaintservice.service;

import java.util.Set;

import com.cg.farmingassistancesystem.complaintservice.dto.ComplaintDTO;
import com.cg.farmingassistancesystem.complaintservice.exceptions.ComplaintIdNotFoundException;

public interface ComplaintService {

	/****************************************************************************************************************************
	 * - Method Name : addComplaint 
	 * - Input Parameters : ComplaintDTO complaintdto 
	 * - Return type : ComplaintDTO 
	 * - Author : Harshit Joshi 
	 * - Creation Date : 15-08-2020 
	 * - Description : Inserting the complaint into the database.
	 ****************************************************************************************************************************/
	public ComplaintDTO addComplaint(ComplaintDTO complaintdto);

	/****************************************************************************************************************************
	 * - Method Name : getAllComplaint 
	 * - Return type : Set<ComplaintDto> 
	 * - Author : Harshit Joshi 
	 * - Creation Date : 15-08-2020 
	 * - Description : Getting all the complaints from the database.
	 ****************************************************************************************************************************/
	public Set<ComplaintDTO> getAllComplaint() throws ComplaintIdNotFoundException;

	/****************************************************************************************************************************
	 * - Method Name : updateComplaint 
	 * - Input Parameters : long complaintid,ComplaintDTO complaintdto 
	 * - Return type : String 
	 * - Author : Harshit Joshi 
	 * - Creation Date : 15-08-2020 
	 * - Description : Updating the complaint status in the database.
	 ****************************************************************************************************************************/
	public String updateComplaint(long complaintid, ComplaintDTO complaintdto) throws ComplaintIdNotFoundException;

}
