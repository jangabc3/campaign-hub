package com.campaignhub.admin.campaign.dto;

import com.campaignhub.campaign.domain.Campaign;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDate;

public record CampaignCreateRequest(
        @NotBlank String title,
        @NotBlank String companyName,
        @NotBlank String benefit,
        @NotBlank String description,
        @NotNull @FutureOrPresent LocalDate recruitStartDate,
        @NotNull @FutureOrPresent LocalDate recruitEndDate,
        @Min(1) int recruitCount,
        @NotBlank String applyUrl,
        String thumbnailUrl,
        @NotBlank String region,
        @NotBlank String platform,
        @NotBlank String category
) {

    public Campaign toEntity() {
        return new Campaign(
                title,
                companyName,
                benefit,
                description,
                recruitStartDate,
                recruitEndDate,
                recruitCount,
                applyUrl,
                thumbnailUrl,
                region,
                platform,
                category
        );
    }
}

