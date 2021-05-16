/****************************************************************************************************************************
 - File Name        : Complaint Service Interface Implementation
 - Author           : Harshit Joshi
 - Creation Date    : 15-08-2020
 - Description      : This is an implementation of service interface of Complaint Services.
  ****************************************************************************************************************************/

package com.cg.farmingassistancesystem.complaintservice.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.cg.farmingassistancesystem.complaintservice.dao.ComplaintDAO;
import com.cg.farmingassistancesystem.complaintservice.dto.ComplaintDTO;
import com.cg.farmingassistancesystem.complaintservice.exceptions.ComplaintIdNotFoundException;

@Service
public class ComplaintServiceImpl implements ComplaintService {

	private ComplaintDAO complaintdao;

	@Autowired
	public ComplaintServiceImpl(ComplaintDAO complaintdao) {
		this.complaintdao = complaintdao;
	}

	static final Logger LOGGER = LoggerFactory.getLogger(ComplaintServiceImpl.class);

	public boolean isRepositoryNotNull() {
		boolean flag = false;

		if (complaintdao != null) {
			flag = true;

		}
		return flag;
	}

	@Override
	public ComplaintDTO addComplaint(ComplaintDTO complaintdto) {
		return complaintdao.saveAndFlush(complaintdto);
	}

	@Override
	public Set<ComplaintDTO> getAllComplaint() throws ComplaintIdNotFoundException {
		if (!isRepositoryNotNull()) {
			LOGGER.error("Problem with connectivity with service to DAO layer");
			throw new ComplaintIdNotFoundException("Sorry for the inconvinience, currently database is down!");
		}
		ArrayList<ComplaintDTO> complaintList = (ArrayList) complaintdao.findAll();
		HashSet<ComplaintDTO> complaintSet = new HashSet<ComplaintDTO>();
		for (ComplaintDTO complaint : complaintList) {
			complaintSet.add(complaint);
		}
		return complaintSet;
	}

	@Override
	public String updateComplaint(long complaintid, ComplaintDTO complaintdto) throws ComplaintIdNotFoundException {

		Optional<ComplaintDTO> complaint = complaintdao.findById(complaintid);
		if (complaint.isPresent()) {
			ComplaintDTO setComplaint = complaint.get();
			setComplaint.setComplaint_id(complaintdto.getComplaint_id());
			setComplaint.setFarmer_id(complaintdto.getFarmer_id());
			setComplaint.setComplaint_message(complaintdto.getComplaint_message());
			setComplaint.setComplaint_status(complaintdto.isComplaint_status());
			complaintdao.save(setComplaint);
		} else {
			throw new ComplaintIdNotFoundException("Complaint ID not found.");
		}
		return "Complaint Updated Successfully.";
	}

}
