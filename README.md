# 🐶 펫쇼핑몰 댕냥베베(모바일)
 
## 🛠 사용 기술
- HTML5
- CSS3
- JavaScript

## 📂 페이지 구성
- 메인 페이지
- 상품 리스트 서브 페이지
- 상품 상세 디테일 페이지


## ✨ 주요 기능
1. 카테고리 분류버튼 – 메인 페이지 (index.html)
2. API 환경을 가정한 페이지네이션 기눙 구현 – 서브 페이지 (sub.html)
3. 스크롤 구매버튼 노출 – 디테일 페이지 (detail.html)


<h1>카테고리 분류버튼</h1>
<img width="633" height="710" alt="데이터01" src="https://github.com/user-attachments/assets/2b011ecb-cd3d-40a4-ac7e-eb0d1669c5f9" />
<img width="828" height="1120" alt="카테고리01" src="https://github.com/user-attachments/assets/e907d88d-45ed-49cd-894e-9c14dc9c0256" /><br />

* 상품 데이터를 배열로 관리
* filter()를 사용하여 카테고리별 데이터 분리
* innerHTML로 리스트 재렌더링
* 클릭된 버튼에 active 클래스 적용

상단 카테고리 버튼 클릭 시,
선택한 카테고리에 해당하는 상품만 화면에 다시 렌더링되도록 구현했습니다.

전체 상품 데이터를 배열로 관리하고,
클릭한 카테고리 값과 일치하는 데이터만 filter()로 추출한 뒤
해당 목록을 동적으로 화면에 출력하는 방식으로 구현했습니다.
현재 선택된 버튼에 active 클래스를 추가하여
사용자가 어떤 카테고리를 보고 있는지 시각적으로 구분할 수 있도록 했습니다.
