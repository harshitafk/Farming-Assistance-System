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
@Table(name = "admin")
public class AdminDto {

	@Id
	@Column(name = "adminid", length = 30)
	@NotNull(message = "adminid is mandatory")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "adminid_generator")
	@SequenceGenerator(name = "adminid_generator", initialValue = 1112, allocationSize = 1, sequenceName = "adminid_seq")
	private long adminid;

	@Column(name = "adminusername", length = 30)
	@NotNull(message = "adminusername is mandatory")
	private String adminusername;

	@Column(name = "adminpassword", length = 30)
	@NotNull(message = "adminpassword is mandatory")
	private String adminpassword;

	public AdminDto(@NotNull(message = "adminid is mandatory") long adminid,
			@NotNull(message = "adminusername is mandatory") String adminusername,
			@NotNull(message = "adminpassword is mandatory") String adminpassword) {
		super();
		this.adminid = adminid;
		this.adminusername = adminusername;
		this.adminpassword = adminpassword;
	}

	public AdminDto() {

	}

	public long get() {
		return adminid;
	}

	public void setadminid(long adminid) {
		this.adminid = adminid;
	}

	public String getAdminusername() {
		return adminusername;
	}

	public void setAdminusername(String adminusername) {
		this.adminusername = adminusername;
	}

	public String getAdminpassword() {
		return adminpassword;
	}

	public void setAdminpassword(String adminpassword) {
		this.adminpassword = adminpassword;
	}

	@Override
	public String toString() {
		return "AdminDto [adminid=" + adminid + ", adminusername=" + adminusername + ", adminpassword="
				+ adminpassword + "]";
	}

}
