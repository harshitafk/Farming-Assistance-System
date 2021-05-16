/****************************************************************************************************************************
 - File Name        : Complaint Service DTO
 - Author           : Harshit Joshi
 - Creation Date    : 15-08-2020
 - Description      : This is an entity class that is used to map the data in the database.
  ****************************************************************************************************************************/ 



package com.cg.farmingassistancesystem.complaintservice.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="complaintservice")
public class ComplaintDTO {

	@Id
	@Column(name="complaint_id",length=30)
	@NotNull(message="complaint_id is mandatory")
	@GeneratedValue(strategy = GenerationType.SEQUENCE,generator="complaintid_generator")
	@SequenceGenerator(name ="complaintid_generator",initialValue=4,allocationSize=1,sequenceName="complaintid_seq" )
	private long complaint_id;
	
	@Column(name="farmer_id",length=20)
	@NotNull(message="farmer_id is mandatory")
	private long farmer_id;
	
	@NotNull(message="complaint_message is mandatory")
	@NotBlank(message="complaint_message is mandatory")
	@Column(name="complaint_message",length=150)
	private String complaint_message;
	
	@Column(name="complaint_status",length=30)
	@NotNull(message="complaint_status is mandatory")
	private boolean complaint_status;
	
	

	public ComplaintDTO(@NotNull(message = "complaint_id is mandatory") long complaint_id,
			@NotNull(message = "farmer_id is mandatory") long farmer_id,
			@NotNull(message = "complaint_message is mandatory") @NotBlank(message = "complaint_message is mandatory") String complaint_message,
			@NotNull(message = "complaint_status is mandatory") boolean complaint_status) {
		super();
		this.complaint_id = complaint_id;
		this.farmer_id = farmer_id;
		this.complaint_message = complaint_message;
		this.complaint_status = complaint_status;
	}

	public long getComplaint_id() {
		return complaint_id;
	}

	public void setComplaint_id(long complaint_id) {
		this.complaint_id = complaint_id;
	}

	public long getFarmer_id() {
		return farmer_id;
	}

	public void setFarmer_id(long farmer_id) {
		this.farmer_id = farmer_id;
	}

	public String getComplaint_message() {
		return complaint_message;
	}

	public void setComplaint_message(String complaint_message) {
		this.complaint_message = complaint_message;
	}

	public boolean isComplaint_status() {
		return complaint_status;
	}

	public void setComplaint_status(boolean complaint_status) {
		this.complaint_status = complaint_status;
	}

	@Override
	public String toString() {
		return "ComplaintDTO [complaint_id=" + complaint_id + ", farmer_id=" + farmer_id
				+ ", complaint_message=" + complaint_message + ", complaint_status=" + complaint_status + "]";
	}
	
	
}
