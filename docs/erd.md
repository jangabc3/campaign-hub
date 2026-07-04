# ERD 초안

## Mermaid ERD

```mermaid
erDiagram
    MEMBER ||--o{ FAVORITE : has
    MEMBER ||--o{ CAMPAIGN_VIEW : views
    MEMBER ||--o{ NOTIFICATION : receives
    CAMPAIGN ||--o{ FAVORITE : bookmarked
    CAMPAIGN ||--o{ CAMPAIGN_VIEW : viewed
    CAMPAIGN }o--|| CATEGORY : belongs_to
    CAMPAIGN }o--|| PLATFORM : uses
    CAMPAIGN }o--|| REGION : located_in
    CAMPAIGN }o--|| CAMPAIGN_SOURCE : collected_from
    CAMPAIGN_SOURCE ||--o{ CRAWL_LOG : has

    MEMBER {
        bigint id PK
        string email
        string password
        string nickname
        string role
        datetime created_at
        datetime updated_at
    }

    CAMPAIGN {
        bigint id PK
        string title
        string company_name
        text description
        text benefit
        date recruit_start_date
        date recruit_end_date
        int recruit_count
        string apply_url
        string thumbnail_url
        int view_count
        int favorite_count
        string status
        datetime created_at
        datetime updated_at
    }

    CATEGORY {
        bigint id PK
        string name
    }

    PLATFORM {
        bigint id PK
        string name
    }

    REGION {
        bigint id PK
        string sido
        string sigungu
    }

    FAVORITE {
        bigint id PK
        bigint member_id FK
        bigint campaign_id FK
        datetime created_at
    }

    CAMPAIGN_VIEW {
        bigint id PK
        bigint member_id FK
        bigint campaign_id FK
        string ip_address
        datetime viewed_at
    }

    NOTIFICATION {
        bigint id PK
        bigint member_id FK
        string type
        string title
        string message
        boolean read
        datetime created_at
    }

    CAMPAIGN_SOURCE {
        bigint id PK
        string source_name
        string source_url
        string collection_type
    }

    CRAWL_LOG {
        bigint id PK
        bigint source_id FK
        string status
        int collected_count
        text error_message
        datetime started_at
        datetime ended_at
    }
```

## 테이블 설명

| 테이블 | 설명 |
| --- | --- |
| `member` | 회원 정보 |
| `campaign` | 체험단 모집 정보 |
| `category` | 맛집, 뷰티, 운동, 숙박 등 카테고리 |
| `platform` | 블로그, 인스타그램, 유튜브 등 참여 플랫폼 |
| `region` | 시/도, 시/군/구 지역 정보 |
| `favorite` | 회원별 찜한 체험단 |
| `campaign_view` | 조회 이력 및 추천 데이터 |
| `notification` | 알림 |
| `campaign_source` | 직접 등록 또는 외부 수집 출처 |
| `crawl_log` | 크롤링 실행 로그 |

## Campaign 상태값

| 상태 | 설명 |
| --- | --- |
| `OPEN` | 모집 중 |
| `CLOSED` | 모집 종료 |
| `HIDDEN` | 관리자에 의해 숨김 처리 |

## Member 권한

| 권한 | 설명 |
| --- | --- |
| `USER` | 일반 회원 |
| `ADMIN` | 관리자 |

