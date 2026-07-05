package com.campaignhub.admin.campaign.controller;

import com.campaignhub.admin.campaign.dto.CampaignAdminResponse;
import com.campaignhub.admin.campaign.dto.CampaignCreateRequest;
import com.campaignhub.admin.campaign.dto.CampaignUpdateRequest;
import com.campaignhub.admin.campaign.service.CampaignAdminService;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin/campaigns")
public class CampaignAdminController {

    private final CampaignAdminService campaignAdminService;

    public CampaignAdminController(CampaignAdminService campaignAdminService) {
        this.campaignAdminService = campaignAdminService;
    }

    @GetMapping
    public List<CampaignAdminResponse> findAll() {
        return campaignAdminService.findAll();
    }

    @GetMapping("/{campaignId}")
    public CampaignAdminResponse findById(@PathVariable Long campaignId) {
        return campaignAdminService.findById(campaignId);
    }

    @PostMapping
    public ResponseEntity<CampaignAdminResponse> create(@Valid @RequestBody CampaignCreateRequest request) {
        CampaignAdminResponse response = campaignAdminService.create(request);

        return ResponseEntity
                .status(201)
                .header("Location", "/api/admin/campaigns/" + response.id())
                .body(response);
    }

    @PutMapping("/{campaignId}")
    public CampaignAdminResponse update(
            @PathVariable Long campaignId,
            @Valid @RequestBody CampaignUpdateRequest request
    ) {
        return campaignAdminService.update(campaignId, request);
    }

    @DeleteMapping("/{campaignId}")
    public ResponseEntity<Void> delete(@PathVariable Long campaignId) {
        campaignAdminService.delete(campaignId);
        return ResponseEntity.noContent().build();
    }
}

