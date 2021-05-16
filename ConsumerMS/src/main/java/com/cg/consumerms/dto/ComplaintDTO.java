package com.cg.consumerms.dto;


public class ComplaintDTO {
	
	
	private long complaint_id;
	private long farmer_id;
	private String complaint_message;
	private boolean complaint_status;
	
	
	
	public ComplaintDTO() {
		super();
	}

	
	public ComplaintDTO(long complaint_id, long farmer_id, String complaint_message, boolean complaint_status) {
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
