package com.cg.fas.CropService.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "buycrops")
public class BuyerCrops {

	@Id
	@Column(name = "farmerId", length = 30)
	@NotNull(message = "farmerId is mandatory")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "farmerId_generator")
	@SequenceGenerator(name = "farmerId_generator", initialValue = 1112, allocationSize = 1, sequenceName = "farmerId_seq")
	private int farmerId;

	@Column(name = "cropName", length = 30)
	@NotNull(message = "cropName is mandatory")
	private String cropName;

	@Column(name = "cropPrice", length = 30)
	@NotNull(message = "cropPrice is mandatory")
	private long cropPrice;

	@Column(name = "cropQuantity", length = 30)
	@NotNull(message = "cropQuantity is mandatory")
	private long cropQuantity;

	public BuyerCrops(@NotNull(message = "farmerId is mandatory") int farmerId,
			@NotNull(message = "cropName is mandatory") String cropName,
			@NotNull(message = "cropPrice is mandatory") long cropPrice,
			@NotNull(message = "cropQuantity is mandatory") long cropQuantity) {
		super();
		this.farmerId = farmerId;
		this.cropName = cropName;
		this.cropPrice = cropPrice;
		this.cropQuantity = cropQuantity;
	}

	public BuyerCrops() {

	}

	public int getFarmerId() {
		return farmerId;
	}

	public void setFarmerId(int farmerId) {
		this.farmerId = farmerId;
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

}
