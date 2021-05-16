package com.cg.farmingassistantsystem.registration.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.farmingassistantsystem.registration.dto.SupplierDto;


@Repository
public interface SupplierDao extends JpaRepository<SupplierDto,Long> {

	public SupplierDto findBySupplierusername(String supplierusername);
	public SupplierDto findBySupplierusernameAndSupplierpassword(String supplierusername,String supplierpassword);
}
