package com.campaignhub.admin.campaign.service;

import com.campaignhub.admin.campaign.dto.CampaignAdminResponse;
import com.campaignhub.admin.campaign.dto.CampaignCreateRequest;
import com.campaignhub.admin.campaign.dto.CampaignUpdateRequest;
import com.campaignhub.campaign.domain.Campaign;
import com.campaignhub.campaign.repository.CampaignRepository;
import jakarta.transaction.Transactional;
import java.util.List;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class CampaignAdminService {

    private final CampaignRepository campaignRepository;

    public CampaignAdminService(CampaignRepository campaignRepository) {
        this.campaignRepository = campaignRepository;
    }

    public List<CampaignAdminResponse> findAll() {
        return campaignRepository.findAll(Sort.by(Sort.Direction.DESC, "createdAt"))
                .stream()
                .map(CampaignAdminResponse::from)
                .toList();
    }

    public CampaignAdminResponse findById(Long campaignId) {
        return CampaignAdminResponse.from(findCampaign(campaignId));
    }

    @Transactional
    public CampaignAdminResponse create(CampaignCreateRequest request) {
        validateRecruitPeriod(request.recruitStartDate(), request.recruitEndDate());
        Campaign campaign = campaignRepository.save(request.toEntity());
        return CampaignAdminResponse.from(campaign);
    }

    @Transactional
    public CampaignAdminResponse update(Long campaignId, CampaignUpdateRequest request) {
        validateRecruitPeriod(request.recruitStartDate(), request.recruitEndDate());

        Campaign campaign = findCampaign(campaignId);
        campaign.update(
                request.title(),
                request.companyName(),
                request.benefit(),
                request.description(),
                request.recruitStartDate(),
                request.recruitEndDate(),
                request.recruitCount(),
                request.applyUrl(),
                request.thumbnailUrl(),
                request.region(),
                request.platform(),
                request.category(),
                request.status()
        );
        return CampaignAdminResponse.from(campaign);
    }

    @Transactional
    public void delete(Long campaignId) {
        campaignRepository.delete(findCampaign(campaignId));
    }

    private Campaign findCampaign(Long campaignId) {
        return campaignRepository.findById(campaignId)
                .orElseThrow(() -> new IllegalArgumentException("체험단을 찾을 수 없습니다."));
    }

    private void validateRecruitPeriod(java.time.LocalDate startDate, java.time.LocalDate endDate) {
        if (endDate.isBefore(startDate)) {
            throw new IllegalArgumentException("모집 마감일은 모집 시작일보다 빠를 수 없습니다.");
        }
    }
}

