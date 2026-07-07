package com.campaignhub.campaign.service;

import com.campaignhub.campaign.dto.CampaignResponseDto;
import java.time.LocalDate;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class CampaignService {

    public List<CampaignResponseDto> findCampaigns() {
        return List.of(
                new CampaignResponseDto(1L, "감성 가득한 브런치 카페", "브런치온", "브런치 2인 식사권", LocalDate.of(2026, 7, 14), "https://images.unsplash.com/photo-1554118811-1e0d58224f24", "서울 성동구", "Blog", "브런치", 5, 123),
                new CampaignResponseDto(2L, "비건 스킨케어 제품 체험단", "비건뷰티랩", "비건 스킨케어 세트", LocalDate.of(2026, 7, 12), "https://images.unsplash.com/photo-1596462502278-27bfdc403348", "전국 배송", "Instagram", "스킨케어", 10, 98),
                new CampaignResponseDto(3L, "제주 2박 3일 여행 체험단", "제주로드", "제주 숙박 및 투어 지원", LocalDate.of(2026, 7, 11), "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", "제주 제주시", "YouTube", "여행", 3, 76),
                new CampaignResponseDto(4L, "헬스장 1일 이용권 체험단", "핏앤짐", "헬스장 1일 이용권", LocalDate.of(2026, 7, 9), "https://images.unsplash.com/photo-1534438327276-14e5300c3a48", "서울 강남구", "TikTok", "헬스", 2, 45)
        );
    }
}
