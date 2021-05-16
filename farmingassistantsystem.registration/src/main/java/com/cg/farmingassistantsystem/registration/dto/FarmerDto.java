package com.cg.farmingassistantsystem.registration.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "farmer")
public class FarmerDto {

	@Id
	@Column(name = "farmerid", length = 30)
	@NotNull(message = "farmerid is mandatory")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "farmerid_generator")
	@SequenceGenerator(name = "farmerid_generator", initialValue = 8972, allocationSize = 1, sequenceName = "farmerid_seq")
	private long farmerid;

	@Column(name = "farmername", length = 30)
	@NotNull(message = "farmername is mandatory")
	private String farmername;

	@Column(name = "farmerpassword", length = 30)
	@NotNull(message = "farmerpassword is mandatory")
	private String farmerpassword;

	@Column(name = "farmeraddress", length = 30)
	@NotNull(message = "farmeraddress is mandatory")
	private String farmeraddress;

	@Column(name = "farmerphoneno", length = 30)
	@NotNull(message = "farmerphoneno is mandatory")
	private String farmerphoneno;

	@Column(name = "farmerusername", length = 30)
	@NotNull(message = "farmerusername is mandatory")
	private String farmerusername;

	public FarmerDto(@NotNull(message = "farmerid is mandatory") long farmerid,
			@NotNull(message = "farmername is mandatory") String farmername,
			@NotNull(message = "farmerpassword is mandatory") String farmerpassword,
			@NotNull(message = "farmeraddress is mandatory") String farmeraddress,
			@NotNull(message = "farmerphoneno is mandatory") String farmerphoneno,
			@NotNull(message = "farmerusername is mandatory") String farmerusername) {
		super();
		this.farmerid = farmerid;
		this.farmername = farmername;
		this.farmerpassword = farmerpassword;
		this.farmeraddress = farmeraddress;
		this.farmerphoneno = farmerphoneno;
		this.farmerusername = farmerusername;
	}

	public FarmerDto() {

	}

	public long getFarmerid() {
		return farmerid;
	}

	public void setFarmerid(long farmerid) {
		this.farmerid = farmerid;
	}

	public String getFarmername() {
		return farmername;
	}

	public void setFarmername(String farmername) {
		this.farmername = farmername;
	}

	public String getFarmerpassword() {
		return farmerpassword;
	}

	public void setFarmerpassword(String farmerpassword) {
		this.farmerpassword = farmerpassword;
	}

	public String getFarmeraddress() {
		return farmeraddress;
	}

	public void setFarmeraddress(String farmeraddress) {
		this.farmeraddress = farmeraddress;
	}

	public String getFarmerphoneno() {
		return farmerphoneno;
	}

	public void setFarmerphoneno(String farmerphoneno) {
		this.farmerphoneno = farmerphoneno;
	}

	public String getFarmerusername() {
		return farmerusername;
	}

	public void setFarmerusername(String farmerusername) {
		this.farmerusername = farmerusername;
	}

	@Override
	public String toString() {
		return "FarmerDto [farmerid=" + farmerid + ", farmername=" + farmername + ", farmerpassword=" + farmerpassword
				+ ", farmeraddress=" + farmeraddress + ", farmerphoneno=" + farmerphoneno + ", farmerusername="
				+ farmerusername + "]";
	}

}
