package com.cg.consumerms.dto;

public class Advertisement {

	private int id;
	private String cropname;
	private int quantity;
	
	public Advertisement() {
		super();
	}
	public Advertisement(int cropid, String cropname, int quantity) {
		super();
		this.id = cropid;
		this.cropname = cropname;
		this.quantity = quantity;
	}
	public int getId() {
		return id;
	}
	public void setId(int cropid) {
		this.id = cropid;
	}
	public String getCropname() {
		return cropname;
	}
	public void setCropname(String cropname) {
		this.cropname = cropname;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	@Override
	public String toString() {
		return "Advertisement [cropid=" + id + ", cropname=" + cropname + ", quantity=" + quantity + "]";
	}
	
	
}
