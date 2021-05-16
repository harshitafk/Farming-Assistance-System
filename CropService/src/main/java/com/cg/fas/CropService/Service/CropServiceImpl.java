package com.cg.fas.CropService.Service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.cg.fas.CropService.Exception.CropException;
import com.cg.fas.CropService.Model.BuyerCrops;
import com.cg.fas.CropService.Model.Crop;
import com.cg.fas.CropService.Repository.BuyerCropsRepository;
import com.cg.fas.CropService.Repository.CropRepository;

@Service
public class CropServiceImpl implements CropService {

	
	
	@Autowired
	private CropRepository cropRepository;
	@Autowired
	private BuyerCropsRepository buyerRepo;
	
	
	public List<Crop> getAllCrops(){
		List<Crop>crops= new ArrayList<>();
		cropRepository.findAll().forEach(crops::add);
		return crops;
	}
	@Override
	public boolean addCrops(List<Crop> crop) {
		cropRepository.saveAll(crop);
		return true;
	}
	
	@Override
	public void removeCrop(int farmerId) {
			cropRepository.deleteById(farmerId);
	}
	
//	@Override
//	public void updateCrops(List<Crop> crop,int farmerId) throws CropException {
//	
//		List<Crop>crops= new ArrayList<>();
//		cropRepository.findAll().forEach(crops::add);
//		try {
//		if(cropRepository.existsById(farmerId)) {
//			cropRepository.deleteById(farmerId);
//			cropRepository.saveAll(crops);
//		}
//			else
//			{
//				throw new CropException("Crop not found");
//			}
//		}catch(Exception ex) {
//			
//		}
//		}
//		
//	
	@Override
	public Crop getCrop(int farmerId) {
		List<Crop> crop=new ArrayList<>();
		crop=getAllCrops();
		
		for(Crop c: crop) {
			if(c.getFarmerId()==farmerId) {
				return c;
			}
		}
		return null;
	}
	@Override
	public void addCropstoBuyer( int farmerId) {
		List<Crop> crop=new ArrayList<>();
		BuyerCrops buyCrop=new BuyerCrops();
		int id=0;
		String name="";
		Long price=(long) 0;
		Long quantity=(long) 0;
		crop=getAllCrops();
		for(Crop c:crop) {
			if(c.getFarmerId()==farmerId)
			{
				id=c.getFarmerId();
				name=c.getCropName();
				price=c.getCropPrice();
				quantity=c.getCropQuantity();
				cropRepository.delete(c);
			}
		}
		buyCrop.setFarmerId(id);
		buyCrop.setCropName(name);
		buyCrop.setCropPrice(price);
		buyCrop.setCropQuantity(quantity);
		
	buyerRepo.save(buyCrop);
	
	}
	
	@Override
	public List<BuyerCrops> getAll(){
		List<BuyerCrops>buyCrops= new ArrayList<>();
		buyerRepo.findAll().forEach(buyCrops::add);
		return buyCrops;
	}
	
	
}
