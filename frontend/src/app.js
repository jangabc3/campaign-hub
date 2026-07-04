import { createCampaignCard } from "./shared/components/campaign-card.js";

// 1단계에서는 백엔드 API 대신 화면 확인용 더미 데이터를 사용합니다.
const campaigns = [
  {
    title: "성수 브런치 카페 체험단",
    description: "신상 브런치 메뉴를 맛보고 블로그 후기를 작성할 체험단을 모집합니다.",
    platform: "블로그",
    dday: "D-5",
    region: "서울 성동구",
    category: "맛집",
    benefit: "2인 식사권",
    applicants: 42,
    capacity: 10,
    competitionRate: "4.2:1",
    imageColor: "linear-gradient(135deg, #b9875f 0%, #e7c9a5 48%, #6fa7b8 100%)",
  },
  {
    title: "저자극 스킨케어 리뷰어 모집",
    description: "민감성 피부도 사용할 수 있는 기초 화장품 3종을 직접 경험해보세요.",
    platform: "인스타그램",
    dday: "D-2",
    region: "경기 성남시",
    category: "뷰티",
    benefit: "제품 제공",
    applicants: 68,
    capacity: 15,
    competitionRate: "4.5:1",
    imageColor: "linear-gradient(135deg, #f1e6dc 0%, #d8dee8 48%, #b7c0ce 100%)",
  },
  {
    title: "홈트 운동용품 유튜브 체험단",
    description: "집에서 쓰기 좋은 운동용품을 영상 콘텐츠로 소개할 크리에이터를 찾습니다.",
    platform: "유튜브",
    dday: "D-9",
    region: "부산 해운대구",
    category: "생활",
    benefit: "운동용품 세트",
    applicants: 25,
    capacity: 8,
    competitionRate: "3.1:1",
    imageColor: "linear-gradient(135deg, #2f3d4f 0%, #72849d 55%, #c2ccd7 100%)",
  },
  {
    title: "제주 흑돼지 맛집 체험단",
    description: "제주 흑돼지 전문점에서 맛있는 식사 후 블로그 후기를 작성해주세요.",
    platform: "블로그",
    dday: "D-1",
    region: "제주 제주시",
    category: "맛집",
    benefit: "3인 식사권",
    applicants: 25,
    capacity: 10,
    competitionRate: "7.8:1",
    imageColor: "linear-gradient(135deg, #6f3e29 0%, #d17d4a 48%, #f7d6a8 100%)",
  },
];

function renderCampaigns() {
  const campaignList = document.querySelector("#campaign-list");

  if (!campaignList) {
    return;
  }

  campaignList.innerHTML = campaigns.map(createCampaignCard).join("");
}

function renderRecommendations() {
  const recommendationList = document.querySelector("#recommendation-list");

  if (!recommendationList) {
    return;
  }

  const recommendedCampaigns = campaigns.slice(1, 4);

  recommendationList.innerHTML = recommendedCampaigns
    .map(
      (campaign) => `
        <article class="recommendation-item" style="--image-bg: ${campaign.imageColor}">
          <div class="recommendation-thumb" aria-hidden="true"></div>
          <div>
            <span>${campaign.platform}</span>
            <strong>${campaign.title}</strong>
            <em class="recommendation-rate">경쟁률 ${campaign.competitionRate}</em>
          </div>
          <strong class="recommendation-day">${campaign.dday}</strong>
        </article>
      `,
    )
    .join("");
}

renderCampaigns();
renderRecommendations();
