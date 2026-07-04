package com.campaignhub.campaign.controller;

import com.campaignhub.campaign.dto.CampaignResponseDto;
import com.campaignhub.campaign.service.CampaignService;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/campaigns")
public class CampaignController {

    private final CampaignService campaignService;

    public CampaignController(CampaignService campaignService) {
        this.campaignService = campaignService;
    }

    @GetMapping
    public List<CampaignResponseDto> findCampaigns() {
        return campaignService.findCampaigns();
    }
}
