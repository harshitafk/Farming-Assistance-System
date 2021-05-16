package com.cg.farmingassistantsystem.registration.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.farmingassistantsystem.registration.dao.AdminDao;
import com.cg.farmingassistantsystem.registration.dao.FarmerDao;
import com.cg.farmingassistantsystem.registration.dao.SupplierDao;
import com.cg.farmingassistantsystem.registration.dto.AdminDto;
import com.cg.farmingassistantsystem.registration.dto.FarmerDto;
import com.cg.farmingassistantsystem.registration.dto.SupplierDto;

@Service
public class RegistrationServiceImpl implements RegistrationService {

	@Autowired
	private FarmerDao farmerdao;
	
	@Autowired
	private SupplierDao supplierdao;
	
	@Autowired
	private AdminDao admindao;
	
	@Override
	public FarmerDto registerFarmer(FarmerDto farmerdto) {
		return farmerdao.saveAndFlush(farmerdto);
	}

	@Override
	public FarmerDto fetchFarmerByUsername(String farmerusername) {
		return farmerdao.findByFarmerusername(farmerusername);
	}
	
	@Override
	public FarmerDto fetchFarmerByUsernameAndPassword(String farmerusername,String farmerpassword) {
		return farmerdao.findByFarmerusernameAndFarmerpassword(farmerusername, farmerpassword);
	}

	@Override
	public SupplierDto registerSupplier(SupplierDto supplierdto) {
		return supplierdao.saveAndFlush(supplierdto);
	}

	@Override
	public SupplierDto fetchSupplierByUsername(String supplierusername) {
		return supplierdao.findBySupplierusername(supplierusername);
	}

	@Override
	public SupplierDto fetchSupplierByUsernameAndPassword(String supplierusername, String supplierpassword) {
		return supplierdao.findBySupplierusernameAndSupplierpassword(supplierusername, supplierpassword);
	}

	@Override
	public AdminDto fetchAdminByUsernameAndPassword(String adminusername, String adminpassword) {
		return admindao.findByAdminusernameAndAdminpassword(adminusername, adminpassword);
	}

}
