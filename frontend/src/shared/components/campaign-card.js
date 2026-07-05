export function createCampaignCard(campaign) {
  const tags = campaign.tags.map((tag) => `<span>${tag}</span>`).join("");

  return `
    <article class="campaign-card">
      <div class="campaign-card__image" style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.18)), url('${campaign.imageUrl}')">
        <span class="platform-badge">${campaign.platform}</span>
        <button type="button" class="wish-button" aria-label="${campaign.title} 찜하기">♡</button>
      </div>

      <div class="campaign-card__body">
        <h3>${campaign.title} <span class="new-dot">N</span></h3>

        <div class="campaign-card__tags" aria-label="체험단 태그">
          ${tags}
        </div>

        <div class="campaign-card__meta">
          <span class="type-pill">${campaign.benefit}</span>
          <strong>${campaign.dday}</strong>
          <span>신청 <em>${campaign.applicants}</em> / ${campaign.capacity}</span>
        </div>
      </div>
    </article>
  `;
}
