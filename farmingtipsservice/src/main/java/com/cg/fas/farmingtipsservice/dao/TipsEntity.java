package com.cg.fas.farmingtipsservice.dao;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
	
	@Entity
	@Table(name="tips")
	public class TipsEntity {
		
		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		@Column(name="id")
		private Long id;
		
		@Column(name="tipsmessage")
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
			return "TipsEntity [id=" + id + ", tipsMessage=" + tipsMessage + "]";
		}

		public TipsEntity(Long id, String tipsMessage) {
			super();
			this.id = id;
			this.tipsMessage = tipsMessage;
		}

		public TipsEntity() {
			super();
			// TODO Auto-generated constructor stub
		}
		


	}


