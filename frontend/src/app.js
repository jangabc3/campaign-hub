import { createCampaignCard } from "./shared/components/campaign-card.js";

const regions = {
  서울: [
    "전체",
    "강남구",
    "강동구",
    "강북구",
    "강서구",
    "관악구",
    "광진구",
    "구로구",
    "금천구",
    "노원구",
    "도봉구",
    "동대문구",
    "동작구",
    "마포구",
    "서대문구",
    "서초구",
    "성동구",
    "성북구",
    "송파구",
    "양천구",
    "영등포구",
    "용산구",
    "은평구",
    "종로구",
    "중구",
    "중랑구",
  ],
  경기: ["전체", "수원시", "성남시", "고양시", "용인시", "부천시", "화성시", "남양주시", "안양시"],
  인천: ["전체", "연수구", "남동구", "부평구", "서구", "미추홀구", "계양구"],
  강원: ["전체", "춘천시", "원주시", "강릉시", "속초시"],
  대전: ["전체", "서구", "유성구", "중구", "동구", "대덕구"],
  세종: ["전체", "세종시"],
  충남: ["전체", "천안시", "아산시", "공주시", "보령시"],
  충북: ["전체", "청주시", "충주시", "제천시"],
  대구: ["전체", "중구", "동구", "서구", "수성구", "달서구"],
  광주: ["전체", "동구", "서구", "남구", "북구", "광산구"],
  전북: ["전체", "전주시", "군산시", "익산시", "정읍시"],
  전남: ["전체", "목포시", "여수시", "순천시", "나주시"],
  경북: ["전체", "포항시", "경주시", "구미시", "안동시"],
  경남: ["전체", "창원시", "김해시", "진주시", "거제시"],
  부산: ["전체", "해운대구", "수영구", "부산진구", "동래구", "남구"],
  울산: ["전체", "남구", "중구", "동구", "북구", "울주군"],
  제주: ["전체", "제주시", "서귀포시"],
};

const campaigns = [
  {
    title: "감성 가득한 브런치 카페",
    platform: "블로그",
    dday: "8일 남음",
    region: "서울 성동구",
    category: "맛집",
    benefit: "방문형",
    applicants: 123,
    capacity: 5,
    tags: ["#브런치", "#감성카페", "#데이트"],
    imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "비건 스킨케어 제품 체험단",
    platform: "인스타그램",
    dday: "6일 남음",
    region: "경기 성남시",
    category: "뷰티",
    benefit: "배송형",
    applicants: 98,
    capacity: 10,
    tags: ["#스킨케어", "#비건뷰티", "#촉촉템"],
    imageUrl: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "제주 2박 3일 여행 체험단",
    platform: "유튜브",
    dday: "5일 남음",
    region: "제주 제주시",
    category: "여행",
    benefit: "구매형",
    applicants: 76,
    capacity: 3,
    tags: ["#제주도", "#여행", "#숙박지원"],
    imageUrl: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "헬스장 1일 이용권 체험단",
    platform: "틱톡",
    dday: "3일 남음",
    region: "서울 강남구",
    category: "운동",
    benefit: "기타",
    applicants: 45,
    capacity: 2,
    tags: ["#헬스", "#운동", "#운동하는남자"],
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "프리미엄 한식 다이닝 리뷰어",
    platform: "블로그",
    dday: "7일 남음",
    region: "서울 마포구",
    category: "맛집",
    benefit: "방문형",
    applicants: 64,
    capacity: 4,
    tags: ["#한식", "#파인다이닝", "#커플식사"],
    imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "도심 호텔 숙박 리뷰 체험단",
    platform: "인스타그램",
    dday: "9일 남음",
    region: "부산 해운대구",
    category: "여행",
    benefit: "방문형",
    applicants: 84,
    capacity: 6,
    tags: ["#호캉스", "#숙박", "#오션뷰"],
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "홈 스타일링 소품 체험단",
    platform: "유튜브",
    dday: "4일 남음",
    region: "경기 고양시",
    category: "문화",
    benefit: "배송형",
    applicants: 59,
    capacity: 8,
    tags: ["#인테리어", "#홈스타일링", "#소품"],
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "메이크업 브러시 세트 리뷰",
    platform: "블로그",
    dday: "2일 남음",
    region: "인천 연수구",
    category: "뷰티",
    benefit: "배송형",
    applicants: 112,
    capacity: 12,
    tags: ["#메이크업", "#브러시", "#뷰티템"],
    imageUrl: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80",
  },
];

function renderRegions() {
  const provinceList = document.querySelector("#province-list");
  const districtList = document.querySelector("#district-list");

  if (!provinceList || !districtList) {
    return;
  }

  const provinceNames = Object.keys(regions);

  provinceList.innerHTML = provinceNames
    .map((name, index) => `<button type="button" class="region-chip${index === 0 ? " is-active" : ""}" data-region="${name}">${name}</button>`)
    .join("");

  function renderDistricts(regionName) {
    districtList.innerHTML = regions[regionName]
      .map((name, index) => `<button type="button" class="district-chip${index === 0 ? " is-active" : ""}">${name}</button>`)
      .join("");
  }

  provinceList.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-region]");

    if (!button) {
      return;
    }

    provinceList.querySelectorAll("button").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderDistricts(button.dataset.region);
  });

  districtList.addEventListener("click", (event) => {
    const button = event.target.closest("button");

    if (!button) {
      return;
    }

    districtList.querySelectorAll("button").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
  });

  renderDistricts("서울");
}

function renderCampaigns() {
  const campaignList = document.querySelector("#campaign-list");

  if (!campaignList) {
    return;
  }

  campaignList.innerHTML = campaigns.map(createCampaignCard).join("");
}

renderRegions();
renderCampaigns();
