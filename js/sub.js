import { fetchCategoryData } from "./data02.js";

document.addEventListener("DOMContentLoaded", () => {
  const productList = document.querySelector(".newProductList");
  const categoryItems = document.querySelectorAll(".category_list ul li a");

  function renderProducts(products) {
    productList.innerHTML = "";
    products.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `
       <a href="./detail.html">
              <div class="itemImg_box">
                <img src="${item.img}" alt="${item.name}" />
              </div>
              <div class="itemTxt_box">
                <div class="product_name">
                ${item.name}
                </div>
                <div class="ratePrice_box">
                  <div class="starReview">
                    <div class="star">
                      <img src="./images/start_icon.png" alt="별점 이미지" />
                    </div>
                    <div class="scoreCounts">
                      <span class="rateScore">${item.rate}</span>
                      <span class="review">(${item.review})</span>
                    </div>
                  </div>
                  <div class="price_box">
                    <div class="sale">${item.salePercent ? Number(item.salePercent).toLocaleString() + "%" : ""}</div>
                    <div class="dualPrice">
                      <div class="originalPrice">${formatPrice(item.originalPrice)}</div>
                      <div class="salePrice">${item.salePrice ? Number(item.salePrice).toLocaleString() + "원" : ""}</div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
      `;
      productList.appendChild(li);
    });
  }

  function formatPrice(price) {
    if (price === undefined || price === null || price === "") return "";
    return Number(price).toLocaleString() + "원";
  }

  categoryItems.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const category = btn.dataset.category;

      document
        .querySelectorAll(".category_list ul li")
        .forEach((li) => li.classList.remove("active"));
      btn.parentElement.classList.add("active");

      fetchCategoryData(category).then(renderProducts);
    });
  });

  fetchCategoryData("하네스").then(renderProducts);
});
