/****************************************************************************************************************************
 - File Name        : Complaint Service DAO
 - Author           : Harshit Joshi
 - Creation Date    : 15-08-2020
 - Description      : This is a repository class used to use the database for Complaint Services.
  ****************************************************************************************************************************/ 

package com.cg.farmingassistancesystem.complaintservice.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.farmingassistancesystem.complaintservice.dto.ComplaintDTO;


@Repository
public interface ComplaintDAO extends JpaRepository<ComplaintDTO,Long> {

}
