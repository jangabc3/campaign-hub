# 폴더 구조 설계

## 선택한 구조

현재 프로젝트는 `Spring Boot API`를 기준으로 시작합니다. 화면은 이후 Thymeleaf 또는 React로 붙일 수 있도록 API를 먼저 안정화합니다.

관리자와 사용자는 같은 `Campaign` 도메인을 사용하지만, API 목적과 응답 형태가 다르므로 기능 단위로 코로케이션합니다.

```text
campaign-hub/
  build.gradle
  settings.gradle
  README.md
  docs/
    blueprint.md
    features.md
    erd.md
    ui-sketch.md
    folder-structure.md
  src/
    main/
      java/
        com/campaignhub/
          CampaignHubApplication.java
          global/
            common/
              BaseTimeEntity.java
            config/
              JpaConfig.java
            error/
              ErrorResponse.java
              GlobalExceptionHandler.java
          campaign/
            domain/
              Campaign.java
              CampaignStatus.java
            repository/
              CampaignRepository.java
          user/
            campaign/
              controller/
                CampaignUserController.java
              service/
                CampaignUserService.java
              dto/
                CampaignListResponse.java
                CampaignDetailResponse.java
          admin/
            campaign/
              controller/
                CampaignAdminController.java
              service/
                CampaignAdminService.java
              dto/
                CampaignCreateRequest.java
                CampaignUpdateRequest.java
                CampaignAdminResponse.java
      resources/
        application.yml
        data.sql
    test/
      java/
        com/campaignhub/
          CampaignHubApplicationTests.java
```

## 코로케이션 원칙

관련 변경이 자주 함께 일어나는 파일을 같은 기능 폴더 안에 둡니다.

| 영역 | 역할 |
| --- | --- |
| `campaign/domain` | 사용자와 관리자가 함께 쓰는 핵심 Entity, Enum |
| `campaign/repository` | 공통 저장소 |
| `user/campaign` | 사용자 체험단 조회 API, 사용자 응답 DTO |
| `admin/campaign` | 관리자 체험단 CRUD API, 관리자 요청/응답 DTO |
| `global` | 공통 설정, 공통 Entity, 예외 응답 |

## 사용자와 관리자 분리 기준

### 사용자 영역

사용자 영역은 공개 서비스 기능을 담당합니다.

- 모집 중인 체험단만 조회
- 목록/상세 조회
- 조회수 증가
- 이후 검색, 필터, 즐겨찾기, 추천 기능 추가

### 관리자 영역

관리자 영역은 데이터 관리 기능을 담당합니다.

- 전체 체험단 조회
- 체험단 등록
- 체험단 수정
- 체험단 삭제
- 이후 회원 관리, 수집 로그 관리 추가

## CRUD 기준

| 기능 | 사용자 | 관리자 |
| --- | --- | --- |
| Create | 즐겨찾기, 회원가입에서 사용 예정 | 체험단 등록 |
| Read | 체험단 목록/상세 조회 | 전체 체험단 조회 |
| Update | 내 정보 수정에서 사용 예정 | 체험단 수정 |
| Delete | 찜 삭제에서 사용 예정 | 체험단 삭제 |

## 다음 확장 구조

회원과 즐겨찾기 기능을 추가하면 다음처럼 확장합니다.

```text
com/campaignhub/
  user/
    member/
      controller/
      service/
      dto/
    favorite/
      controller/
      service/
      dto/
  admin/
    member/
      controller/
      service/
      dto/
```

외부 수집 기능은 관리 기능과 분리해 `crawler` 영역에 둡니다.

```text
com/campaignhub/
  crawler/
    scheduler/
    service/
    client/
    dto/
```
