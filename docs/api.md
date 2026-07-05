# API 초안

## 사용자 API

### 체험단 목록 조회

```http
GET /api/campaigns?sort=latest
```

정렬 옵션:

| 값 | 설명 |
| --- | --- |
| `latest` | 최신순 |
| `deadline` | 마감 임박순 |
| `views` | 조회수순 |
| `popular` | 인기순 |

### 체험단 상세 조회

```http
GET /api/campaigns/{campaignId}
```

상세 조회 시 조회수가 1 증가합니다.

## 관리자 API

### 체험단 목록 조회

```http
GET /api/admin/campaigns
```

### 체험단 상세 조회

```http
GET /api/admin/campaigns/{campaignId}
```

### 체험단 등록

```http
POST /api/admin/campaigns
Content-Type: application/json
```

```json
{
  "title": "강서구 테스트 맛집 체험단",
  "companyName": "브랜드치킨",
  "benefit": "2인 식사권",
  "description": "방문 후 블로그 리뷰를 작성하는 체험단입니다.",
  "recruitStartDate": "2099-07-05",
  "recruitEndDate": "2099-07-14",
  "recruitCount": 10,
  "applyUrl": "https://example.com/campaigns/1",
  "thumbnailUrl": "https://example.com/images/1.jpg",
  "region": "서울 강서구",
  "platform": "블로그",
  "category": "맛집"
}
```

### 체험단 수정

```http
PUT /api/admin/campaigns/{campaignId}
Content-Type: application/json
```

```json
{
  "title": "강서구 테스트 맛집 체험단",
  "companyName": "브랜드치킨",
  "benefit": "2인 식사권",
  "description": "방문 후 블로그 리뷰를 작성하는 체험단입니다.",
  "recruitStartDate": "2099-07-05",
  "recruitEndDate": "2099-07-14",
  "recruitCount": 10,
  "applyUrl": "https://example.com/campaigns/1",
  "thumbnailUrl": "https://example.com/images/1.jpg",
  "region": "서울 강서구",
  "platform": "블로그",
  "category": "맛집",
  "status": "OPEN"
}
```

`status` 값은 `OPEN`, `CLOSED`, `HIDDEN` 중 하나입니다.

### 체험단 삭제

```http
DELETE /api/admin/campaigns/{campaignId}
```

