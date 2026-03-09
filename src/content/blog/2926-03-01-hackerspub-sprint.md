---
author: Jaeyeol Lee
pubDatetime: 2026-03-01T00:00:00.888Z
title: (2026-03-02) Hackers' Pub 스프린트 모임
slug: 2026-03-01-hackerspub-sprint
featured: true
tags:
  - sprint
description: 2026년 3월 1일/2일, 해커스펍 리뉴얼을 위한 스프린트 모임의 기록을 남깁니다.
---

# 해커스펍 리뉴얼 스프린트

- **모임 신청 페이지** : [https://moim.live/events/7719ceec-7421-4cbc-b182-885703fce656](https://moim.live/events/7719ceec-7421-4cbc-b182-885703fce656)
-  **모인 곳**: [튜링의 사과]
    - 서울 성동구 상원길 26 지하 1층, 튜링의 사과
-  **모인 날** : 2026년 3월 1일/2일 양일에 걸쳐서 오전 11시–오후 6시 진행

[튜링의 사과]: https://turingapple.com/

## 활동

### 홍민희 ([@dahlia](https://github.com/dahlia))

#### Hackers' Pub (web-next)

- [iOS 모바일 앱 알림 연동을 위한 APNS 토큰 저장 기능 추가](https://github.com/hackers-pub/hackerspub/pull/210)

### 이도건 ([@moreal](https://github.com/moreal))

#### Hackers' Pub (web-next)

- [단일 노트 페이지 버그 수정](https://github.com/hackers-pub/hackerspub/pull/213)
- [팔로잉 페이지 추가](https://github.com/hackers-pub/hackerspub/pull/209)
- [글 삭제 버튼 추가](https://github.com/hackers-pub/hackerspub/pull/207)
- [팔로우 버튼 추가](https://github.com/hackers-pub/hackerspub/pull/203)

### 이재열 ([@malkoG](https://github.com/malkoG))

#### Hackers' Pub (web-next)

- [WYSIWYG 에디터에 이미지 업로드 기능 추가](https://github.com/hackers-pub/hackerspub/pull/205)

#### Moim.live

- [위치 정보 기반의 체크인 기능 추가](https://github.com/moim-social/moim/pull/6)
- [현지화된 장소 안내를 위한 Google/Kakao/Naver 등 커스텁 지도 provider 지원](https://github.com/moim-social/moim/pull/12)
- [체크인 노트에 OSM 스냅숏 캡쳐 기반의 썸네일 이미지 추가](https://github.com/moim-social/moim/pull/10)
- [리모트 액터와 일대일 매칭되는 프록시 액터의 프로필 이미지 자동생성](https://github.com/moim-social/moim/pull/13)
- [PostHog Analytics 연동](https://github.com/moim-social/moim/pull/14)
- [그룹 액터를 위한 프로필 이미지 업로드 제공](https://github.com/moim-social/moim/pull/37)
- [인스턴스 어드민 패널 구축](https://github.com/moim-social/moim/pull/38)
- [상업용 배너 관리 기능 추가](https://github.com/moim-social/moim/pull/41)

### 김현서 ([@dodok8](https://github.com/dodok8))

#### Hackers' Pub (web-next)

- [Remote Follow 기능 추가](https://github.com/hackers-pub/hackerspub/pull/214)

### 서지혁 ([@limeburst](https://github.com/limeburst))]

#### Hackers' Pub (iOS)

[커밋 로그](https://github.com/hackers-pub/ios/commits/main/?author=limeburst&since=2026-03-01&until=2026-03-01)

- 리스트 렌더링 방식 개선: Timeline, Notifications, Explore, Search 뷰에서 SwiftUI `List`를 `ScrollView + LazyVStack(spacing: 0)`으로 교체.
- 타임라인 새로고침 로직 단순화: gap filling 로직을 제거하고 항상 전체 새로고침하도록 변경.

### 이하제 ([@Nebu1eto](https://github.com/Nebu1eto))

#### Hackers' Pub (web-next)

- [GraphQL 차단, 차단해제, 팔로워 삭제 추가](https://github.com/hackers-pub/hackerspub/pull/212)

#### Hackers' Pub (iOS)


[커밋 로그](https://github.com/hackers-pub/ios/commits/main/?author=Nebu1eto&since=2026-03-01&until=2026-03-01)

- 로그인 상태 UX 정리: 비로그인 시 새 글(New Post) 버튼 숨김 및 관련 정리(PR - #10 포함).
- 타임라인/상세 UI·렌더링 품질 개선: HTML 렌더링 성능/안정성 개선, 폰트 설정 반영, 리포스트 카드 내용/탭 동작 수정, 긴 작성자 라벨 말줄임.
- 콘텐츠 표시 기능 확장:
    - HTML 트렁케이트를 태그 구조 보존 방식으로 재작성하고 Read more 표시 추가
    - Quoted post(인용 게시물) 카드를 타임라인/상세에 노출
- 반응(Engagement) 기능 강화:
    - 리액션 피커 추가 + EN/KR 로컬라이징
    - Shares/Quotes 목록 시트(페이징) 추가
    - Engagement 툴바 동작을 통합하고 Quote 작성(Compose에서 quotedPostId 지원) 추가
    - Share/Quote 버튼의 탭 vs 길게누르기 동작 스왑 옵션(설정) 추가
- 공유 전 확인 다이얼로그 옵션(설정) 추가
- 게시물 삭제 기능 추가 + 삭제 전 확인(설정) + shared post는 삭제 숨김

### 이현준 ([@yihyunjoon](https://github.com/yihyunjoon))

#### Hackers' Pub (web-next)

- [파비콘 지원](https://github.com/hackers-pub/hackerspub/pull/215)


