export function createCampaignCard(campaign) {
  const tags = (campaign.tags ?? []).map((tag) => `<span>${tag}</span>`).join("");
  const campaignType = campaign.type ?? campaign.benefit ?? "기타";
  const dday = campaign.dday?.replace("일 남음", "");
  const deadline = dday ? `<strong class="deadline-text"><em>${dday}</em><span>일 남음</span></strong>` : "";
  const applyCount = Number.isFinite(campaign.applicants) && Number.isFinite(campaign.capacity)
    ? `<span class="apply-count">신청 <em>${campaign.applicants}</em> / ${campaign.capacity}</span>`
    : "";
  const typeIcons = {
    방문형: "🏠",
    배송형: "📦",
    구매형: "🛍️",
    기타: "✨",
  };
  const typeIcon = typeIcons[campaignType] ?? "✨";

  return `
    <article class="campaign-card">
      <div class="campaign-card__image">
        <div class="campaign-card__image-media" style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.18)), url('${campaign.imageUrl}')"></div>
        <span class="platform-badge">${campaign.platform}</span>
        <button type="button" class="wish-button" aria-label="${campaign.title} 찜하기">♡</button>
      </div>

      <div class="campaign-card__body">
        <h3>${campaign.title} <span class="new-dot">N</span></h3>

        <div class="campaign-card__tags" aria-label="체험단 태그">
          ${tags}
        </div>

        <div class="campaign-card__meta">
          <span class="type-pill"><span class="type-pill__icon" aria-hidden="true">${typeIcon}</span>${campaignType}</span>
          ${deadline}
          ${applyCount}
        </div>
      </div>
    </article>
  `;
}
