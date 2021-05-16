package com.cg.fas.advertisementservice.service;

import java.util.List;

import com.cg.fas.advertisementservice.dao.AdvertisementEntity;
import com.cg.fas.advertisementservice.dto.Advertisement;
import com.cg.fas.advertisementservice.exception.AdvertisementNotFoundException;

public interface IAdvertisementService {
	public List<AdvertisementEntity> getAllAdvertisements()  throws AdvertisementNotFoundException;
	public String addAdvertisement(Advertisement advertisement) ;
	public String deleteAsvertisementById(int id) throws AdvertisementNotFoundException;

}
