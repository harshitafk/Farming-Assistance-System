package com.cg.fas.farmingtipsservice.service;

import java.util.List;

import com.cg.fas.farmingtipsservice.dto.Tips;
import com.cg.fas.farmingtipsservice.exceptions.FarmingTipsNotFoundException;

public interface FarmingTipsService {
	
	public List<Tips> viewTips();
    public String addTips(Tips tips);
	public String updateTips(Long id, Tips tips) throws FarmingTipsNotFoundException;
	public String deleteTips(Long id) throws FarmingTipsNotFoundException;



}
