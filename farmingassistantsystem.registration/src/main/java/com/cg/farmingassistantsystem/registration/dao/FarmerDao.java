package com.cg.farmingassistantsystem.registration.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.farmingassistantsystem.registration.dto.FarmerDto;

@Repository
public interface FarmerDao extends JpaRepository<FarmerDto,Long> {

	public FarmerDto findByFarmerusername(String farmerusername);
	public FarmerDto findByFarmerusernameAndFarmerpassword(String farmerusername,String farmerpassword);
	
}
