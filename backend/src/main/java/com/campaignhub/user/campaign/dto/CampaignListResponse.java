package com.campaignhub.user.campaign.dto;

import com.campaignhub.campaign.domain.Campaign;
import java.time.LocalDate;

public record CampaignListResponse(
        Long id,
        String title,
        String companyName,
        String benefit,
        LocalDate recruitEndDate,
        String thumbnailUrl,
        String region,
        String platform,
        String category,
        int viewCount,
        int favoriteCount
) {

    public static CampaignListResponse from(Campaign campaign) {
        return new CampaignListResponse(
                campaign.getId(),
                campaign.getTitle(),
                campaign.getCompanyName(),
                campaign.getBenefit(),
                campaign.getRecruitEndDate(),
                campaign.getThumbnailUrl(),
                campaign.getRegion(),
                campaign.getPlatform(),
                campaign.getCategory(),
                campaign.getViewCount(),
                campaign.getFavoriteCount()
        );
    }
}

