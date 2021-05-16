package com.cg.fas.advertisementservice.dao;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

@Entity
@Table(name="advertisement")
@SequenceGenerator(name="seq", initialValue=14, allocationSize=100)
public class AdvertisementEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE ,generator="seq")
	private int id;
	@NotBlank(message="crop name can not be blank")
	@Size(min=3, message="crop name has atleast 3 character")
	private String cropname;
	@NotNull(message="quantity can not be null")
	@Positive(message="quantity should be greater than 0")
	private int quantity;
	
	public AdvertisementEntity() {
		super();
	}
	public AdvertisementEntity(int cropid, String cropname, int quantity) {
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
		return "AdvertisementEntity [cropid=" + id + ", cropname=" + cropname + ", quantity=" + quantity + "]";
	}
	

}
