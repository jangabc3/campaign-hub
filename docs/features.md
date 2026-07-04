# 기능 목록

## 사용자 기능

| 기능 | 설명 | 우선순위 |
| --- | --- | --- |
| 체험단 목록 조회 | 전체 체험단을 카드 또는 리스트로 조회 | High |
| 최신순 정렬 | 최근 등록된 체험단부터 조회 | High |
| 마감임박순 정렬 | 모집 마감일이 가까운 체험단부터 조회 | High |
| 상세보기 | 체험단의 제공 내역, 모집 기간, 인원, 링크 확인 | High |
| 제목 검색 | 제목에 포함된 단어로 검색 | High |
| 업체명 검색 | 업체명으로 검색 | High |
| 키워드 검색 | 맛집, PT, 호텔 등 키워드 검색 | High |
| 지역 필터 | 서울, 경기, 부산 등 지역별 필터 | High |
| 플랫폼 필터 | 블로그, 인스타그램, 유튜브 필터 | High |
| 카테고리 필터 | 맛집, 뷰티, 운동 등 카테고리 필터 | High |
| 조회수순 정렬 | 조회수가 높은 체험단부터 조회 | Medium |
| 인기순 정렬 | 찜 수와 조회수를 기반으로 정렬 | Medium |
| 회원가입 | 회원 계정 생성 | Medium |
| 로그인 | 회원 인증 | Medium |
| 로그아웃 | 인증 세션 종료 | Medium |
| 찜하기 | 관심 체험단 저장 | Medium |
| 찜 목록 | 내가 찜한 체험단 조회 | Medium |
| 찜 삭제 | 저장한 체험단 삭제 | Medium |
| 내 정보 수정 | 회원 정보 수정 | Medium |
| 마감 알림 | 마감 하루 전 알림 | Low |
| 새 체험단 알림 | 관심 조건의 신규 체험단 알림 | Low |
| 지도 검색 | 지도에서 지역을 선택해 조회 | Low |
| AI 검색 | 자연어 검색어를 조건으로 분석 | Low |
| 추천 | 사용자 행동 기반 체험단 추천 | Low |

## 관리자 기능

| 기능 | 설명 | 우선순위 |
| --- | --- | --- |
| 체험단 등록 | 새 체험단 모집 정보 등록 | High |
| 체험단 수정 | 기존 체험단 정보 수정 | High |
| 체험단 삭제 | 체험단 삭제 또는 비공개 처리 | High |
| 회원 관리 | 회원 목록 조회 및 권한 관리 | Medium |
| 크롤링 실행 | 외부 사이트 데이터 수집 | Low |
| 수집 로그 조회 | 크롤링 성공/실패 이력 확인 | Low |

## API 초안

| Method | URL | 설명 |
| --- | --- | --- |
| GET | `/api/campaigns` | 체험단 목록 조회 |
| GET | `/api/campaigns/{id}` | 체험단 상세 조회 |
| POST | `/api/admin/campaigns` | 체험단 등록 |
| PUT | `/api/admin/campaigns/{id}` | 체험단 수정 |
| DELETE | `/api/admin/campaigns/{id}` | 체험단 삭제 |
| POST | `/api/auth/signup` | 회원가입 |
| POST | `/api/auth/login` | 로그인 |
| POST | `/api/auth/logout` | 로그아웃 |
| POST | `/api/campaigns/{id}/favorites` | 찜하기 |
| DELETE | `/api/campaigns/{id}/favorites` | 찜 삭제 |
| GET | `/api/me/favorites` | 내 찜 목록 |
| GET | `/api/me` | 내 정보 조회 |
| PUT | `/api/me` | 내 정보 수정 |

