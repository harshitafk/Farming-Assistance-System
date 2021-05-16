package com.cg.fas.farmingtipsservice.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.springframework.stereotype.Component;

@Component 
public class Tips {
	
	private Long id;
	
	@NotBlank(message="tipsMessage is mandatory")
	@NotNull(message="tipsMessage is mandatory")
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

	public Tips(Long id,
			@NotBlank(message = "tipsMessage is mandatory") @NotNull(message = "tipsMessage is mandatory") String tipsMessage) {
		super();
		this.id = id;
		this.tipsMessage = tipsMessage;
	}

	public Tips() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	

}