package com.cg.consumerms.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.cg.consumerms.dto.Advertisement;
import com.cg.consumerms.dto.ComplaintDTO;
import com.cg.consumerms.dto.Crop;
import com.cg.consumerms.dto.Tips;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/ConsumerCtrl")
public class ConsumerController {
	@Autowired
  RestTemplate restTemplate;

	public RestTemplate getRestTemplate() {
		return restTemplate;
	}
	

	public void setRestTemplate(RestTemplate restTemplate) {
		this.restTemplate = restTemplate;
	}
	
	
	@GetMapping("/getAdvertisements")
	public String getAllAdvertisements()
	{
//		Advertisement advertisement= restTemplate.getForObject("http://localhost:9001/advertisement", Advertisement.class);
//		//System.out.println(advertisement.length);
//		//ArrayList<Advertisement> list=new ArrayList<Advertisement>();
//		List list=Arrays.asList(advertisement);
//		list.add(advertisement);
//		return list;
//		//return advertisement;
		 HttpHeaders headers = new HttpHeaders();
	      headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
	      HttpEntity <String> entity = new HttpEntity<String>(headers);
	      
	      return restTemplate.exchange("http://localhost:8686/advertisement-service/advertisement", HttpMethod.GET, entity, String.class).getBody();
		
	}
	
	
	@PostMapping("/postAdvertisement")
	public String addAdvertisement(@RequestBody Advertisement advertisement)
	{
		String ad= restTemplate.postForObject("http://localhost:8686/advertisement-service/advertisement", advertisement, String.class);
		return ad;
		//.postForObject("http://localhost:9001/advertisement",advertisement,Advertisement.class);
	}
	
	@DeleteMapping("deleteAdvertisement/{id}")
	public String deleteAdvertisement(@PathVariable("id") int id) {
//	      HttpHeaders headers = new HttpHeaders();
//	      headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
//	      HttpEntity<Advertisement> entity = new HttpEntity<Advertisement>(headers);
//	      
//	      return restTemplate.exchange(
//	    		  "http://localhost:9001/advertisement"+id, HttpMethod.DELETE, entity, String.class).getBody();
		restTemplate.delete("http://localhost:8686/advertisement-service/advertisement/"+id);
		return "Advertisement Deleted successfully";
	}
	
	
	
	///////////////////////Tips Service////////////////////////////////////////////////
	
	
	@GetMapping("/viewAllTips")
	public String viewTips() {
		
		 HttpHeaders headers = new HttpHeaders();
         headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
         HttpEntity <String> entity = new HttpEntity<String>(headers);
        
         return restTemplate.exchange("http://localhost:8686/farmingtips-service/tips/viewTips", HttpMethod.GET, entity, String.class).getBody();
      
   }
	   @PostMapping("/addTip")
	    public String addTips(@RequestBody Tips tips)
	    {
	        String ad= restTemplate.postForObject("http://localhost:8686/farmingtips-service/tips/addTips", tips, String.class);
	        return ad;
	       
	    }
	   
	    @DeleteMapping("/deleteTip/{id}")
	    public String deleteTips(@PathVariable("id") Long id) {

	        restTemplate.delete("http://localhost:8686/farmingtips-service/tips/deleteTips/"+id);
	        return "Tips Deleted successfully";
	    }
	    
	    @PutMapping("/updateTip/{id}")
	    public String updateProduct(@PathVariable("id") String id, @RequestBody Tips tips) {
	       HttpHeaders headers = new HttpHeaders();
	       headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
	       HttpEntity<Tips> entity = new HttpEntity<Tips>(tips,headers);
	       
	       return restTemplate.exchange(
	          "http://localhost:8686/farmingtips-service/tips/updateTips/"+id, HttpMethod.PUT, entity, String.class).getBody();
	    }
	    
	    ////////////////Complaint Micro Service //////////////////////////////////////////////////////////////


  
	    
	    @GetMapping("/complaint")
		public String getAllComplaint() {
			
			 HttpHeaders headers = new HttpHeaders();
	         headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
	         HttpEntity <String> entity = new HttpEntity<String>(headers);
	        
	         return restTemplate.exchange("http://localhost:8084/complaintservice/getallcomplaint", HttpMethod.GET, entity, String.class).getBody();
	      
	   }
	    
	    @PostMapping("/addComplaint")
	    public String addComplaint(@RequestBody ComplaintDTO complaintdto)
	    {
	        String ad= restTemplate.postForObject("http://localhost:8084/complaintservice/addComplaint", complaintdto, String.class);
	        return ad;
	       
	    }
	   
	    @PutMapping("/updateComplaint/{complaintid}")
	    public String updateComplaint(@PathVariable("complaintid") long complaintid, @RequestBody ComplaintDTO complaintdto) {
	       HttpHeaders headers = new HttpHeaders();
	       headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
	       HttpEntity<ComplaintDTO> entity = new HttpEntity<ComplaintDTO>(complaintdto,headers);
	       
	       return restTemplate.exchange(
	          "http://localhost:8084/complaintservice/updatecomplaint/"+complaintid, HttpMethod.PUT, entity, String.class).getBody();
	    }




//////////////////////// Crop Service /////////////////////////////////////////////////////////////////////


@GetMapping("/getAllCrop")
public String getAllCrop() {
	
	 HttpHeaders headers = new HttpHeaders();
     headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
     HttpEntity <String> entity = new HttpEntity<String>(headers);
    
     return restTemplate.exchange("http://localhost:9085/get", HttpMethod.GET, entity, String.class).getBody();
  
}

@PostMapping("/addCrops")
public String addCrops(@RequestBody List<Crop> crop)
{
    String ad= restTemplate.postForObject("http://localhost:9085/add", crop, String.class);
    return ad;
   
}
//
//@PutMapping("/updateCrop/{farmerId}")
//public String updateCrop(@RequestBody List<Crop> crop) {
//   HttpHeaders headers = new HttpHeaders();
//   headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
//   Crop crops=new Crop();
//   crops.setFarmerId(crop.add(crops)
//   crops.setCropName(crop.in);
//   HttpEntity<Crop> entity = new HttpEntity<Crop>(crop,headers);
//   
//   return restTemplate.exchange(
//      "http://localhost:8080/updateCrop", HttpMethod.PUT, entity, String.class).getBody();
//}


@DeleteMapping("/deleteCrop/{id}")
public String deleteCrop(@PathVariable("id") Long id) {

    restTemplate.delete("http://localhost:9085/deleteCrop/"+id);
    return "Tips Deleted successfully";
    }



@PostMapping("/buyCrops/{farmerId}")
public String addCropsToBuyer(@RequestBody List<Crop> crop, @PathVariable int farmerId)
{
    String ad= restTemplate.postForObject("http://localhost:9085/buyCrops/"+farmerId, crop, String.class);
    return ad;
   
}

@GetMapping("/getAllCropFromBuyer")
public String getAllCropFromBuyer() {
	
	 HttpHeaders headers = new HttpHeaders();
     headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
     HttpEntity <String> entity = new HttpEntity<String>(headers);
    
     return restTemplate.exchange("http://localhost:9085/getBuyerAll", HttpMethod.GET, entity, String.class).getBody();
  
}


}
