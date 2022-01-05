# Painting-Board

<br>

## 소개
HTML, CSS, Vanilla JS를 이용한 미니 쇼핑몰 게임 앱을 만들었습니다.

<br>

## 구현 기능
  - JSON을 활용한 아이템 데이터 전달
  - 옷 종류, 색상 별로 상품 보여주기
  - 상점 아이콘을 누르면 리셋
  - Progressive Web App 적용

<br>

## 문제 사항
  - 로컬 호스트에서 확인 시 PWA 적용사항이 확인 되지만<br>깃헙 페이지 링크로 확인 시 적용 사항이 보이지 않는다.

  <img src="https://user-images.githubusercontent.com/93115007/148216962-3ef84c38-6962-4e0a-bd2e-9508ddaacbc6.png" width="500">
  <img src="https://user-images.githubusercontent.com/93115007/148217034-8d1de9a9-399a-4d9a-bf82-ee038dc8d307.png" width="500">

<br>

## 사용 기능 설명 
  - 데이터를 저장한 JSON파일을 fetch를 사용하여 받아왔습니다.
  - innerHTML을 이용하여 받아온 items 데이터를 html 요소로 변환해 페이지에 표시하도록 해주었습니다.
  - 화면에서 버튼을 클릭하면 data-key, data-value 값을 출력하게 해주었습니다.
  - addEventListener()을 사용하여 버튼을 누르면 필터링하는 함수를 실행하게 합니다.
  - catch를 통해 실패하면 에러 콘솔를 보여줍니다.

<br>

## 개발 환경
  - 개발도구: VSCode, Github
  - 사용언어: HTML, CSS, Vanilla JS

<br>

## Reference
  [드림코딩by엘리](https://www.youtube.com/c/드림코딩by엘리)