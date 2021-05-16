package com.cg.fas.CropService.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.fas.CropService.Model.BuyerCrops;
import com.cg.fas.CropService.Model.Crop;

public interface BuyerCropsRepository extends JpaRepository<BuyerCrops, Integer>{

}
