// 체험단 카드 한 개의 HTML 문자열을 만드는 함수입니다.
// 카드 UI를 함수로 분리해두면 나중에 React 컴포넌트로 옮기기 쉽습니다.
export function createCampaignCard(campaign) {
  return `
    <article class="campaign-card" style="--image-bg: ${campaign.imageColor}">
      <div class="campaign-card__image" aria-hidden="true">
        <div class="campaign-card__badges">
          <span class="badge">${campaign.platform}</span>
          <span class="badge badge--dday">${campaign.dday}</span>
        </div>
      </div>

      <div class="campaign-card__body">
        <h3>${campaign.title}</h3>
        <p class="campaign-card__description">${campaign.description}</p>

        <div class="campaign-card__tags" aria-label="체험단 정보">
          <span>${campaign.region}</span>
          <span>${campaign.category}</span>
          <span>${campaign.benefit}</span>
        </div>

        <div class="campaign-card__metrics">
          <span>신청 ${campaign.applicants}명 / 모집 ${campaign.capacity}명</span>
          <strong class="rate-badge">경쟁률 ${campaign.competitionRate}</strong>
        </div>

        <div class="campaign-card__actions">
          <button type="button" class="wish-button" aria-label="${campaign.title} 찜하기">☆</button>
          <button type="button" class="detail-button">상세보기</button>
        </div>
      </div>
    </article>
  `;
}
