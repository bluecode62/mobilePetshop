document.addEventListener("DOMContentLoaded", () => {
  const petBtn = document.querySelector(".selected");
  const options = document.querySelector(".options");

  petBtn.addEventListener("click", () => {
    options.classList.toggle("on");
  });

  const arcodian = document.querySelector(".arcodian");
  const subMenu = document.querySelector(".acordianMenu");
  const closeBtn = document.querySelector(".closeBtn");

  arcodian.addEventListener("click", () => {
    subMenu.style.transform = "translate(0)";
  });
  closeBtn.addEventListener("click", () => {
    subMenu.style.transform = "translate(-100%)";
  });

  const menuItems = document.querySelectorAll(".categoryList > li");

  menuItems.forEach((item) => {
    const btn = item.querySelector(".menuBtn");
    const inside = item.querySelector(".insideList");
    const icon = item.querySelector(".menuBtn i");

    if (!inside) return;

    btn.addEventListener("click", (e) => {
      e.preventDefault();

      menuItems.forEach((otherItem) => {
        if (otherItem !== item) {
          const otherInside = otherItem.querySelector(".insideList");
          const otherIcon = otherItem.querySelector(".menuBtn i");
          if (otherInside) {
            otherInside.classList.remove("on");
            if (otherIcon) {
              otherIcon.classList.remove("fa-angle-down");
              otherIcon.classList.add("fa-angle-right");
            }
          }
        }
      });

      inside.classList.toggle("on");

      if (inside.classList.contains("on")) {
        icon.classList.remove("fa-angle-right");
        icon.classList.add("fa-angle-down");
      } else {
        icon.classList.remove("fa-angle-down");
        icon.classList.add("fa-angle-right");
      }
    });
  });
  // 아코디언 메뉴, 속메뉴 기능

  const header = document.querySelector(".header_outer");
  const placeholder = document.createElement("div");
  placeholder.classList.add("header-placeholder");
  placeholder.style.height = header.offsetHeight + "px";
  placeholder.style.display = "none";
  header.parentNode.insertBefore(placeholder, header);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 200) {
      header.classList.add("fixed");
      placeholder.style.display = "block";
    } else {
      header.classList.remove("fixed");
      placeholder.style.display = "none";
    }
  });

  document.querySelector(".topBtn").addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  //헤더 높이상실 방지

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

  // 모달창 닫기
  const modal = document.getElementById("mobileModal");
  const closeButtons = document.querySelectorAll(".close");

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
