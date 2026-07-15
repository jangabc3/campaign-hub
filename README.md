# CAM PICK

> 여러 체험단 사이트에 흩어진 모집 정보를 한 곳에서 검색하고,
> 원하는 체험단을 쉽고 빠르게 찾을 수 있는 체험단 통합 플랫폼입니다.

초기 버전은 관리자가 직접 체험단을 등록하는 방식으로 개발하며,
향후 크롤링과 AI 기반 추천 기능을 추가하여 자동화된 체험단 플랫폼으로 확장하는 것을 목표로 합니다.

---

# 📌 프로젝트 목표

- 여러 플랫폼의 체험단 모집 정보를 한 곳에서 조회
- 제목, 업체명, 키워드 기반 검색
- 지역, 플랫폼, 카테고리 필터
- 최신순, 마감임박순, 조회수순, 인기순 정렬
- 회원별 즐겨찾기 및 마이페이지 제공
- 관리자 전용 체험단 관리 기능
- 크롤링과 AI 추천 기능으로 확장 가능한 구조 설계

---

#  주요 사용자

| 사용자 | 주요 기능 |
|---------|-----------|
| 비회원 | 체험단 목록 조회, 상세보기 |
| 회원 | 즐겨찾기, 마이페이지, 맞춤 추천 |
| 관리자 | 체험단 등록·수정·삭제, 회원 관리 |

---

#  주요 기능

## 사용자

- 체험단 목록 조회
- 체험단 상세 조회
- 검색
- 필터
- 정렬
- 즐겨찾기
- 마이페이지

## 관리자

- 체험단 등록
- 체험단 수정
- 체험단 삭제
- 회원 관리

## 향후 확장 기능

- 마감 하루 전 알림
- 신규 체험단 알림
- 지도 기반 지역 검색
- AI 자연어 검색
- AI 추천 시스템
- 외부 체험단 사이트 크롤링

---

# 🚀 개발 진행 현황

| Milestone | 내용 | 상태 |
|-----------|------|------|
| Milestone 1 | 프로젝트 기획 | ✅ 완료 |
| Milestone 2 | 체험단 목록 조회 | 🟡 진행 중 |
| Milestone 3 | 체험단 상세보기 | ⬜ 예정 |
| Milestone 4 | 검색 기능 | ⬜ 예정 |
| Milestone 5 | 필터 기능 | ⬜ 예정 |
| Milestone 6 | 정렬 기능 | ⬜ 예정 |
| Milestone 7 | 회원 기능 | ⬜ 예정 |
| Milestone 8 | 즐겨찾기 | ⬜ 예정 |
| Milestone 9 | 마이페이지 | ⬜ 예정 |
| Milestone 10 | 관리자 화면 | ⬜ 예정 |
| Milestone 11 | 크롤링 | ⬜ 예정 |
| Milestone 12 | Docker · AWS 배포 | ⬜ 예정 |

---

#  기술 스택

## Backend

- Java 17
- Spring Boot
- Spring Web
- Spring Data JPA
- Validation

## Database

- H2 Database (개발)
- MySQL / PostgreSQL (운영 예정)

## Frontend

- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API

## Infra

- Gradle
- Docker (예정)
- AWS EC2 (예정)
- GitHub Actions (예정)
- Nginx (예정)

---

#  프로젝트 구조

```text
campaign-hub
│
├── backend
│   ├── src
│   │   ├── admin
│   │   ├── campaign
│   │   ├── global
│   │   └── user
│   ├── build.gradle
│   └── settings.gradle
│
├── frontend
│   ├── assets
│   │   ├── icons
│   │   └── images
│   ├── src
│   │   ├── shared
│   │   │   ├── api
│   │   │   └── components
│   │   ├── app.js
│   │   └── styles.css
│   └── index.html
│
├── docs
│   ├── api.md
│   ├── blueprint.md
│   ├── erd.md
│   ├── features.md
│   ├── folder-structure.md
│   └── ui-sketch.md
│
└── README.md
```

---

#  현재 구현 상태

## Backend

- Spring Boot 프로젝트 생성
- H2 Database 연동
- Campaign Entity 구현
- Repository 구현
- 사용자 체험단 조회 API
- 관리자 체험단 CRUD API
- 사용자 / 관리자 패키지 분리

## Frontend

- 메인 페이지 UI 구성
- 공통 스타일 구성
- API Client 모듈 작성
- Campaign Card 컴포넌트 작성

## Documents

- 프로젝트 청사진
- 기능 명세
- API 명세
- ERD
- UI 스케치
- 폴더 구조 설계

---

#  API

## User API

| Method | URL | 설명 |
|--------|-----|------|
| GET | /api/campaigns | 모집 중 체험단 목록 |
| GET | /api/campaigns/{campaignId} | 체험단 상세 |

### 정렬

```http
GET /api/campaigns?sort=latest
GET /api/campaigns?sort=deadline
GET /api/campaigns?sort=views
GET /api/campaigns?sort=popular
```

---

## Admin API

| Method | URL | 설명 |
|--------|-----|------|
| GET | /api/admin/campaigns | 전체 조회 |
| GET | /api/admin/campaigns/{campaignId} | 상세 조회 |
| POST | /api/admin/campaigns | 등록 |
| PUT | /api/admin/campaigns/{campaignId} | 수정 |
| DELETE | /api/admin/campaigns/{campaignId} | 삭제 |

---

# ▶ 실행 방법

### Backend

```bash
cd backend
./gradlew bootRun
```

Windows

```bash
gradlew.bat bootRun
```

실행 후

```
http://localhost:8080/api/campaigns
http://localhost:8080/h2-console
```

---

### Frontend

```bash
cd frontend
npx serve -l 3000
```

또는

VS Code Live Server를 이용하여 실행합니다.

---

#  향후 개발 계획

- 체험단 상세 페이지 구현
- 검색 기능 구현
- 필터 및 정렬 기능 구현
- 회원가입 및 로그인
- 즐겨찾기
- 마이페이지
- 관리자 페이지 고도화
- Spring Security + JWT 적용
- 크롤링 시스템 구축
- AI 추천 시스템
- Docker 및 AWS 배포
