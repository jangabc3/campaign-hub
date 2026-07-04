package com.campaignhub.campaign.domain;

import com.campaignhub.global.common.BaseTimeEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.time.LocalDate;

@Entity
public class Campaign extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 120)
    private String title;

    @Column(nullable = false, length = 80)
    private String companyName;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String benefit;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false)
    private LocalDate recruitStartDate;

    @Column(nullable = false)
    private LocalDate recruitEndDate;

    @Column(nullable = false)
    private int recruitCount;

    @Column(nullable = false, length = 500)
    private String applyUrl;

    @Column(length = 500)
    private String thumbnailUrl;

    @Column(nullable = false, length = 40)
    private String region;

    @Column(nullable = false, length = 40)
    private String platform;

    @Column(nullable = false, length = 40)
    private String category;

    @Column(nullable = false)
    private int viewCount;

    @Column(nullable = false)
    private int favoriteCount;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private CampaignStatus status;

    protected Campaign() {
    }

    public Campaign(
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
            String category
    ) {
        this.title = title;
        this.companyName = companyName;
        this.benefit = benefit;
        this.description = description;
        this.recruitStartDate = recruitStartDate;
        this.recruitEndDate = recruitEndDate;
        this.recruitCount = recruitCount;
        this.applyUrl = applyUrl;
        this.thumbnailUrl = thumbnailUrl;
        this.region = region;
        this.platform = platform;
        this.category = category;
        this.status = CampaignStatus.OPEN;
    }

    public void update(
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
            CampaignStatus status
    ) {
        this.title = title;
        this.companyName = companyName;
        this.benefit = benefit;
        this.description = description;
        this.recruitStartDate = recruitStartDate;
        this.recruitEndDate = recruitEndDate;
        this.recruitCount = recruitCount;
        this.applyUrl = applyUrl;
        this.thumbnailUrl = thumbnailUrl;
        this.region = region;
        this.platform = platform;
        this.category = category;
        this.status = status;
    }

    public void increaseViewCount() {
        this.viewCount++;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getCompanyName() {
        return companyName;
    }

    public String getBenefit() {
        return benefit;
    }

    public String getDescription() {
        return description;
    }

    public LocalDate getRecruitStartDate() {
        return recruitStartDate;
    }

    public LocalDate getRecruitEndDate() {
        return recruitEndDate;
    }

    public int getRecruitCount() {
        return recruitCount;
    }

    public String getApplyUrl() {
        return applyUrl;
    }

    public String getThumbnailUrl() {
        return thumbnailUrl;
    }

    public String getRegion() {
        return region;
    }

    public String getPlatform() {
        return platform;
    }

    public String getCategory() {
        return category;
    }

    public int getViewCount() {
        return viewCount;
    }

    public int getFavoriteCount() {
        return favoriteCount;
    }

    public CampaignStatus getStatus() {
        return status;
    }
}

