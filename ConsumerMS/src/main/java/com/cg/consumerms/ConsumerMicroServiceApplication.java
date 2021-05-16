package com.cg.consumerms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.client.RestTemplate;


@SpringBootApplication
@ComponentScan(basePackages="com.cg.consumerms")
//@EnableDiscoveryClient
public class ConsumerMicroServiceApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(ConsumerMicroServiceApplication.class, args);
	}
	
	@Bean
	public RestTemplate getRestTemplate()
	{
		return new RestTemplate();
	}
	
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(ConsumerMicroServiceApplication.class);
	}

}
