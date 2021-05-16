/****************************************************************************************************************************
 - File Name        : Complaint Service Main
 - Author           : Harshit Joshi
 - Creation Date    : 14-08-2020
 - Description      : This is a main class for Complaint services
  ****************************************************************************************************************************/

package com.cg.farmingassistancesystem.complaintservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.cg.farmingassistancesystem.complaintservice")
public class ComplaintserviceApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(ComplaintserviceApplication.class, args);
	}

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(ComplaintserviceApplication.class);
	}
}
