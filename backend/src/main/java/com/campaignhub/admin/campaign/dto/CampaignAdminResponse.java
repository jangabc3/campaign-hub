package com.campaignhub.admin.campaign.dto;

import com.campaignhub.campaign.domain.Campaign;
import com.campaignhub.campaign.domain.CampaignStatus;
import java.time.LocalDate;

public record CampaignAdminResponse(
        Long id,
        String title,
        String companyName,
        String benefit,
        String description,
        LocalDate recruitStartDate,
        LocalDate recruitEndDate,
        int recruitCount,
        String applyUrl,
        String thumbnailUrl,
        String region,
        String platform,
        String category,
        int viewCount,
        int favoriteCount,
        CampaignStatus status
) {

    public static CampaignAdminResponse from(Campaign campaign) {
        return new CampaignAdminResponse(
                campaign.getId(),
                campaign.getTitle(),
                campaign.getCompanyName(),
                campaign.getBenefit(),
                campaign.getDescription(),
                campaign.getRecruitStartDate(),
                campaign.getRecruitEndDate(),
                campaign.getRecruitCount(),
                campaign.getApplyUrl(),
                campaign.getThumbnailUrl(),
                campaign.getRegion(),
                campaign.getPlatform(),
                campaign.getCategory(),
                campaign.getViewCount(),
                campaign.getFavoriteCount(),
                campaign.getStatus()
        );
    }
}

