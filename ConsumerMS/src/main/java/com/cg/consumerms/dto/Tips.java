package com.cg.consumerms.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import org.springframework.stereotype.Component;


public class Tips {
	
	private Long id;
	

	private String tipsMessage;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTipsMessage() {
		return tipsMessage;
	}

	public void setTipsMessage(String tipsMessage) {
		this.tipsMessage = tipsMessage;
	}

	@Override
	public String toString() {
		return "Tips [id=" + id + ", tipsMessage=" + tipsMessage + "]";
	}

	public Tips(Long id, String tipsMessage) {
		super();
		this.id = id;
		this.tipsMessage = tipsMessage;
	}

	public Tips() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
	
}

