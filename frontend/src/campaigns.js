const regions = ["전국", "서울", "경기", "인천", "강원", "대전", "세종", "충남", "충북", "부산", "울산", "경남", "경북", "대구", "광주", "전남", "전북", "제주"];
const districts = {
  서울:["강남구","강동구","강북구","강서구","관악구","광진구","구로구","금천구","노원구","도봉구","동대문구","동작구","마포구","서대문구","서초구","성동구","성북구","송파구","양천구","영등포구","용산구","은평구","종로구","중구","중랑구"],
  경기:["수원시","성남시","용인시","고양시","화성시","부천시","남양주시","안산시","평택시","안양시","시흥시","파주시","김포시","의정부시","광주시","하남시","광명시","군포시","양주시","오산시","이천시","구리시","안성시","포천시","의왕시","여주시","동두천시","과천시","가평군","양평군","연천군"],
  인천:["중구","동구","미추홀구","연수구","남동구","부평구","계양구","서구","강화군","옹진군"],
  강원:["춘천시","원주시","강릉시","동해시","태백시","속초시","삼척시","홍천군","횡성군","영월군","평창군","정선군","철원군","화천군","양구군","인제군","고성군","양양군"],
  대전:["동구","중구","서구","유성구","대덕구"], 세종:["세종시"],
  충남:["천안시","공주시","보령시","아산시","서산시","논산시","계룡시","당진시","금산군","부여군","서천군","청양군","홍성군","예산군","태안군"],
  충북:["청주시","충주시","제천시","보은군","옥천군","영동군","증평군","진천군","괴산군","음성군","단양군"],
  부산:["중구","서구","동구","영도구","부산진구","동래구","남구","북구","해운대구","사하구","금정구","강서구","연제구","수영구","사상구","기장군"],
  울산:["중구","남구","동구","북구","울주군"],
  경남:["창원시","진주시","통영시","사천시","김해시","밀양시","거제시","양산시","의령군","함안군","창녕군","고성군","남해군","하동군","산청군","함양군","거창군","합천군"],
  경북:["포항시","경주시","김천시","안동시","구미시","영주시","영천시","상주시","문경시","경산시","의성군","청송군","영양군","영덕군","청도군","고령군","성주군","칠곡군","예천군","봉화군","울진군","울릉군"],
  대구:["중구","동구","서구","남구","북구","수성구","달서구","달성군","군위군"], 광주:["동구","서구","남구","북구","광산구"],
  전남:["목포시","여수시","순천시","나주시","광양시","담양군","곡성군","구례군","고흥군","보성군","화순군","장흥군","강진군","해남군","영암군","무안군","함평군","영광군","장성군","완도군","진도군","신안군"],
  전북:["전주시","군산시","익산시","정읍시","남원시","김제시","완주군","진안군","무주군","장수군","임실군","순창군","고창군","부안군"], 제주:["제주시","서귀포시"]
};

const campaigns = [
  { title:"LG전자 퓨리케어 360° Hit 공기청정기", category:"제품", region:"전국", channel:"블로그", type:"배송형", badge:"리뷰노트", badgeType:"review", benefit:"LG전자 공기청정기 본품 제공", reward:"1,290,000 P", days:16, applicants:7519, capacity:1, image:"https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=900&q=84" },
  { title:"[부산/연제구] 개꼬쟁이 초장집 연산시청점", category:"맛집", region:"부산", channel:"인스타그램", type:"방문형", badge:"프리미엄", badgeType:"premium", benefit:"식사권 8만원 + 포인트 10만원", reward:"100,000 P", days:10, applicants:34, capacity:2, image:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=84" },
  { title:"[재택] 에이스쿡 프리미엄 밀키트 리뷰", category:"제품", region:"전국", channel:"유튜브", type:"배송형", badge:"프리미엄", badgeType:"premium", benefit:"쿠세이프 퀵보드 프로 제공", reward:"100,000 P", days:10, applicants:22, capacity:2, image:"https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=84" },
  { title:"[재택] 와이즈영 반려동물 발톱깎이", category:"제품", region:"전국", channel:"블로그", type:"구매형", benefit:"반려동물 케어 제품 제공", reward:"61,900 P", days:10, applicants:7, capacity:3, image:"https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=84" },
  { title:"[충북/청주시] 볼트짐 율량점", category:"운동", region:"충북", channel:"인스타그램", type:"방문형", badge:"프리미엄", badgeType:"premium", benefit:"헬스 이용권 + PT 1회", reward:"80,000 P", days:10, applicants:0, capacity:1, image:"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=84" },
  { title:"[경기/화성시] 미센스 오키드", category:"카페", region:"경기", channel:"인스타그램", type:"방문형", badge:"프리미엄", badgeType:"premium", benefit:"애프터눈 티 세트 2인", reward:"70,000 P", days:10, applicants:20, capacity:2, image:"https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=900&q=84" },
  { title:"[경남/김해시] 와요카페", category:"카페", region:"경남", channel:"인스타그램", type:"방문형", badge:"프리미엄", badgeType:"premium", benefit:"시그니처 음료와 디저트 세트", reward:"50,000 P", days:10, applicants:22, capacity:3, image:"https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=84" },
  { title:"[서울/송파구] 79대표 프리미엄 다이닝", category:"맛집", region:"서울", channel:"블로그", type:"포장", badge:"프리미엄", badgeType:"premium", benefit:"한우 다이닝 2인 식사권", reward:"120,000 P", days:10, applicants:18, capacity:5, image:"https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=84" },
  { title:"[제주/애월] 오션뷰 스테이 1박", category:"숙박", region:"제주", channel:"블로그", type:"방문형", badge:"리뷰노트", badgeType:"review", benefit:"오션뷰 디럭스룸 1박", reward:"180,000 P", days:7, applicants:43, capacity:2, image:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=900&q=84" },
  { title:"[서울/성수] 프라이빗 스킨케어", category:"뷰티", region:"서울", channel:"인스타그램", type:"방문형", benefit:"맞춤 피부관리 90분", reward:"90,000 P", days:5, applicants:28, capacity:4, image:"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=84" },
  { title:"[인천/송도] 선셋 브런치 테이블", category:"맛집", region:"인천", channel:"블로그", type:"방문형", badge:"프리미엄", badgeType:"premium", benefit:"브런치 코스 2인", reward:"75,000 P", days:4, applicants:31, capacity:5, image:"https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=84" },
  { title:"[대구/수성구] 부티크 필라테스", category:"운동", region:"대구", channel:"인스타그램", type:"방문형", benefit:"1:1 필라테스 2회", reward:"110,000 P", days:9, applicants:16, capacity:3, image:"https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=84" }
];
const platformNames=["리뷰노트","강남맛집","리뷰플레이스","리뷰몬","체험뷰","모두의체험단","디너의여왕"];
campaigns.forEach((campaign,index)=>{ campaign.platform=platformNames[index%platformNames.length]; });

const provinceGrid = document.querySelector("#province-grid");
const campaignGrid = document.querySelector("#campaign-grid");
const summaryText = document.querySelector("#region-summary-text");
const emptyState = document.querySelector("#empty-state");
const filterPanel = document.querySelector("#filter-panel");
const backdrop = document.querySelector("#sheet-backdrop");
let selectedRegion = "전국";
const selectedDistricts = new Set();
let query = "";
let districtExpanded = false;
const districtPanel = document.querySelector("#district-panel");
const districtGrid = document.querySelector("#district-grid");
const districtTitle = document.querySelector("#district-title");

provinceGrid.innerHTML = regions.map((region, index) => `<button type="button" data-region="${region}" class="${index === 0 ? "active" : ""}">${region}</button>`).join("");

const locationText = item => { const match=item.title.match(/^\[([^\]]+)\]/); return match ? match[1].replace("/"," ") : item.region; };
const icons = {
  pin:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>`,
  gift:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10h16v10H4zM3 6h18v4H3zM12 6v14M12 6H8.5a2.5 2.5 0 1 1 2.2-3.7L12 6Zm0 0h3.5a2.5 2.5 0 1 0-2.2-3.7L12 6Z"/></svg>`,
  users:`<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3"/><path d="M3.5 20v-2.3A4.7 4.7 0 0 1 8.2 13h1.6a4.7 4.7 0 0 1 4.7 4.7V20M15 5.4a3 3 0 0 1 0 5.2M16 13.3a4.7 4.7 0 0 1 4.5 4.7v2"/></svg>`
};
const campaignCard = item => `<article class="campaign-card">
  <div class="campaign-image"><img src="${item.image}" alt="${item.title}" loading="lazy" />
    <div class="image-badges"><span class="source-badge source-${item.platform}">${item.platform}</span><span class="type-badge">${item.type}</span></div>
    <button class="favorite" type="button" aria-label="${item.title} 즐겨찾기" aria-pressed="false">♡</button><span class="days-badge">D-${item.days}</span>
  </div>
  <div class="campaign-content"><h3>${item.title}</h3><p class="info-line"><span class="meta-icon">${icons.pin}</span>${locationText(item)}</p><p class="info-line reward-line"><span class="meta-icon">${icons.gift}</span>${item.benefit}</p><p class="applicant-line"><span class="meta-icon">${icons.users}</span>신청 ${item.applicants} / ${item.capacity}명</p></div>
</article>`;

function render() {
  const category = document.querySelector("#category").value;
  const channel = document.querySelector("#channel").value;
  const type = document.querySelector("#type").value;
  const sort = document.querySelector("#sort").value;
  const platform = document.querySelector("#platform").value.trim();
  const keyword = document.querySelector("#filter-keyword").value.trim();
  let rows = campaigns.filter(item => (selectedRegion === "전국" || item.region === selectedRegion) && (!selectedDistricts.size || [...selectedDistricts].some(district => item.title.includes(district))) && (category === "전체" || item.category === category) && (channel === "전체" || item.channel === channel) && (type === "전체" || item.type === type) && (!platform || item.platform.includes(platform)) && `${item.title} ${item.benefit} ${item.region} ${item.category}`.toLowerCase().includes(query.toLowerCase()) && `${item.title} ${item.benefit}`.toLowerCase().includes(keyword.toLowerCase()));
  if (sort === "deadline") rows.sort((a,b) => a.days - b.days);
  if (sort === "popular") rows.sort((a,b) => b.applicants - a.applicants);
  campaignGrid.innerHTML = rows.map(campaignCard).join("");
  document.querySelector("#result-count").textContent = rows.length;
  emptyState.hidden = rows.length > 0;
  const activeCount = [category,channel,type].filter(value => value !== "전체").length + Number(Boolean(platform)) + Number(Boolean(keyword)) + Number(selectedRegion!=="전국") + selectedDistricts.size;
  document.querySelector("#filter-count").textContent = activeCount;
  renderSelectedFilters({category,channel,type,platform,keyword});
}

function renderSelectedFilters(filters){
  const chips=[];
  if(selectedRegion!=="전국")chips.push([selectedRegion,"region"]);
  selectedDistricts.forEach(value=>chips.push([value,"district"]));
  [[filters.category,"category"],[filters.channel,"channel"],[filters.type,"type"]].forEach(([value,key])=>{if(value!=="전체")chips.push([value,key]);});
  if(filters.platform)chips.push([filters.platform,"platform"]); if(filters.keyword)chips.push([`“${filters.keyword}”`,"keyword"]);
  if(query)chips.push([`검색: ${query}`,"search"]);
  document.querySelector("#selected-filters").innerHTML=chips.map(([label,key])=>`<button type="button" data-remove="${key}" data-value="${label.replace(/[“”]/g,"")}">${label}<span>×</span></button>`).join("");
}

function updateSummary() { const selected=[...selectedDistricts]; summaryText.textContent = selectedRegion === "전국" ? "전국의 체험단을 보고 있어요." : selected.length ? `${selectedRegion} · ${selected.join(", ")} (${selected.length}/5)` : `${selectedRegion} 전체의 체험단을 보고 있어요.`; }
function changeDistricts(region) {
  const items = districts[region] || [];
  if (!items.length) { districtPanel.setAttribute("aria-hidden","true"); districtPanel.classList.remove("visible"); districtGrid.innerHTML=""; return; }
  districtTitle.textContent = `${region} 세부 지역`;
  const visible=districtExpanded?items:items.slice(0,10);
  districtGrid.innerHTML = visible.map(name => `<button type="button" data-district="${name}" class="${selectedDistricts.has(name)?"active":""}">${name}</button>`).join("")+(items.length>10?`<button type="button" class="more-districts" data-more="true">${districtExpanded?"접기":"더보기"}<span>${districtExpanded?"⌃":"⌄"}</span></button>`:"");
  districtPanel.setAttribute("aria-hidden","false");
  districtPanel.classList.add("visible");
}
provinceGrid.addEventListener("click", event => { const button = event.target.closest("[data-region]"); if (!button) return; selectedRegion = button.dataset.region; selectedDistricts.clear(); districtExpanded=false; provinceGrid.querySelectorAll("button").forEach(item => item.classList.toggle("active", item === button)); updateSummary(); changeDistricts(selectedRegion); render(); });
districtGrid.addEventListener("click", event => { const more=event.target.closest("[data-more]");if(more){districtExpanded=!districtExpanded;changeDistricts(selectedRegion);return;} const button = event.target.closest("[data-district]"); if (!button) return; const district=button.dataset.district; if(selectedDistricts.has(district)){selectedDistricts.delete(district);button.classList.remove("active");}else if(selectedDistricts.size<5){selectedDistricts.add(district);button.classList.add("active");}else{districtPanel.classList.add("limit-notice");window.setTimeout(()=>districtPanel.classList.remove("limit-notice"),220);} updateSummary(); render(); });
document.querySelector("#clear-district").addEventListener("click", () => { selectedDistricts.clear(); districtGrid.querySelectorAll("button").forEach(item => item.classList.remove("active")); updateSummary(); render(); });
document.querySelectorAll("select").forEach(select => select.addEventListener("change", render));
document.querySelector("#header-search").addEventListener("submit", event => { event.preventDefault(); query = document.querySelector("#header-query").value.trim(); render(); document.querySelector("#campaigns").scrollIntoView({ behavior:"smooth" }); });
document.querySelectorAll("[data-mobile-category]").forEach(button => button.addEventListener("click", () => { document.querySelectorAll("[data-mobile-category]").forEach(item => item.classList.remove("active")); button.classList.add("active"); document.querySelector("#category").value = button.dataset.mobileCategory; render(); }));
document.addEventListener("click", event => { const favorite = event.target.closest(".favorite"); if (!favorite) return; const active = favorite.getAttribute("aria-pressed") === "true"; favorite.setAttribute("aria-pressed", String(!active)); favorite.textContent = active ? "♡" : "♥"; });

const mobileFilterButton = document.querySelector("#mobile-filter-button");
function closeSheet() { filterPanel.classList.remove("open"); backdrop.hidden = true; mobileFilterButton.setAttribute("aria-expanded","false"); }
mobileFilterButton.addEventListener("click", () => { const open=filterPanel.classList.toggle("open"); backdrop.hidden = !(open && window.innerWidth<=760); mobileFilterButton.setAttribute("aria-expanded",String(open)); });
backdrop.addEventListener("click", closeSheet);
document.querySelector("#apply-filter").addEventListener("click", () => { render(); closeSheet(); });
document.querySelector("#selected-filters").addEventListener("click",event=>{const chip=event.target.closest("[data-remove]");if(!chip)return;const key=chip.dataset.remove,value=chip.dataset.value;if(key==="region"){selectedRegion="전국";selectedDistricts.clear();provinceGrid.querySelectorAll("button").forEach((button,index)=>button.classList.toggle("active",index===0));changeDistricts("전국");}else if(key==="district"){selectedDistricts.delete(value);changeDistricts(selectedRegion);}else if(["category","channel","type"].includes(key)){document.querySelector(`#${key}`).value="전체";}else if(key==="platform"){document.querySelector("#platform").value="";}else if(key==="keyword"){document.querySelector("#filter-keyword").value="";}else if(key==="search"){query="";document.querySelector("#header-query").value="";}updateSummary();render();});
document.querySelector("#reset-filter").addEventListener("click", () => { selectedRegion="전국"; selectedDistricts.clear(); query=""; document.querySelectorAll("select").forEach(select => select.selectedIndex=0); document.querySelector("#header-query").value=""; document.querySelector("#platform").value=""; document.querySelector("#filter-keyword").value=""; provinceGrid.querySelectorAll("button").forEach((button,index)=>button.classList.toggle("active",index===0)); changeDistricts("전국"); updateSummary(); render(); });
document.querySelector(".region-summary").addEventListener("click", event => { const collapsed = provinceGrid.classList.toggle("collapsed"); districtPanel.classList.toggle("selector-collapsed",collapsed); event.currentTarget.setAttribute("aria-expanded", String(!collapsed)); event.currentTarget.querySelector("b").textContent = collapsed ? "⌄" : "⌃"; });
document.querySelector(".menu-button").addEventListener("click", event => { const nav = document.querySelector(".site-header nav"); const open = nav.classList.toggle("open"); event.currentTarget.classList.toggle("open",open); event.currentTarget.setAttribute("aria-expanded",String(open)); });
render();

