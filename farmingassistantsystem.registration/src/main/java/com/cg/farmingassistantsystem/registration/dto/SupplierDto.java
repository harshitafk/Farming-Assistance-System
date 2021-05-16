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
@Table(name = "supplier")
public class SupplierDto {

	@Id
	@Column(name = "supplierid", length = 30)
	@NotNull(message = "supplierid is mandatory")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "supplierid_generator")
	@SequenceGenerator(name = "supplierid_generator", initialValue = 7779, allocationSize = 1, sequenceName = "supplierid_seq")
	private long supplierid;

	@Column(name = "suppliername", length = 30)
	@NotNull(message = "suppliername is mandatory")
	private String suppliername;

	@Column(name = "supplierpassword", length = 30)
	@NotNull(message = "supplierpassword is mandatory")
	private String supplierpassword;

	@Column(name = "supplieraddress", length = 30)
	@NotNull(message = "supplieraddress is mandatory")
	private String supplieraddress;

	@Column(name = "supplierphoneno", length = 30)
	@NotNull(message = "supplierphoneno is mandatory")
	private String supplierphoneno;

	@Column(name = "supplierusername", length = 30)
	@NotNull(message = "supplierusername is mandatory")
	private String supplierusername;

	public SupplierDto(@NotNull(message = "supplierid is mandatory") long supplierid,
			@NotNull(message = "suppliername is mandatory") String suppliername,
			@NotNull(message = "supplierpassword is mandatory") String supplierpassword,
			@NotNull(message = "supplieraddress is mandatory") String supplieraddress,
			@NotNull(message = "supplierphoneno is mandatory") String supplierphoneno,
			@NotNull(message = "supplierusername is mandatory") String supplierusername) {
		super();
		this.supplierid = supplierid;
		this.suppliername = suppliername;
		this.supplierpassword = supplierpassword;
		this.supplieraddress = supplieraddress;
		this.supplierphoneno = supplierphoneno;
		this.supplierusername = supplierusername;
	}

	public SupplierDto() {

	}

	public long getSupplierid() {
		return supplierid;
	}

	public void setSupplierid(long supplierid) {
		this.supplierid = supplierid;
	}

	public String getSuppliername() {
		return suppliername;
	}

	public void setSuppliername(String suppliername) {
		this.suppliername = suppliername;
	}

	public String getSupplierpassword() {
		return supplierpassword;
	}

	public void setSupplierpassword(String supplierpassword) {
		this.supplierpassword = supplierpassword;
	}

	public String getSupplieraddress() {
		return supplieraddress;
	}

	public void setSupplieraddress(String supplieraddress) {
		this.supplieraddress = supplieraddress;
	}

	public String getSupplierphoneno() {
		return supplierphoneno;
	}

	public void setSupplierphoneno(String supplierphoneno) {
		this.supplierphoneno = supplierphoneno;
	}

	public String getSupplierusername() {
		return supplierusername;
	}

	public void setSupplierusername(String supplierusername) {
		this.supplierusername = supplierusername;
	}

	@Override
	public String toString() {
		return "SupplierDto [supplierid=" + supplierid + ", suppliername=" + suppliername + ", supplierpassword="
				+ supplierpassword + ", supplieraddress=" + supplieraddress + ", supplierphoneno=" + supplierphoneno
				+ ", supplierusername=" + supplierusername + "]";
	}

}
