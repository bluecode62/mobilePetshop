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
2. API 환경을 가정한 페이지네이션  – 서브 페이지 (sub.html)
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


 if (categoryBtns.length > 0) {
    renderProducts(categoryBtns[0].textContent.trim());
  }
  
<h5>초기 렌더링 처리</h5>

페이지가 처음 로드될 때 상품이 비어 보이지 않도록,
첫 번째 카테고리를 기본값으로 설정하여 자동으로 렌더링되도록 구현했습니다.

카테고리 버튼이 존재하는지 확인한 후,
첫 번째 버튼의 텍스트를 기준으로 renderProducts()를 실행하도록 처리했습니다.


<h1>API 환경을 가정한 페이지네이션</h1>
<img width="622" height="917" alt="api01" src="https://github.com/user-attachments/assets/5db25e17-4b44-4f3f-a6e3-601a7533be7f" />
<img width="522" height="1033" alt="패치01" src="https://github.com/user-attachments/assets/c1c2695c-b1b4-4361-a0db-d9341b305488" /><br />

<h5>카테고리별 데이터 반환 함수</h5>

실제 서버 API 통신을 가정하여 Promise 기반으로 데이터를 반환하도록 구현했습니다.
fetchCategoryData() 함수는 카테고리 값을 전달받아,
switch문을 통해 해당 카테고리에 맞는 상품 데이터를 반환합니다.
setTimeout을 활용하여 실제 API 요청처럼 약간의 지연 시간을 주어
비동기 처리 흐름을 연습했습니다.
일치하는 데이터가 없는 경우에는 빈 배열을 반환하도록 예외 처리를 추가했습니다.

