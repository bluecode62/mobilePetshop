# 🐶 펫쇼핑몰 댕냥베베(모바일)
 :모바일 환경을 기준으로 제작한 펫 쇼핑몰 UI 퍼블리싱 프로젝트입니다.<br />
상품 탐색부터 구매까지의 흐름을 고려하여 카테고리 필터, 페이지네이션, 스크롤 기반 구매 UI 등을 구현했습니다.

## 🛠 사용 기술
- HTML5
- CSS3/SCSS
- JavaScript (ES6)

## 📂 페이지 구성
- 메인 페이지 (index.html)
- 상품 리스트 서브 페이지 (sub.html)
- 상품 상세 디테일 페이지 (detail.html)


## ✨ 주요 기능
1. 	카테고리 상품 분류 UI – 메인 페이지 (index.html)
2. 카테고리 기반 페이지네이션 (API 가정) – 서브 페이지 (sub.html)
3. 스크롤 기반 구매 UI 노출 & 장바구니 수량 관리 – 디테일 페이지 (detail.html)

<h1>카테고리 기반 상품 분류 UI</h1>
<img width="633" height="710" alt="데이터01" src="https://github.com/user-attachments/assets/2b011ecb-cd3d-40a4-ac7e-eb0d1669c5f9" />
<img width="828" height="1120" alt="category01" src="https://github.com/user-attachments/assets/1353687b-b687-49cd-99f5-6ae450a9b2f3" /><br />

* 상품 데이터를 배열로 관리
* filter()를 사용하여 카테고리별 데이터 분리
* innerHTML로 리스트 재렌더링
* 클릭된 버튼에 active 클래스 적용


💡 상품 데이터 구조

```javascript
const productData = [
  {
    id: 1,
    category: "사료",
    name: "더리얼 그레인프리 크런치 닭고기 어덜트 1.6kg",
    image: "./images/bestItem01.jpeg",
    sale: 20,
    price: 26400,
    rate: 4.5,
    review: 500,
  },
];
```
📝 상품 정보는 객체 형태로 관리하고, 이를 배열로 구성하여 사용<br />
👉 카테고리 필터링 및 상품 렌더링을 효율적으로 처리<br />


<h5>카테고리 필터링 및 상품 렌더링 코드</h5><br />

```javascript 
const categoryBtns = document.querySelectorAll(".categorys li ");
const productList = document.querySelector(".bestProduct_list");

function renderProducts(category) {
  const filtered = productData.filter((item) => item.category === category);
  let html = "";

  filtered.forEach((item) => {
    html += `
      <li>
        <a href="./sub.html">
          <div class="bestItem_img">
            <img src="${item.image}" alt="${item.name}" />
          </div>
          <div class="bestItem_txt">
            <div class="product_name">${item.name}</div>
            <span class="sale">${item.sale ? item.sale + "%" : ""}</span>
            <span class="salePrice">${item.price.toLocaleString()}원</span>
            <div class="starReview">
              <div class="star">
                <img src="./images/start_icon.png" alt="별점 이미지" />
              </div>
              <div class="scoreCounts">
                <span class="rateScore">${item.rate}</span>
                <span class="review">(${item.review})</span>
              </div>
            </div>
          </div>
        </a>
      </li>
    `;
  });

  productList.innerHTML = html;
}

categoryBtns[0].classList.add("active");

categoryBtns.forEach((li) => {
  li.addEventListener("click", () => {
    categoryBtns.forEach((item) => item.classList.remove("active"));
    li.classList.add("active");

    renderProducts(li.textContent.trim());
  });
});

if (categoryBtns.length > 0) {
  renderProducts(categoryBtns[0].textContent.trim());
}
```

💡 코드의 핵심 흐름<br />

카테고리 버튼 클릭( categoryBtns )<br />
↓<br />
카테고리 값 가져오기( productData )<br />
↓<br />
filter()로 상품 데이터 추출 (  category: "사료" )<br />
↓<br />
innerHTML로 상품 리스트 재렌더링 ( renderProducts(category) )<br />
↓<br />
active 클래스로 현재 선택 상태 표시 ( li.classList.add("active"); )<br />

상단 카테고리 버튼 클릭 시,<br />
선택한 카테고리에 해당하는 상품만 화면에 다시 렌더링되도록 구현했습니다.<br />

전체 상품 데이터를 배열로 관리하고,<br />
클릭한 카테고리 값과 일치하는 데이터만 filter()로 추출한 뒤<br />
해당 목록을 동적으로 화면에 출력하는 방식으로 구현했습니다.<br />
현재 선택된 버튼에 active 클래스를 추가하여<br />
사용자가 어떤 카테고리를 보고 있는지 시각적으로 구분할 수 있도록 했습니다.<br />

```javascript
if (categoryBtns.length > 0) {
  renderProducts(categoryBtns[0].textContent.trim());
}

// 버튼이 존재하는지 먼저 확인
if (categoryBtns.length > 0)
= 카테고리 버튼이 하나 이상 존재할 때만 실행하도록 안전장치를 둔 코드

// 첫 번째 카테고리로 초기 상품 렌더링
renderProducts(categoryBtns[0].textContent.trim());

categoryBtns[0]
→ 첫 번째 카테고리 버튼

textContent
→ 버튼 안에 있는 텍스트 (카테고리 이름)

trim()
→ 앞뒤 공백 제거
= productData.category 값과 정확히 비교
```
<h5>초기 렌더링 처리</h5>

페이지가 처음 로드될 때 상품이 비어 보이지 않도록,<br />
첫 번째 카테고리를 기본값으로 설정하여 자동으로 렌더링되도록 구현했습니다.<br />
카테고리 버튼이 존재하는지 확인한 후,<br />
첫 번째 버튼의 텍스트를 기준으로 renderProducts()를 실행하도록 처리했습니다.<br />


<h1>카테고리 기반 페이지네이션 (API 가정)</h1>
<img width="622" height="917" alt="pagenation" src="https://github.com/user-attachments/assets/a6ad6b6e-f89b-4a93-813e-fd827b6762bc" />
<img width="522" height="1033" alt="패치01" src="https://github.com/user-attachments/assets/c1c2695c-b1b4-4361-a0db-d9341b305488" /><br />


실제 서버 API 통신을 가정하여 Promise 기반으로 데이터를 반환하도록 구현했습니다.<br />
fetchCategoryData() 함수는 카테고리 값을 전달받아,<br />
switch문을 통해 해당 카테고리에 맞는 상품 데이터를 반환합니다.<br />
setTimeout을 활용하여 실제 API 요청처럼 약간의 지연 시간을 주어<br />
비동기 처리 흐름을 연습했습니다.<br />
일치하는 데이터가 없는 경우에는 빈 배열을 반환하도록 예외 처리를 추가했습니다.<br />

```javascript
export const harnessData = [ ... ]; // 하네스 상품 배열
export const leashData = [ ... ]; // 목줄 상품 배열
// ... 나머지 카테고리 배열

export function fetchCategoryData(category) {
  return new Promise((resolve) => {
    setTimeout(() => {
      switch (category) {
        case "목줄": resolve(leashData); break;
        case "하네스": resolve(harnessData); break;
        // ...
        default: resolve([]);
      }
    }, 100);
  });
}
```
<h5>카테고리별 데이터 반환 함수</h5>

✏️ 카테고리별 상품을 각 배열로 관리 → 유지보수 용이<br />
✏️ Promise + setTimeout()으로 비동기 API 호출 가정<br />
✏️ resolve()를 통해 선택된 카테고리 데이터를 반환<br />


<img width="1053" height="1073" alt="patch02" src="https://github.com/user-attachments/assets/5b320dd3-c4fd-46c1-b22f-c7498a57d252" /><br />

<h5>렌더링 & 페이지네이션 로직</h5>

*카테고리 클릭<br />
*fetchCategoryData(category) 실행<br />
*Promise로 데이터 반환<br />
*then()에서 renderProducts() 호출<br />
*상품 목록 재렌더링<br />

실제 서버에서 데이터를 받아오는 상황을 가정하여,<br />
Promise 기반의 비동기 구조로 카테고리별 상품 데이터를 불러오도록 구현했습니다.<br />
fetchCategoryData() 함수에서 카테고리 값에 따라 다른 데이터를 반환하도록 구성하였으며,<br />
then()을 통해 데이터를 전달받아 API 통신 이후 화면이 업데이트되는 흐름을 구현했습니다.<br />


<img width="722" height="103" alt="patch04" src="https://github.com/user-attachments/assets/5c33e62b-094c-4ab4-a222-f3b2be0c3c09" /><br />

<h5>가격/할인 처리</h5>

일부 상품은 할인 정보가 있고,
일부는 없는 구조이기 때문에 조건부 렌더링을 적용했습니다.

```javascript
${item.salePercent ? Number(item.salePercent).toLocaleString() + "%" : ""}
```
👉 값이 있을 경우만 출력<br />
👉 없으면 빈 값 반환<br />

```javascript
function formatPrice(price) {
  if (!price) return "";
  return Number(price).toLocaleString() + "원";
}
```
👉 undefined / null / 빈 값 예외 처리<br />
👉 숫자 + '원'으로 반환<br />


<img width="612" height="410" alt="patch05" src="https://github.com/user-attachments/assets/fb949621-a853-4b9e-ac32-f46aba947bfe" /><br />

<h5>서브 카테고리 활성화 및 초기 렌더링</h5>

서브 카테고리 메뉴 클릭 시
선택된 메뉴에 .active 클래스를 적용하여
현재 보고 있는 카테고리를 시각적으로 표시하도록 구현했습니다.
카테고리 변경 시 해당 값에 맞는 데이터를
비동기로 불러와 상품 리스트를 재렌더링하도록 구성했습니다.

페이지 최초 로드 시에는
기본 카테고리인 "하네스" 데이터를 자동으로 불러와
초기 화면이 비어 보이지 않도록 처리했습니다.


<h1>스크롤 기반 구매바 노출 & 장바구니 수량 관리</h1>
<img width="918" height="1772" alt="buy01" src="https://github.com/user-attachments/assets/1c45a5f9-9a88-4f97-a37d-052e24f93127" /><br />

상품 상세 페이지에서 리뷰 영역을 지나면 구매 버튼 영역이 고정 노출되도록 구현했습니다.
스크롤 위치를 계산하여 특정 구간에서만 .fixed 클래스를 적용하도록 처리했습니다.
상품 수량 변경 시 총 금액이 실시간으로 계산되도록 구현하였으며,
장바구니 버튼 클릭 시 현재 수량을 누적하여 반영하도록 구성했습니다.

```javascript
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY || window.pageYOffset;
  const triggerBottom = trigger.offsetTop + trigger.offsetHeight;
  const inquiryTop = inquiry.offsetTop;

  if (scrollY >= triggerBottom && scrollY < inquiryTop - window.innerHeight) {
    buyBar.classList.add("fixed");
    Counter.classList.add("fixed");
  } else {
    buyBar.classList.remove("fixed");
    Counter.classList.remove("fixed");
  }
});
```

<h5>스크롤 위치에 따른 구매바 고정 노출</h5>

* 특정 영역(리뷰 박스)의 끝 지점을 기준으로 스크롤 위치 계산
* 문의 영역에 도달하기 전까지만 구매바 노출
* 조건에 따라 .fixed 클래스를 추가/제거

👉 사용자가 상품 정보를 충분히 확인한 뒤,
바로 구매할 수 있도록 화면 하단에 나타나는 UX 기능 

```javascript
add.addEventListener("click", () => {
  let count = Number(numBox.value);
  count++;

  numBox.value = count;
  choseNum.textContent = `${count}개`;
  totalSum.textContent = (count * price).toLocaleString() + "원";
});
```

<h5>상품 수량 증가/감소 및 실시간 가격 계산</h5>

* 수량 버튼 클릭 시 값 증가/감소
* 현재 수량에 따라 총 금액을 실시간 계산
* 최소 수량은 1개로 제한하여 예외 처리

👉 사용자 입력에 따라 즉시 가격이 반영되도록 구현 

```javascript
wishBtn.addEventListener("click", () => {
  const count = Number(numBox.value);
  const current = Number(cartIcon.dataset.count);

  cartIcon.dataset.count = current + count;
});
```

<h5>장바구니 수량 누적 처리</h5>

* 장바구니 아이콘의 data-count 속성으로 현재 수량 관리
* 새로 추가한 수량을 기존 수량에 누적
* 담기 후 기본 수량과 금액 초기화

👉 HTML data-* 속성을 활용해 간단히 상태를 관리

🚀 트러블 슈팅

1️⃣헤더 fixed 처리 시 레이아웃 깨짐 문제

스크롤이 200px 이상 내려가면
헤더에 position: fixed를 적용하여 상단에 고정되도록 구현했습니다.
하지만 헤더가 fixed 상태가 되면서
기존 문서 흐름에서 빠지게 되었고,
그 아래에 있던 nav 및 콘텐츠 영역이 위로 올라오는 문제가 발생했습니다.
그 결과 UI가 순간적으로 흔들리며 어색해 보였습니다.

그래서 css 코드의 문제인 것으로 짐작해서 확인해본 결과,
position: fixed가 적용되면 해당 요소는 문서 흐름에서 제거됩니다.
따라서 헤더가 차지하고 있던 공간이 사라지면서
아래 요소들이 그 자리를 채우기 위해 위로 이동하게 된 것이었습니다.

```javascript
const placeholder = document.createElement("div");
placeholder.classList.add("header-placeholder");
placeholder.style.height = header.offsetHeight + "px";
placeholder.style.display = "none";

header.parentNode.insertBefore(placeholder, header);
```
👉 헤더가 고정될 때
   기존 높이만큼의 placeholder 요소를 동적으로 생성하여  빈 공간을 유지하도록 처리 
   
```javascript
if (window.scrollY >= 200) {
  header.classList.add("fixed");
  placeholder.style.display = "block";
} else {
  header.classList.remove("fixed");
  placeholder.style.display = "none";
}
```
👉  헤더가 fixed 될 때는 placeholder를 보이게 하여 레이아웃이 유지되도록 설정

position: fixed는 문서 흐름에서 요소를 제거한다는 점
레이아웃 구조를 고려하지 않으면 UI가 쉽게 깨질 수 있다는 점
단순 기능 구현보다, 구조 이해가 더 중요하다는 것

👉  이 경험을 통해 가상 요소(placeholder)를 활용한 공간 유지 방식의 중요성을 배웠습니다.

📍  Git Page 링크: https://bluecode62.github.io/mobilePetshop/
