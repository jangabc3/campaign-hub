package com.campaignhub.campaign.repository;

import com.campaignhub.campaign.domain.Campaign;
import com.campaignhub.campaign.domain.CampaignStatus;
import java.util.List;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CampaignRepository extends JpaRepository<Campaign, Long> {

    List<Campaign> findByStatus(CampaignStatus status, Sort sort);
}

