package com.cg.fas.CropService.Service;

import java.util.List;

import com.cg.fas.CropService.Exception.CropException;
import com.cg.fas.CropService.Model.BuyerCrops;
import com.cg.fas.CropService.Model.Crop;

public interface CropService {

	public List<Crop> getAllCrops();
	public boolean addCrops(List<Crop> crop);
	public void removeCrop(int farmerId);
//	public void updateCrops(List<Crop> crop,int farmerId)throws CropException;
	public Crop getCrop(int farmerId);
	public void addCropstoBuyer( int farmerId);
	public List<BuyerCrops> getAll();
	
	
}
