package com.cg.farmingassistantsystem.registration.service;

import com.cg.farmingassistantsystem.registration.dto.AdminDto;
import com.cg.farmingassistantsystem.registration.dto.FarmerDto;
import com.cg.farmingassistantsystem.registration.dto.SupplierDto;

public interface RegistrationService {
	
	public FarmerDto registerFarmer(FarmerDto farmerdto);
	public FarmerDto fetchFarmerByUsername(String farmerusername);
	public FarmerDto fetchFarmerByUsernameAndPassword(String farmerusername,String farmerpassword);
	
	public SupplierDto registerSupplier(SupplierDto supplierdto);
	public SupplierDto fetchSupplierByUsername(String supplierusername);
	public SupplierDto fetchSupplierByUsernameAndPassword(String supplierusername,String supplierpassword);
	
	public AdminDto fetchAdminByUsernameAndPassword(String adminusername,String adminpassword);
	

}
