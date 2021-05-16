package com.cg.fas.advertisementservice.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.fas.advertisementservice.dao.AdvertisementEntity;
import com.cg.fas.advertisementservice.dao.IAdvertisementRepository;
import com.cg.fas.advertisementservice.dto.Advertisement;
import com.cg.fas.advertisementservice.exception.AdvertisementNotFoundException;
@Service
public class AdvertisementServiceImpl implements IAdvertisementService{
	@Autowired
	private IAdvertisementRepository repo;

	@Override
	public List<AdvertisementEntity> getAllAdvertisements()  throws AdvertisementNotFoundException {
		return repo.findAll();
		
	}

	@Override
	public String addAdvertisement(Advertisement advertisement) {
		AdvertisementEntity entity=new AdvertisementEntity();
		entity.setId(advertisement.getId());
		entity.setCropname(advertisement.getCropname());
		entity.setQuantity(advertisement.getQuantity());
		repo.saveAndFlush(entity);
		 return "Advertisement added successfully";
		
	}

	@Override
	public String deleteAsvertisementById(int id) throws AdvertisementNotFoundException{
		Optional<AdvertisementEntity> entity=repo.findById(id);
		if(entity.isPresent()) {
			repo.deleteById(id);
			return "Advertisement deleted successfully";
		}
		else
		{
			throw new AdvertisementNotFoundException("Advertisement not found for the given id");
		}
	}

}
