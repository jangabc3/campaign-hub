package com.campaignhub.campaign.dto;

import java.time.LocalDate;

public record CampaignResponseDto(
        Long id,
        String title,
        String companyName,
        String benefit,
        LocalDate recruitEndDate,
        String thumbnailUrl,
        String region,
        String platform,
        String category,
        int recruitCount,
        int applicants
) {
}
