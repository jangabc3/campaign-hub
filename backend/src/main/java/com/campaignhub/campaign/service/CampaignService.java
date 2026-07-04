package com.campaignhub.campaign.service;

import com.campaignhub.campaign.dto.CampaignResponseDto;
import java.time.LocalDate;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class CampaignService {

    public List<CampaignResponseDto> findCampaigns() {
        return List.of(
                new CampaignResponseDto(1L, "Seongsu Brunch Cafe Campaign", "Ove Morning", "Brunch meal for two", LocalDate.of(2026, 7, 14), "https://images.unsplash.com/photo-1554118811-1e0d58224f24", "Seoul Seongdong-gu", "Blog", "Restaurant"),
                new CampaignResponseDto(2L, "Haeundae Hotel Stay Campaign", "Blue Stay", "One-night ocean view room", LocalDate.of(2026, 7, 20), "https://images.unsplash.com/photo-1566073771259-6a8506099945", "Busan Haeundae-gu", "Instagram", "Stay"),
                new CampaignResponseDto(3L, "Jeju Citrus Dessert Cafe Campaign", "Citrus Table", "Dessert set and two drinks", LocalDate.of(2026, 7, 24), "https://images.unsplash.com/photo-1551024506-0bccd828d307", "Jeju-si", "Blog", "Cafe"),
                new CampaignResponseDto(4L, "Gangnam Personal Color Campaign", "Tone and Mood", "Personal color consulting voucher", LocalDate.of(2026, 7, 28), "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9", "Seoul Gangnam-gu", "Instagram", "Beauty")
        );
    }
}
