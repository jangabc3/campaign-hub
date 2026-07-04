package com.campaignhub.user.campaign.service;

import com.campaignhub.campaign.domain.Campaign;
import com.campaignhub.campaign.domain.CampaignStatus;
import com.campaignhub.campaign.repository.CampaignRepository;
import com.campaignhub.user.campaign.dto.CampaignDetailResponse;
import com.campaignhub.user.campaign.dto.CampaignListResponse;
import jakarta.transaction.Transactional;
import java.util.List;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class CampaignUserService {

    private final CampaignRepository campaignRepository;

    public CampaignUserService(CampaignRepository campaignRepository) {
        this.campaignRepository = campaignRepository;
    }

    public List<CampaignListResponse> findOpenCampaigns(String sort) {
        return campaignRepository.findByStatus(CampaignStatus.OPEN, toSort(sort))
                .stream()
                .map(CampaignListResponse::from)
                .toList();
    }

    @Transactional
    public CampaignDetailResponse findCampaign(Long campaignId) {
        Campaign campaign = campaignRepository.findById(campaignId)
                .filter(found -> found.getStatus() == CampaignStatus.OPEN)
                .orElseThrow(() -> new IllegalArgumentException("체험단을 찾을 수 없습니다."));

        campaign.increaseViewCount();
        return CampaignDetailResponse.from(campaign);
    }

    private Sort toSort(String sort) {
        return switch (sort) {
            case "deadline" -> Sort.by(Sort.Direction.ASC, "recruitEndDate");
            case "views" -> Sort.by(Sort.Direction.DESC, "viewCount");
            case "popular" -> Sort.by(Sort.Direction.DESC, "favoriteCount", "viewCount");
            default -> Sort.by(Sort.Direction.DESC, "createdAt");
        };
    }
}

