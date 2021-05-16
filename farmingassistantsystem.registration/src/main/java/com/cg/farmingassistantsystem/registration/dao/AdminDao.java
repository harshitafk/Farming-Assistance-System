package com.cg.farmingassistantsystem.registration.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.farmingassistantsystem.registration.dto.AdminDto;
import com.cg.farmingassistantsystem.registration.dto.FarmerDto;

@Repository
public interface AdminDao extends JpaRepository<AdminDto,Long> {

	public AdminDto findByAdminusernameAndAdminpassword(String adminusername,String adminpassword);
}
