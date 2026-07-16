const showcaseSection=document.querySelector(".why");
showcaseSection.className="product-showcase";
showcaseSection.id="live-product";
if(location.hash==="#live-product")requestAnimationFrame(()=>showcaseSection.scrollIntoView());
showcaseSection.innerHTML=`
  <div class="showcase-copy">
    <p class="kicker">LIVE PRODUCT</p>
    <h2>캠픽에서는<br>이렇게 찾습니다.</h2>
    <p>검색부터 신청까지,<br>모든 과정을 한 화면에서 경험하세요.</p>
    <a href="./campaigns.html">체험단 찾기 <span>→</span></a>
  </div>
  <div class="live-browser" aria-label="CAM PICK 검색 과정 자동 시연">
    <div class="live-browser-bar"><b>CAM PICK<i></i></b><div class="browser-search-mini">맛집, 호텔, 뷰티, 여행, 브랜드, 캠페인명을 검색해보세요</div><small>체험단 찾기　즐겨찾기　이용 가이드</small></div>
    <div class="live-ui">
      <div class="demo-search"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/></svg><span class="demo-query" aria-live="polite"></span><button type="button">검색</button></div>
      <div class="demo-region-head"><b>지역</b><span>지역을 선택해 주세요.</span></div>
      <div class="demo-provinces">
        <button data-step="all">전국</button><button data-step="seoul">서울</button><button>경기</button><button>인천</button><button>강원</button><button>대전</button><button>세종</button><button>충남</button><button>충북</button><button>부산</button>
        <button>울산</button><button>경남</button><button>경북</button><button>대구</button><button>광주</button><button>전남</button><button>전북</button><button>제주</button>
      </div>
      <div class="demo-districts"><button data-step="gangnam">강남구</button><button>강동구</button><button>마포구</button><button>송파구</button><button>성동구</button></div>
      <div class="demo-filter-line"><div class="category-demo"><button data-step="food">맛집</button><button>방문형</button></div><button class="demo-filter-button">필터 <span>0</span></button></div>
      <div class="demo-platforms"><b>원본 플랫폼</b><span>리뷰노트</span><span>강남맛집</span><span>체험뷰</span></div>
      <div class="demo-results-heading"><div><b>모집 중인 체험단</b><span>12개의 체험단</span></div><small>추천순</small></div>
      <div class="demo-cards">
        <article><div><img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=640&q=84" alt="한우 다이닝"><span>강남맛집</span><em>D-4</em></div><h3>강남 프리미엄 한우 다이닝</h3><p>서울 강남구</p><small>10만원 상당 식사권</small><button>원문 보기</button></article>
        <article><div><img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=640&q=84" alt="감성 레스토랑"><span>리뷰노트</span><em>D-6</em></div><h3>신사동 감성 레스토랑 체험</h3><p>서울 강남구</p><small>2인 디너 코스 제공</small><button>원문 보기</button></article>
        <article><div><img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=640&q=84" alt="브런치 다이닝"><span>체험뷰</span><em>D-8</em></div><h3>도산공원 브런치 테이블</h3><p>서울 강남구</p><small>브런치 세트 제공</small><button>원문 보기</button></article>
        <article><div><img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=640&q=84" alt="파인다이닝"><span>리뷰플레이스</span><em>D-5</em></div><h3>청담 프라이빗 파인다이닝</h3><p>서울 강남구</p><small>15만원 상당 코스</small><button>원문 보기</button></article>
      </div>
      <div class="demo-cursor" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m5 3 13 10-6 1-3 6Z"/></svg></div>
    </div>
  </div>`;

const demo={root:showcaseSection,browser:showcaseSection.querySelector(".live-browser"),query:showcaseSection.querySelector(".demo-query"),searchButton:showcaseSection.querySelector(".demo-search button"),all:showcaseSection.querySelector('[data-step="all"]'),seoul:showcaseSection.querySelector('[data-step="seoul"]'),gangnam:showcaseSection.querySelector('[data-step="gangnam"]'),food:showcaseSection.querySelector('[data-step="food"]'),platforms:showcaseSection.querySelector(".demo-platforms"),cards:[...showcaseSection.querySelectorAll(".demo-cards article")],cursor:showcaseSection.querySelector(".demo-cursor")};
const wait=ms=>new Promise(resolve=>setTimeout(resolve,ms));
function resetShowcase(){demo.query.textContent="";demo.searchButton.classList.remove("pressed");[demo.all,demo.seoul,demo.gangnam,demo.food].forEach(item=>item.classList.remove("active"));demo.platforms.classList.remove("visible");demo.cards.forEach(card=>card.classList.remove("visible","spotlight","clicked"));demo.cursor.classList.remove("visible","at-button","clicking");}
async function runShowcase(){const text="서울 강남 맛집";while(true){resetShowcase();await wait(900);for(const letter of text){demo.query.textContent+=letter;await wait(125+Math.random()*75);}await wait(400);demo.searchButton.classList.add("pressed");await wait(350);demo.searchButton.classList.remove("pressed");for(const chip of [demo.all,demo.seoul,demo.gangnam]){chip.classList.add("active");await wait(480);if(chip!==demo.gangnam)chip.classList.remove("active");}demo.food.classList.add("active");await wait(650);demo.platforms.classList.add("visible");await wait(800);for(const card of demo.cards){card.classList.add("visible");await wait(150);}await wait(1200);const focusCard=demo.cards[1];focusCard.classList.add("spotlight");await wait(900);focusCard.classList.remove("spotlight");await wait(550);demo.cursor.classList.add("visible");await wait(500);demo.cursor.classList.add("at-button");await wait(1100);demo.cursor.classList.add("clicking");focusCard.classList.add("clicked");await wait(240);demo.cursor.classList.remove("clicking");focusCard.classList.remove("clicked");await wait(2000);demo.browser.classList.add("resetting");await wait(500);demo.browser.classList.remove("resetting");}}
if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){demo.query.textContent="서울 강남 맛집";demo.gangnam.classList.add("active");demo.food.classList.add("active");demo.platforms.classList.add("visible");demo.cards.forEach(card=>card.classList.add("visible"));}else runShowcase();

const platformSection=document.querySelector("#platforms");
const platformData=[
  {name:"리뷰노트",en:"Review Note",count:2300,tone:"#4e6b57",mark:"R"},
  {name:"강남맛집",en:"Gangnam Matzip",count:560,tone:"#b0543e",mark:"강"},
  {name:"리뷰플레이스",en:"Review Place",count:1120,tone:"#242423",mark:"P"},
  {name:"체험뷰",en:"Experience View",count:1890,tone:"#567b75",mark:"V"},
  {name:"체험단닷컴",en:"Campaign.com",count:740,tone:"#8a6957",mark:"C"},
  {name:"리뷰몬",en:"Review Mon",count:960,tone:"#6a6e86",mark:"M"},
  {name:"모두의체험단",en:"Modu Experience",count:1380,tone:"#50735d",mark:"모"},
  {name:"디너의여왕",en:"Dinner Queen",count:820,tone:"#9b574e",mark:"D"},
  {name:"레뷰",en:"Revu",count:1540,tone:"#3f6550",mark:"L"},
  {name:"서울오빠",en:"Seoul Oppa",count:680,tone:"#55514c",mark:"S"},
  {name:"놀러와체험단",en:"Come & Review",count:920,tone:"#687d59",mark:"N"},
  {name:"미블",en:"Mible",count:430,tone:"#7c625a",mark:"B"}
];
function platformCard(item,index){return `<button class="platform-card" type="button" data-platform-index="${index}"><span class="platform-mark" style="--mark:${item.tone}">${item.mark}</span><span class="platform-copy"><b>${item.name}</b><small>${item.en}</small></span><strong data-count="${item.count}">${item.count.toLocaleString()}+</strong><em class="update-badge"></em></button>`;}
const topPlatforms=platformData.slice(0,6),bottomPlatforms=platformData.slice(6);
platformSection.querySelector(".platform-list").outerHTML=`
  <div class="platform-marquee" aria-label="CAM PICK 연동 플랫폼">
    <div class="marquee-row marquee-left"><div class="marquee-track">${[...topPlatforms,...topPlatforms,...topPlatforms].map((item,index)=>platformCard(item,index%6)).join("")}</div></div>
    <div class="marquee-row marquee-right"><div class="marquee-track">${[...bottomPlatforms,...bottomPlatforms,...bottomPlatforms].map((item,index)=>platformCard(item,6+(index%6))).join("")}</div></div>
  </div>`;
platformSection.querySelector("#platform-more")?.remove();
const platformCards=[...platformSection.querySelectorAll(".platform-card")];
function pulsePlatform(){
  const index=Math.floor(Math.random()*platformData.length);
  const matching=platformCards.filter(card=>Number(card.dataset.platformIndex)===index);
  const data=platformData[index];
  data.count+=1;
  matching.forEach(card=>{
    const count=card.querySelector("strong");
    const badge=card.querySelector(".update-badge");
    count.textContent=`${data.count.toLocaleString()}+`;
    card.classList.add("fresh");
    badge.textContent=Math.random()>.48?"+12 Campaigns":"NEW";
    badge.classList.add("visible");
  });
  setTimeout(()=>matching.forEach(card=>{card.classList.remove("fresh");card.querySelector(".update-badge").classList.remove("visible");}),1300);
}
if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)setInterval(pulsePlatform,9000);

const curationData=[
  {category:"맛집",location:"서울 강남",title:"프리미엄 스테이크 다이닝",platform:"리뷰노트",reward:"50,000원 상당",rating:"4.9",applicants:"128명 신청",deadline:"D-1",note:"오늘 가장 빠르게 마감되는 인기 체험입니다.",image:"https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1800&q=88"},
  {category:"숙박",location:"제주 서귀포",title:"바다를 품은 오션뷰 스테이",platform:"리뷰플레이스",reward:"1박 숙박권",rating:"4.8",applicants:"94명 신청",deadline:"D-4",note:"여유로운 주말을 위한 추천입니다.",image:"https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=88"},
  {category:"뷰티",location:"서울 청담",title:"프라이빗 럭셔리 스킨케어",platform:"체험뷰",reward:"120,000원 상당",rating:"4.9",applicants:"76명 신청",deadline:"D-3",note:"온전히 나에게 집중하는 시간을 경험해보세요.",image:"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1800&q=88"},
  {category:"카페",location:"서울 성수",title:"계절을 담은 디저트 테이블",platform:"강남맛집",reward:"2인 디저트 세트",rating:"4.7",applicants:"112명 신청",deadline:"D-5",note:"이번 주 가장 많은 관심을 받고 있습니다.",image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1800&q=88"},
  {category:"여행",location:"강원 양양",title:"숲과 바다가 만나는 힐링 여행",platform:"모두의체험단",reward:"2인 체험 패키지",rating:"4.9",applicants:"83명 신청",deadline:"D-6",note:"잠시 속도를 늦추고 새로운 풍경을 만나보세요.",image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=88"}
];
const curationSection=document.querySelector(".categories");
curationSection.className="curation-section";
curationSection.id="curation";
if(location.hash==="#curation")setTimeout(()=>curationSection.scrollIntoView(),50);
curationSection.innerHTML=`
  <header class="curation-heading"><p class="kicker">CAM PICK CURATION</p><h2>오늘,<br>CAM PICK이 고른 체험.</h2><p>매일 새롭게 등록되는 체험 중<br>CAM PICK이 가장 먼저 보여주고 싶은 경험입니다.</p></header>
  <div class="curation-stage" tabindex="0" aria-label="CAM PICK 추천 체험 슬라이더">
    <div class="curation-media"><img alt=""><div class="curation-shade"></div></div>
    <div class="curation-content">
      <div class="curation-tags"><span class="curation-category"></span><span class="curation-location"></span></div>
      <h3></h3><p class="curation-note"></p>
      <div class="curation-meta"><span class="curation-platform"></span><span class="curation-reward"></span></div>
    </div>
    <strong class="curation-deadline"></strong>
    <div class="curation-controls"><button class="curation-prev" type="button" aria-label="이전 추천">←</button><div class="curation-dots"></div><button class="curation-next" type="button" aria-label="다음 추천">→</button></div>
  </div>`;
const curation={stage:curationSection.querySelector(".curation-stage"),image:curationSection.querySelector(".curation-media img"),category:curationSection.querySelector(".curation-category"),location:curationSection.querySelector(".curation-location"),title:curationSection.querySelector(".curation-content h3"),note:curationSection.querySelector(".curation-note"),platform:curationSection.querySelector(".curation-platform"),reward:curationSection.querySelector(".curation-reward"),deadline:curationSection.querySelector(".curation-deadline"),dots:curationSection.querySelector(".curation-dots")};
curation.dots.innerHTML=curationData.map((_,index)=>`<button type="button" aria-label="${index+1}번째 추천"></button>`).join("");
let curationIndex=0,curationTimer;
function paintCuration(index,direction=1){
  curation.stage.classList.add("changing");
  curation.stage.style.setProperty("--slide-direction",direction);
  setTimeout(()=>{
    const item=curationData[index];
    curation.image.src=item.image;curation.image.alt=item.title;curation.category.textContent=item.category;curation.location.textContent=item.location;curation.title.textContent=item.title;curation.note.textContent=item.note;curation.platform.textContent=item.platform;curation.reward.textContent=item.reward;curation.deadline.textContent=item.deadline;
    curation.image.classList.remove("ken-burns");void curation.image.offsetWidth;curation.image.classList.add("ken-burns");
    [...curation.dots.children].forEach((dot,dotIndex)=>dot.classList.toggle("active",dotIndex===index));
    requestAnimationFrame(()=>curation.stage.classList.remove("changing"));
  },380);
}
function moveCuration(step){curationIndex=(curationIndex+step+curationData.length)%curationData.length;paintCuration(curationIndex,step);restartCuration();}
function restartCuration(){clearInterval(curationTimer);if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)curationTimer=setInterval(()=>moveCuration(1),6000);}
curationSection.querySelector(".curation-prev").addEventListener("click",()=>moveCuration(-1));
curationSection.querySelector(".curation-next").addEventListener("click",()=>moveCuration(1));
[...curation.dots.children].forEach((dot,index)=>dot.addEventListener("click",()=>{const direction=index>=curationIndex?1:-1;curationIndex=index;paintCuration(index,direction);restartCuration();}));
curation.stage.addEventListener("keydown",event=>{if(event.key==="ArrowLeft")moveCuration(-1);if(event.key==="ArrowRight")moveCuration(1);});
paintCuration(0);restartCuration();
const curationObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){curationSection.classList.add("entered");curationObserver.disconnect();}}),{threshold:.16});
curationObserver.observe(curationSection);

clearInterval(curationTimer);
curationSection.className="curation-section orbit-curation";
curationSection.innerHTML=`
  <header class="orbit-heading">
    <p class="kicker">CAM PICK CURATION</p>
    <h2>오늘,<br>CAM PICK이 고른 체험단.</h2>
    <p>매일 새롭게 등록되는 수많은 체험단 중<br>CAM PICK이 가장 먼저 보여주고 싶은 체험단을 소개합니다.</p>
  </header>
  <div class="campaign-orbit" aria-label="CAM PICK 추천 체험단">
    <div class="orbit-light" aria-hidden="true"></div>
    ${curationData.map(()=>`<article class="orbit-card"></article>`).join("")}
  </div>`;
const orbitItems=curationData.map((item,index)=>({...item,title:`${item.title} 체험단`,isNew:index===0}));
const orbitCards=[...curationSection.querySelectorAll(".orbit-card")];
let orbitIndex=0,orbitTimer;
function campaignType(category){return category==="숙박"?"방문형":category==="여행"?"체험형":category==="뷰티"?"방문형":category==="카페"?"방문형":"방문형";}
function orbitMarkup(item){return `<img src="${item.image}" alt="${item.title}"><div class="orbit-dim"></div><div class="orbit-badges">${item.isNew?`<span>NEW</span>`:""}<span>${item.category}</span><span>${item.location}</span></div><strong>${item.deadline}</strong><div class="orbit-content"><small><em>${item.platform}</em><i>${campaignType(item.category)}</i></small><h3>${item.title}</h3><div class="orbit-details"><span><b>플랫폼</b>${item.platform}</span><span><b>제공 혜택</b>${item.reward}</span><span><b>모집 마감</b>${item.deadline}</span></div><a href="./campaigns.html">자세히 보기 <b>→</b></a></div>`;}
const orbitPositions=["orbit-center","orbit-right-near","orbit-right-far","orbit-left-far","orbit-left-near"];
orbitCards.forEach((card,index)=>card.className=`orbit-card ${orbitPositions[index]}`);
function renderOrbit(){
  orbitCards.forEach((card,slot)=>{const itemIndex=(orbitIndex+slot)%orbitItems.length;card.dataset.itemIndex=itemIndex;card.innerHTML=orbitMarkup(orbitItems[itemIndex]);});
}
function changeOrbit(nextIndex){
  if(curationSection.classList.contains("orbit-transitioning"))return;
  curationSection.classList.add("orbit-transitioning");
  setTimeout(()=>{orbitIndex=(nextIndex+orbitItems.length)%orbitItems.length;renderOrbit();curationSection.classList.remove("orbit-transitioning");},560);
}
function rotateOrbit(){changeOrbit(orbitIndex+1);}
function restartOrbit(){clearInterval(orbitTimer);if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)orbitTimer=setInterval(rotateOrbit,7000);}
orbitCards.forEach((card,slot)=>card.addEventListener("click",event=>{if(event.target.closest("a")||slot===0)return;changeOrbit(Number(card.dataset.itemIndex));restartOrbit();}));
renderOrbit();restartOrbit();
const orbitObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){curationSection.classList.add("orbit-entered");orbitObserver.disconnect();}}),{threshold:.18});
orbitObserver.observe(curationSection);

const connectionSection=document.querySelector(".compare");
connectionSection.className="connection-section";
connectionSection.innerHTML=`
  <header class="connection-heading">
    <p class="kicker">A BETTER WAY TO DISCOVER</p>
    <h2>77개 플랫폼의 정보를 연결해<br>하나의 체험단 탐색으로.</h2>
    <p>흩어져 있는 체험단 정보를 CAM PICK이<br>한곳에 모아 가장 빠르고 정확하게 보여드립니다.</p>
  </header>
  <div class="connection-stage">
    <div class="source-platforms">
      <article style="--delay:0"><span class="source-logo">R</span><div><b>리뷰노트</b><small>10,432개 체험단</small></div></article>
      <article style="--delay:1"><span class="source-logo blue">V</span><div><b>체험뷰</b><small>8,219개 체험단</small></div></article>
      <article style="--delay:2"><span class="source-logo orange">강</span><div><b>강남맛집</b><small>6,871개 체험단</small></div></article>
      <article style="--delay:3"><span class="source-logo violet">P</span><div><b>리뷰플레이스</b><small>7,654개 체험단</small></div></article>
      <article style="--delay:4"><span class="source-logo gray">M</span><div><b>모두의체험단</b><small>9,021개 체험단</small></div></article>
    </div>
    <svg class="connection-lines" viewBox="0 0 1280 560" preserveAspectRatio="none" aria-hidden="true">
      <defs><filter id="dot-glow"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
      <path id="flow-1" d="M190 75 C380 75 350 210 570 220"/><path id="flow-2" d="M150 180 C350 180 380 245 570 255"/><path id="flow-3" d="M190 280 C360 280 410 280 570 280"/><path id="flow-4" d="M175 390 C365 390 375 315 570 305"/><path id="flow-5" d="M310 490 C430 490 410 350 570 330"/>
      <path class="result-line" d="M720 280 C805 280 830 280 895 280"/>
      <g class="travel-dots">${[1,2,3,4,5].map((number,index)=>`<circle r="5"><animateMotion dur="3.3s" begin="${1.9+index*.18}s;${15.9+index*.18}s" fill="freeze"><mpath href="#flow-${number}"/></animateMotion></circle>`).join("")}</g>
    </svg>
    <div class="campick-hub"><b>CAM<br>PICK<i></i></b><span>77개 플랫폼</span><small>52,000+ 체험단 연결 중</small></div>
    <article class="connected-campaign">
      <div><img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=86" alt="프리미엄 스테이크 다이닝 체험단"><span>맛집</span><em>D-1</em></div>
      <section><small>서울 강남</small><h3>프리미엄 스테이크 다이닝 체험단</h3><p><b>ReviewNote</b><span>50,000원 상당</span></p><a href="./campaigns.html">자세히 보기 <i>→</i></a></section>
    </article>
  </div>
  <p class="connection-caption">매일 새롭게 연결되는 정보를 통해<br><b>가장 좋은 체험단을 가장 먼저 만나보세요.</b></p>`;
const connectionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){connectionSection.classList.add("connection-entered");connectionObserver.disconnect();}}),{threshold:.16});
connectionObserver.observe(connectionSection);

const finalSection=document.querySelector(".final-cta");
finalSection.className="app-showcase";
finalSection.innerHTML=`
  <div class="app-copy">
    <p class="kicker">CAM PICK APP</p>
    <h2>체험단 관리는<br>주머니 속에서.</h2>
    <p>검색부터 신청, 관심 체험단 관리,<br>리뷰 일정 확인까지.<br><br>언제 어디서나 CAM PICK과 함께하세요.</p>
    <div class="app-features">
      <article><b>01</b><span>관심 체험단을<br>한곳에 저장</span></article>
      <article><b>02</b><span>새로운 모집과<br>마감 일정 알림</span></article>
      <article><b>03</b><span>내 주변 체험단을<br>지도로 발견</span></article>
    </div>
    <div class="coming-soon"><span>COMING SOON</span><b>iOS · Android 출시 예정</b></div>
  </div>
  <div class="phone-scene" aria-label="CAM PICK 모바일 앱 미리보기">
    <div class="phone-light" aria-hidden="true"></div>
    <div class="phone phone-back">
      <div class="phone-speaker"></div>
      <div class="map-screen"><b>내 주변 체험단</b><span class="map-road r1"></span><span class="map-road r2"></span><i class="map-pin p1"></i><i class="map-pin p2"></i><i class="map-pin p3"></i><div class="map-sheet"><strong>성수동 추천</strong><small>지금 모집 중인 체험단 18개</small></div></div>
    </div>
    <div class="phone phone-front">
      <div class="phone-speaker"></div>
      <div class="mobile-ui">
        <header><b>CAM PICK<i></i></b><span class="mobile-alert">3</span></header>
        <p>오늘의 추천 체험단</p>
        <div class="mobile-search">어떤 체험단을 찾고 있나요?</div>
        <div class="mobile-chips"><span>맛집</span><span>뷰티</span><span>숙박</span><span>여행</span></div>
        <article class="mobile-campaign active"><img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=84" alt="프리미엄 다이닝 체험단"><em>D-1</em><div><small>맛집 · 서울 강남</small><b>프리미엄 스테이크 다이닝</b><span>50,000원 상당</span></div></article>
        <article class="mobile-campaign"><img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=84" alt="오션뷰 숙박 체험단"><em>D-4</em><div><small>숙박 · 제주</small><b>오션뷰 스테이 체험단</b><span>1박 숙박권</span></div></article>
        <nav><button class="on">⌂<small>홈</small></button><button>⌕<small>검색</small></button><button class="saved">♡<small>저장</small></button><button>♢<small>알림</small></button><button>○<small>MY</small></button></nav>
      </div>
    </div>
    <div class="floating-notice notice-new active"><b>NEW</b><span>새로운 체험단 24개</span></div>
    <div class="floating-notice notice-keyword"><b>KEYWORD</b><span>실시간 키워드 알림</span></div>
    <div class="floating-notice notice-map"><b>MAP</b><span>지도에서 보기</span></div>
    <div class="floating-notice notice-review"><b>D-1</b><span>리뷰 마감이 내일이에요</span></div>
    <div class="floating-notice notice-saved"><b>♥</b><span>관심 체험단 저장 완료</span></div>
  </div>`;
const appNotices=[...finalSection.querySelectorAll(".floating-notice")];
const appCampaigns=[...finalSection.querySelectorAll(".mobile-campaign")];
const appAlert=finalSection.querySelector(".mobile-alert");
const savedButton=finalSection.querySelector(".saved");
let appMoment=0,appTimer;
function updateAppMoment(){
  appNotices.forEach((notice,index)=>notice.classList.toggle("active",index===appMoment%appNotices.length));
  appCampaigns.forEach((campaign,index)=>campaign.classList.toggle("active",index===appMoment%appCampaigns.length));
  appAlert.textContent=String(3+(appMoment%4));
  savedButton.classList.toggle("filled",appMoment%3===2);
  appMoment++;
}
if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)appTimer=setInterval(updateAppMoment,7000);
const appObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){finalSection.classList.add("app-entered");appObserver.disconnect();}}),{threshold:.18});
appObserver.observe(finalSection);

const search=document.querySelector("#main-search"),query=document.querySelector("#query");
const initialQuery=new URLSearchParams(window.location.search).get("q");if(initialQuery)query.value=initialQuery;
search.addEventListener("submit",event=>{event.preventDefault();const value=query.value.trim();window.location.href=value?`./campaigns.html?q=${encodeURIComponent(value)}`:"./campaigns.html";});
document.querySelectorAll(".keywords button").forEach(button=>button.addEventListener("click",()=>{query.value=button.textContent;query.focus();}));
document.querySelectorAll(".category-strip a").forEach(link=>link.addEventListener("click",event=>{event.preventDefault();window.location.href=`./campaigns.html?category=${encodeURIComponent(link.querySelector("span").textContent)}`;}));
document.querySelectorAll(".preview-copy a,.final-cta a").forEach(link=>link.addEventListener("click",event=>{event.preventDefault();window.location.href="./campaigns.html";}));

const menu=document.querySelector(".menu"),nav=document.querySelector(".header nav");menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.classList.toggle("open",open);menu.setAttribute("aria-expanded",String(open));});
nav.addEventListener("click",()=>{nav.classList.remove("open");menu.classList.remove("open");menu.setAttribute("aria-expanded","false");});
document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener("click",event=>{const target=document.querySelector(link.getAttribute("href"));if(target){event.preventDefault();target.scrollIntoView({behavior:"smooth"});}}));

const hero=document.querySelector("#hero");
const oldVisual=hero.querySelector(".hero-cards");
hero.id="campick-hero";
document.querySelectorAll('[href="#hero"]').forEach(link=>link.setAttribute("href","#campick-hero"));
const siteHeader=document.querySelector(".header");
hero.prepend(siteHeader);

oldVisual.className="discovery-visual";
oldVisual.setAttribute("aria-label","캠픽에서 발견할 수 있는 다양한 체험");
oldVisual.innerHTML=`
  <div class="discovery-orbit" aria-hidden="true">
    <svg viewBox="0 0 620 470" preserveAspectRatio="none"><path d="M72 332 C132 108 424 62 548 227 C612 312 510 412 306 399"/></svg>
  </div>
  <div class="experience-node node-dining"><img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=720&q=84" alt="프리미엄 다이닝"><span>DINING</span><b>맛집</b></div>
  <div class="experience-node node-stay"><img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=720&q=84" alt="바다를 바라보는 여행"><span>STAY</span><b>여행 · 숙박</b></div>
  <div class="experience-node node-wellness"><img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=720&q=84" alt="차분한 뷰티 케어"><span>WELLNESS</span><b>뷰티</b></div>
  <div class="experience-node node-active"><img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=720&q=84" alt="운동하는 공간"><span>ACTIVE</span><b>운동</b></div>
  <p class="visual-caption"><span>77 PLATFORMS</span>다양한 경험으로 이어지는 하나의 발견</p>`;

let heroClouds=null;
if(window.THREE&&window.VANTA?.CLOUDS){
  heroClouds=window.VANTA.CLOUDS({
    el:"#campick-hero",
    mouseControls:true,
    touchControls:true,
    gyroControls:false,
    minHeight:200,
    minWidth:200,
    backgroundColor:0xffffff,
    skyColor:0x68b8d7,
    cloudColor:0xadc1de,
    cloudShadowColor:0x183550,
    sunColor:0xff9919,
    sunGlareColor:0xff6633,
    sunlightColor:0xff9933,
    speed:1
  });
}
window.addEventListener("pagehide",()=>heroClouds?.destroy(),{once:true});
