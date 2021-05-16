package com.cg.consumerms.dto;

public class BuyerCrops {

	
	private int farmerId;
	private String cropName;
	private long cropPrice;
	private long cropQuantity;
	
	
	
	public BuyerCrops() {
		super();
		// TODO Auto-generated constructor stub
	}
	public BuyerCrops( int farmerId,String cropName, long cropPrice, long cropQuantity) {
		super();
		this.farmerId=farmerId;
		this.cropName = cropName;
		this.cropPrice = cropPrice;
		this.cropQuantity = cropQuantity;
	}
	
	
	public String getCropName() {
		return cropName;
	}
	public void setCropName(String cropName) {
		this.cropName = cropName;
	}
	public long getCropPrice() {
		return cropPrice;
	}
	public void setCropPrice(long cropPrice) {
		this.cropPrice = cropPrice;
	}
	public long getCropQuantity() {
		return cropQuantity;
	}
	public void setCropQuantity(long cropQuantity) {
		this.cropQuantity = cropQuantity;
	}
	public int getFarmerId() {
		return farmerId;
	}
	public void setFarmerId(int farmerId) {
		this.farmerId = farmerId;
	}
	@Override
	public String toString() {
		return "BuyerCrops [farmerId=" + farmerId + ", cropName=" + cropName + ", cropPrice=" + cropPrice
				+ ", cropQuantity=" + cropQuantity + "]";
	}
}
