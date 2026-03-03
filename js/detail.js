document.addEventListener("DOMContentLoaded", () => {
  const buyBar = document.querySelector(".button_list");
  const Counter = document.querySelector(".buyCount");
  const trigger = document.querySelector(".shortReview_box");
  const inquiry = document.querySelector(".inquryInfo");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const triggerBottom = trigger.offsetTop + trigger.offsetHeight; // 대상 요소의 끝부분
    const inquiryTop = inquiry.offsetTop;

    if (scrollY >= triggerBottom && scrollY < inquiryTop - window.innerHeight) {
      buyBar.classList.add("fixed");
      Counter.classList.add("fixed");
    } else {
      buyBar.classList.remove("fixed");
      Counter.classList.remove("fixed");
    }
  });

  const slider = document.querySelector(".detailItemImg");
  const items = slider.querySelectorAll(".detailItemImg li");

  const currentPage = document.querySelector(".currentPage");
  const totalPage = document.querySelector(".totalPage");

  const totalCount = items.length;
  totalPage.textContent = totalCount;

  function updateCurrentPage() {
    const itemWidth = slider.clientWidth;
    let index = Math.round(slider.scrollLeft / itemWidth);

    if (index < 0) index = 0;
    if (index > totalCount - 1) index = totalCount - 1;

    currentPage.textContent = index + 1;
  }

  let scrollTimer = null;
  slider.addEventListener("scroll", () => {
    clearTimeout(scrollTimer);

    scrollTimer = setTimeout(() => {
      updateCurrentPage();
      updateInsideArrows();
    }, 80);
  });

  updateCurrentPage();

  //페이지수 표시

  const left = document.querySelector(".indicator_left");
  const right = document.querySelector(".indicator_right");

  let currentIndex = 0;

  function moveTo(index) {
    const itemWidth = slider.clientWidth;

    slider.scrollTo({
      left: itemWidth * index,
      behavior: "smooth",
    });
  }

  right.addEventListener("click", () => {
    if (currentIndex >= items.length - 1) return;
    currentIndex++;
    moveTo(currentIndex);
  });

  left.addEventListener("click", () => {
    if (currentIndex <= 0) return;
    currentIndex--;
    moveTo(currentIndex);
  });
  //박스 화살표 이동

  const leftInside = document.querySelector(".leftInside");
  const rightInside = document.querySelector(".rightInside");

  function getCurrentIndex() {
    const itemWidth = slider.clientWidth;
    return Math.round(slider.scrollLeft / itemWidth);
  }

  function updateInsideArrows() {
    const index = getCurrentIndex();
    const lastIndex = items.length - 1;

    if(index === 0){
      leftInside.style.opacity = 0;
      rightInside.style.opacity = 1;
      return;
    }

    if(index === lastIndex){
      leftInside.style.opacity = 1;
      rightInside.style.opacity = 0;
      return;
    }

    leftInside.style.opacity = 1;
    rightInside.style.opacity = 1;
  }

  function moveToIndex(index){
    const itemWidth = slider.clientWidth;

    slider.scrollTo({
      left: itemWidth * index,
      behavior: "smooth",
    });
  }

  rightInside.addEventListener("click", () => {
    const current = getCurrentIndex();
    const lastIndex = items.length - 1;

    if(current >= lastIndex) return;

    moveToIndex(current + 1);
  });

  leftInside.addEventListener("click", () => {
    const current = getCurrentIndex();

    if(current <= 0) return;

    moveToIndex(current - 1);
  });
  //이미지 안쪽 화살표 이동

  const detailBtn = document.querySelector(".detailMore_btn");
  const gradient = document.querySelector(".gradient_overlay");
  const detailContainer = document.querySelector(".itemDetail_container");
  const icon = document.querySelector(".detailMore_btn i");

  detailBtn.addEventListener("click", () => {
    detailContainer.classList.toggle("on");

    if (detailContainer.classList.contains("on")) {
      gradient.style.display = "none";
      document.querySelector(".btnTxt").textContent = "상품설명 닫기";
      icon.classList.replace("fa-angle-down", "fa-angle-up");
    } else {
      gradient.style.display = "block";
      document.querySelector(".btnTxt").textContent = "상품설명 펼쳐보기";
      icon.classList.replace("fa-angle-up", "fa-angle-down");
    }
  });

  const add = document.querySelector(".add");
  const sub = document.querySelector(".sub");
  const numBox = document.querySelector(".numBox");
  const choseNum = document.querySelector(".choseNum");
  const totalSum = document.querySelector(".totalSum");
  const buyCount = document.querySelector(".buyCount");

  const price = Number(buyCount.dataset.price);

  add.addEventListener("click", () => {
    let count = Number(numBox.value);
    count++;

    numBox.value = count;
    choseNum.textContent = `${count}개`;
    totalSum.textContent = (count * price).toLocaleString() + "원";
  });

  sub.addEventListener("click", () => {
    let count = Number(numBox.value);

    if (count <= 1) {
      return;
    }

    count--;

    numBox.value = count;
    choseNum.textContent = `${count}개`;
    totalSum.textContent = (count * price).toLocaleString() + "원";
  });

  const cartIcon = document.querySelector(".cart");
  const wishBtn = document.querySelector(".wishBtn");

  wishBtn.addEventListener("click", () => {
    const count = Number(numBox.value);
    const current = Number(cartIcon.dataset.count);

    cartIcon.dataset.count = current + count;
    numBox.value = 1;
    choseNum.textContent = "1개";
    totalSum.textContent = price.toLocaleString() + "원";
  });
});
