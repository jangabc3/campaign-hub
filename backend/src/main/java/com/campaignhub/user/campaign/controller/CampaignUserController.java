package com.campaignhub.user.campaign.controller;

import com.campaignhub.user.campaign.dto.CampaignDetailResponse;
import com.campaignhub.user.campaign.dto.CampaignListResponse;
import com.campaignhub.user.campaign.service.CampaignUserService;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/campaigns")
public class CampaignUserController {

    private final CampaignUserService campaignUserService;

    public CampaignUserController(CampaignUserService campaignUserService) {
        this.campaignUserService = campaignUserService;
    }

    @GetMapping
    public List<CampaignListResponse> findAll(
            @RequestParam(defaultValue = "latest") String sort
    ) {
        return campaignUserService.findOpenCampaigns(sort);
    }

    @GetMapping("/{campaignId}")
    public CampaignDetailResponse findById(@PathVariable Long campaignId) {
        return campaignUserService.findCampaign(campaignId);
    }
}

