// Дано 3 блоки
// В лівій частині сторінки - перелік категорій.
// При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
// Клік на товар - інформацію про товар у правому блоці.
// В інформації товару - кнопка “купити”.
// При натисканні на “купити” з'являється повідомлення, що товар куплений і
// повернення у вихідний стан програми(коли відображається лише список категорій).

const categoriesIphone = document.querySelector(".categories-iphone");
const categoriesMac = document.querySelector(".categories-mac");
const categoriesWatch = document.querySelector(".categories-watch");

const productIphone = document.querySelector(".product-iphone");
const productMac = document.querySelector(".product-mac");
const productWatch = document.querySelector(".product-watch");

const productIphone2 = document.querySelector(".product-iphone__2");
const productIphone2info = document.querySelector(".product-iphone__2-info");

const productIphone3 = document.querySelector(".product-iphone__3");
const productIphone3info = document.querySelector(".product-iphone__3-info");

const productIphone4 = document.querySelector(".product-iphone__4");
const productIphone4info = document.querySelector(".product-iphone__4-info");

const buttonIphone2 = document.getElementById("button1");
const buttonIphone3 = document.getElementById("button2");
const buttonIphone4 = document.getElementById("button3");


categoriesIphone.addEventListener("click", () => {
    categoriesIphone.classList.add("active");
    categoriesMac.classList.remove("active");
    categoriesWatch.classList.remove("active");
    productIphone.setAttribute("style", "");
    productMac.setAttribute("style", "display: none");
    productWatch.setAttribute("style", "display: none");
});

categoriesMac.addEventListener("click", () => {
    categoriesMac.classList.add("active");
    categoriesIphone.classList.remove("active");
    categoriesWatch.classList.remove("active");
    productIphone.setAttribute("style", "display: none");
    productMac.setAttribute("style", "");
    productWatch.setAttribute("style", "display: none");
});


categoriesWatch.addEventListener("click", () => {
    categoriesWatch.classList.add("active");
    categoriesMac.classList.remove("active");
    categoriesIphone.classList.remove("active");
    productIphone.setAttribute("style", "display: none");
    productMac.setAttribute("style", "display: none");
    productWatch.setAttribute("style", "");
    productIphone.setAttribute("style", "display: none");
    productMac.setAttribute("style", "display: none");
});

productIphone2.addEventListener("click", () => {
    productIphone2info.classList.remove("none");
    productIphone3info.classList.add("none");
    productIphone4info.classList.add("none");
    productIphone2.classList.add("iphone");
    productIphone3.classList.remove("iphone");
    productIphone4.classList.remove("iphone");
})

productIphone3.addEventListener("click", () => {
    productIphone3info.classList.remove("none");
    productIphone2info.classList.add("none");
    productIphone3.classList.add("iphone");
    productIphone2.classList.remove("iphone");
    productIphone4.classList.remove("iphone");
    productIphone4info.classList.add("none");
})

productIphone4.addEventListener("click", () => {
    productIphone4info.classList.remove("none");
    productIphone2info.classList.add("none");
    productIphone4.classList.add("iphone");
    productIphone2.classList.remove("iphone");
    productIphone3info.classList.add("none");
    productIphone3.classList.remove("iphone");
})

buttonIphone2.addEventListener("click", () => {
    // alert("Вы купили iPhone 2G")
    // setTimeout(function () {
    //     location.reload();
    // }, 1000);

    productIphone2info.classList.add("none");
    productIphone2.classList.remove("iphone");
})

buttonIphone3.addEventListener("click", () => {
    alert("Вы купили iPhone 3G")
    setTimeout(function () {
        location.reload();
    }, 1000);
})

buttonIphone4.addEventListener("click", () => {
    alert("Вы купили iPhone 4")
    setTimeout(function () {
        location.reload();
    }, 1000);
})
