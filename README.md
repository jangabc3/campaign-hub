# Campaign Hub

여러 체험단 사이트의 모집 정보를 한 곳에서 검색하고, 원하는 체험단을 빠르게 찾을 수 있는 체험단 모음 웹 서비스입니다.

초기 버전은 관리자가 직접 체험단 정보를 등록하는 방식으로 시작하고, 이후 크롤링과 추천 기능으로 확장합니다.

## 1. 프로젝트 목표

- 여러 플랫폼에 흩어진 체험단 모집 정보를 한 화면에서 조회
- 제목, 업체명, 키워드, 지역, 플랫폼, 카테고리 기반 검색 및 필터링
- 마감일, 최신 등록일, 조회수, 인기도 기준 정렬
- 회원별 즐겨찾기와 마이페이지 제공
- 관리자 등록 기능을 먼저 구현하고, 이후 외부 사이트 자동 수집으로 확장

## 2. 주요 사용자

| 사용자 | 주요 목적 |
| --- | --- |
| 비회원 | 체험단 목록 검색, 상세 정보 확인 |
| 회원 | 체험단 찜하기, 찜 목록 관리, 맞춤 추천 |
| 관리자 | 체험단 등록, 수정, 삭제, 회원 관리 |

## 3. 핵심 기능

### 체험단 조회

- 전체 체험단 목록 조회
- 최신순 정렬
- 마감임박순 정렬
- 조회수순 정렬
- 인기순 정렬
- 체험단 상세보기

### 검색

- 제목 검색
- 업체명 검색
- 키워드 검색
- 예시: 맛집, PT, 헬스, 호텔

### 필터

- 지역: 서울, 경기, 부산 등
- 플랫폼: 블로그, 인스타그램, 유튜브 등
- 카테고리: 맛집, 뷰티, 운동, 숙박, 여행 등

### 회원

- 회원가입
- 로그인
- 로그아웃
- 내 정보 수정

### 즐겨찾기

- 체험단 찜하기
- 찜 목록 조회
- 찜 삭제

### 관리자

- 체험단 등록
- 체험단 수정
- 체험단 삭제
- 회원 관리

### 확장 기능

- 마감 하루 전 알림
- 새 체험단 등록 알림
- 지도 기반 지역 검색
- 자연어 AI 검색
- 개인화 추천 시스템
- 외부 체험단 사이트 크롤링

## 4. Milestones

| 단계 | 목표 | 완료 기준 |
| --- | --- | --- |
| Milestone 1 | 프로젝트 기획 | README, 기능 목록, ERD 초안, UI 스케치, 폴더 구조 완성 |
| Milestone 2 | 체험단 목록 조회 | Entity, Repository, Service, Controller, 목록 API, 목록 화면 |
| Milestone 3 | 체험단 상세보기 | 상세 페이지, 제공 내역, 모집 기간, 모집 인원, 신청 링크 |
| Milestone 4 | 검색 기능 | 제목, 업체명, 키워드 검색 |
| Milestone 5 | 필터 기능 | 지역, 플랫폼, 카테고리 필터 |
| Milestone 6 | 정렬 기능 | 최신순, 마감임박순, 조회수순, 인기순 |
| Milestone 7 | 회원 기능 | 회원가입, 로그인, 로그아웃 |
| Milestone 8 | 즐겨찾기 | 찜하기, 찜 목록, 찜 삭제 |
| Milestone 9 | 마이페이지 | 내가 찜한 체험단, 내 정보 수정 |
| Milestone 10 | 관리자 | 체험단 등록, 수정, 삭제, 회원 관리 |
| Milestone 11 | 크롤링 | 외부 사이트 데이터 수집 배치 |
| Milestone 12 | 배포 | Docker, AWS, 도메인, HTTPS, CI/CD |

## 5. 기술 스택 초안

### Backend

- Java 17
- Spring Boot
- Spring Web
- Spring Data JPA
- Spring Security
- Validation
- QueryDSL 또는 Spring Data Specification

### Database

- 개발: H2 또는 MySQL
- 운영: MySQL 또는 PostgreSQL

### Frontend

- 1차: Thymeleaf 또는 React 중 선택
- 포트폴리오 확장: React + TypeScript 권장

### Infra

- Docker
- AWS EC2 또는 Lightsail
- GitHub Actions
- Nginx
- HTTPS

## 6. 문서

- [프로젝트 청사진](docs/blueprint.md)
- [기능 목록](docs/features.md)
- [ERD 초안](docs/erd.md)
- [UI 스케치](docs/ui-sketch.md)
- [폴더 구조 설계](docs/folder-structure.md)
- [API 초안](docs/api.md)

## 7. 현재 구축 상태

Milestone 1 기획 산출물과 Spring Boot 1차 골격을 구축했습니다.

- Gradle 기반 Spring Boot 프로젝트 생성
- H2 개발 DB 설정
- `Campaign` Entity 생성
- 관리자 체험단 CRUD API 생성
- 사용자 체험단 목록/상세 조회 API 생성
- 관리자와 사용자 기능을 코로케이션 구조로 분리

### 코로케이션 구조

```text
src/main/java/com/campaignhub/
  campaign/
    domain/
    repository/
  user/
    campaign/
      controller/
      service/
      dto/
  admin/
    campaign/
      controller/
      service/
      dto/
  global/
    common/
    config/
    error/
```

공통 도메인과 저장소는 `campaign`에 두고, 사용자 화면/API에서 필요한 기능은 `user/campaign`, 관리자 화면/API에서 필요한 기능은 `admin/campaign`에 함께 배치합니다.

### 초기 API

| Method | URL | 대상 | 설명 |
| --- | --- | --- | --- |
| GET | `/api/campaigns` | 사용자 | 모집 중 체험단 목록 조회 |
| GET | `/api/campaigns/{campaignId}` | 사용자 | 모집 중 체험단 상세 조회 |
| GET | `/api/admin/campaigns` | 관리자 | 전체 체험단 목록 조회 |
| GET | `/api/admin/campaigns/{campaignId}` | 관리자 | 체험단 상세 조회 |
| POST | `/api/admin/campaigns` | 관리자 | 체험단 등록 |
| PUT | `/api/admin/campaigns/{campaignId}` | 관리자 | 체험단 수정 |
| DELETE | `/api/admin/campaigns/{campaignId}` | 관리자 | 체험단 삭제 |

목록 정렬 예시:

```text
GET /api/campaigns?sort=latest
GET /api/campaigns?sort=deadline
GET /api/campaigns?sort=views
GET /api/campaigns?sort=popular
```

## 8. 실행 방법

Java 17과 Gradle 또는 Gradle Wrapper가 필요합니다.

```bash
gradle bootRun
```

실행 후 확인:

```text
http://localhost:8080/api/campaigns
http://localhost:8080/h2-console
```

## 9. 초기 개발 순서

1. Spring Boot 프로젝트 생성
2. Campaign Entity 설계
3. 목록 조회 API 구현
4. 목록 화면 구현
5. 상세보기 구현
6. 검색, 필터, 정렬 추가
7. 회원과 즐겨찾기 기능 추가
8. 관리자 등록 기능 추가
9. 크롤링과 추천 기능으로 확장

## 10. 프로젝트 이름 후보

- Campaign Hub
- Review Campaign Hub
- 체험단 허브
- 리뷰 체험단 모음
