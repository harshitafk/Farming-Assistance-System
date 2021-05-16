package com.cg.fas.farmingtipsservice.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.fas.farmingtipsservice.dao.FarmingTipsRepository;
import com.cg.fas.farmingtipsservice.dao.TipsEntity;
import com.cg.fas.farmingtipsservice.dto.Tips;
import com.cg.fas.farmingtipsservice.exceptions.FarmingTipsNotFoundException;


@Service
public class FarmingTipsServiceImpl implements FarmingTipsService{
	
	@Autowired
	FarmingTipsRepository repository;

	public List<Tips> viewTips() {
		List<TipsEntity> entityList=repository.findAll();
		List<Tips> tipsList = new ArrayList<>();
		for (TipsEntity entity : entityList) {
			Tips tips = new Tips();
			tips.setId(entity.getId());
			tips.setTipsMessage(entity.getTipsMessage());
			
			tipsList.add(tips);

		}
		return tipsList;
	}

	

	@Override
	public String addTips(Tips tips) {
		// TODO Auto-generated method stub
		TipsEntity entity = new TipsEntity();
		entity.setTipsMessage(tips.getTipsMessage());
		
		repository.saveAndFlush(entity);		
		String msg = "Tips added successfully with Id "+entity.getId();
		return msg;

	}

	@Override
	public String updateTips(Long id,Tips tips) throws FarmingTipsNotFoundException{
		
	    Optional<TipsEntity> optional =	repository.findById(id);
	    TipsEntity entity = optional.get();
		entity.setTipsMessage(tips.getTipsMessage());
		
		repository.save(entity);
		return "Tips updated successfully!";

	}

	@Override
	public String deleteTips(Long id) throws FarmingTipsNotFoundException{
		
		repository.deleteById(id);
		return "Tips record deleted successfully!";


	}

}
