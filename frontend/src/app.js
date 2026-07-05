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
  경기: [
    "전체",
    "수원시",
    "성남시",
    "고양시",
    "용인시",
    "부천시",
    "화성시",
    "평택시",
    "시흥시",
    "김포시",
    "광주시",
    "안성시",
    "오산시",
    "이천시",
    "포천시",
    "양주시",
    "구리시",
    "하남시",
    "군포시",
    "의왕시",
    "과천시",
    "여주시",
    "양평군",
    "연천군",
    "가평군",
    "동두천시",
    "파주시",
    "안양시",
    "남양주시",
    "광명시",
    "안산시",
    "의정부시",
  ],
  인천: ["전체", "중구", "동구", "미추홀구", "연수구", "남동구", "부평구", "계양구", "서구", "강화군", "옹진군"],
  강원: [
    "전체",
    "춘천시",
    "원주시",
    "강릉시",
    "동해시",
    "태백시",
    "속초시",
    "삼척시",
    "홍천군",
    "횡성군",
    "영월군",
    "평창군",
    "정선군",
    "철원군",
    "화천군",
    "양구군",
    "인제군",
    "고성군",
    "양양군",
  ],
  대전: ["전체", "동구", "중구", "서구", "유성구", "대덕구"],
  세종: ["전체", "세종시"],
  충남: [
    "전체",
    "천안시",
    "공주시",
    "보령시",
    "아산시",
    "서산시",
    "논산시",
    "계룡시",
    "당진시",
    "금산군",
    "부여군",
    "서천군",
    "청양군",
    "홍성군",
    "예산군",
    "태안군",
  ],
  충북: ["전체", "청주시", "충주시", "제천시", "보은군", "옥천군", "영동군", "증평군", "진천군", "괴산군", "음성군", "단양군"],
  대구: ["전체", "중구", "동구", "서구", "남구", "북구", "수성구", "달서구", "달성군", "군위군"],
  광주: ["전체", "동구", "서구", "남구", "북구", "광산구"],
  전북: [
    "전체",
    "전주시",
    "군산시",
    "익산시",
    "정읍시",
    "남원시",
    "김제시",
    "완주군",
    "진안군",
    "무주군",
    "장수군",
    "임실군",
    "순창군",
    "고창군",
    "부안군",
  ],
  전남: [
    "전체",
    "목포시",
    "여수시",
    "순천시",
    "나주시",
    "광양시",
    "담양군",
    "곡성군",
    "구례군",
    "고흥군",
    "보성군",
    "화순군",
    "장흥군",
    "강진군",
    "해남군",
    "영암군",
    "무안군",
    "함평군",
    "영광군",
    "장성군",
    "완도군",
    "진도군",
    "신안군",
  ],
  경북: [
    "전체",
    "포항시",
    "경주시",
    "김천시",
    "안동시",
    "구미시",
    "영주시",
    "영천시",
    "상주시",
    "문경시",
    "경산시",
    "의성군",
    "청송군",
    "영양군",
    "영덕군",
    "청도군",
    "고령군",
    "성주군",
    "칠곡군",
    "예천군",
    "봉화군",
    "울진군",
    "울릉군",
  ],
  경남: [
    "전체",
    "창원시",
    "진주시",
    "통영시",
    "사천시",
    "김해시",
    "밀양시",
    "거제시",
    "양산시",
    "의령군",
    "함안군",
    "창녕군",
    "고성군",
    "남해군",
    "하동군",
    "산청군",
    "함양군",
    "거창군",
    "합천군",
  ],
  부산: [
    "전체",
    "중구",
    "서구",
    "동구",
    "영도구",
    "부산진구",
    "동래구",
    "남구",
    "북구",
    "해운대구",
    "사하구",
    "금정구",
    "강서구",
    "연제구",
    "수영구",
    "사상구",
    "기장군",
  ],
  울산: ["전체", "중구", "남구", "동구", "북구", "울주군"],
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
