package com.campaignhub.user.campaign.dto;

import com.campaignhub.campaign.domain.Campaign;
import java.time.LocalDate;

public record CampaignDetailResponse(
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
        int favoriteCount
) {

    public static CampaignDetailResponse from(Campaign campaign) {
        return new CampaignDetailResponse(
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
                campaign.getFavoriteCount()
        );
    }
}

