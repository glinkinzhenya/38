// Дано 3 блоки
// В лівій частині сторінки - перелік категорій.
// При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
// Клік на товар - інформацію про товар у правому блоці.
// В інформації товару - кнопка “купити”.
// При натисканні на “купити” з'являється повідомлення, що товар куплений і
// повернення у вихідний стан програми(коли відображається лише список категорій).


const categories = [
    {
        categories: "iphone",
        img: "img/iphone.png"
    },
    {
        categories: "notebook",
        img: "img/mac.png"
    },
    {
        categories: "watch",
        img: "img/watch.png"
    },
];

const product = [
    {
        categories: "iphone",
        name: "iPhone 2G",
        img: "img/1.png",
        description: "<p>Сеть: GSM / GPRS WCDMA / HSDPA (850 / 1900 / 2100 МГц)</p><p> Операционная система: iPhone 2.0 OS.</p><p>Дисплей: сенсорный, 3,5 дюйма, 480 х 320 точек</p><p>Аккумулятор: 1400 мА*ч Li-Ion, 8 ч разг.(GSM), 24 ч музыки</p><p>Экран: 3.5, сенсорный, 480x320, емкостный, TFT, 16 млн. ...</p><p>Камера: 2 мпикс, 1600x1200, пинч-зум</p><p>Вид: Моноблок, 135 г, 115x61x11.6 мм</p>"
    },
    {
        categories: "iphone",
        name: "iPhone 3G",
        img: "img/2.png",
        description: "<p>Сеть: GSM / GPRS WCDMA / HSDPA (850 / 1900 / 2100 МГц)</p><p> Операционная система: iPhone 2.0 OS.</p><p>Дисплей: сенсорный, 3,5 дюйма, 480 х 320 точек</p><p>Аккумулятор: 1400 мА*ч Li-Ion, 8 ч разг.(GSM), 24 ч музыки</p><p>Экран: 3.5, сенсорный, 480x320, емкостный, TFT, 16 млн. ...</p><p>Камера: 2 мпикс, 1600x1200, пинч-зум</p><p>Вид: Моноблок, 135 г, 115x61x11.6 мм</p>"
    },
    {
        categories: "notebook",
        name: "macBook Air",
        img: "img/mac1.png",
        description: "<p>Сеть: GSM / GPRS WCDMA / HSDPA (850 / 1900 / 2100 МГц)</p><p> Операционная система: iPhone 2.0 OS.</p><p>Дисплей: сенсорный, 3,5 дюйма, 480 х 320 точек</p><p>Аккумулятор: 1400 мА*ч Li-Ion, 8 ч разг.(GSM), 24 ч музыки</p><p>Экран: 3.5, сенсорный, 480x320, емкостный, TFT, 16 млн. ...</p><p>Камера: 2 мпикс, 1600x1200, пинч-зум</p><p>Вид: Моноблок, 135 г, 115x61x11.6 мм</p>"
    },
    {
        categories: "notebook",
        name: "iMac",
        img: "img/mac2.png",
        description: "<p>Сеть: GSM / GPRS WCDMA / HSDPA (850 / 1900 / 2100 МГц)</p><p> Операционная система: iPhone 2.0 OS.</p><p>Дисплей: сенсорный, 3,5 дюйма, 480 х 320 точек</p><p>Аккумулятор: 1400 мА*ч Li-Ion, 8 ч разг.(GSM), 24 ч музыки</p><p>Экран: 3.5, сенсорный, 480x320, емкостный, TFT, 16 млн. ...</p><p>Камера: 2 мпикс, 1600x1200, пинч-зум</p><p>Вид: Моноблок, 135 г, 115x61x11.6 мм</p>"
    },
    {
        categories: "notebook",
        name: "macBook pro",
        img: "img/mac3.png",
        description: "<p>Сеть: GSM / GPRS WCDMA / HSDPA (850 / 1900 / 2100 МГц)</p><p> Операционная система: iPhone 2.0 OS.</p><p>Дисплей: сенсорный, 3,5 дюйма, 480 х 320 точек</p><p>Аккумулятор: 1400 мА*ч Li-Ion, 8 ч разг.(GSM), 24 ч музыки</p><p>Экран: 3.5, сенсорный, 480x320, емкостный, TFT, 16 млн. ...</p><p>Камера: 2 мпикс, 1600x1200, пинч-зум</p><p>Вид: Моноблок, 135 г, 115x61x11.6 мм</p>"
    },
    {
        categories: "watch",
        name: "apple watch white",
        img: "img/watch1.png",
        description: "<p>Сеть: GSM / GPRS WCDMA / HSDPA (850 / 1900 / 2100 МГц)</p><p> Операционная система: iPhone 2.0 OS.</p><p>Дисплей: сенсорный, 3,5 дюйма, 480 х 320 точек</p><p>Аккумулятор: 1400 мА*ч Li-Ion, 8 ч разг.(GSM), 24 ч музыки</p><p>Экран: 3.5, сенсорный, 480x320, емкостный, TFT, 16 млн. ...</p><p>Камера: 2 мпикс, 1600x1200, пинч-зум</p><p>Вид: Моноблок, 135 г, 115x61x11.6 мм</p>"
    },
    {
        categories: "watch",
        name: "apple watch metal",
        img: "img/watch2.png",
        description: "<p>Сеть: GSM / GPRS WCDMA / HSDPA (850 / 1900 / 2100 МГц)</p><p> Операционная система: iPhone 2.0 OS.</p><p>Дисплей: сенсорный, 3,5 дюйма, 480 х 320 точек</p><p>Аккумулятор: 1400 мА*ч Li-Ion, 8 ч разг.(GSM), 24 ч музыки</p><p>Экран: 3.5, сенсорный, 480x320, емкостный, TFT, 16 млн. ...</p><p>Камера: 2 мпикс, 1600x1200, пинч-зум</p><p>Вид: Моноблок, 135 г, 115x61x11.6 мм</p>"
    },
    {
        categories: "watch",
        name: "apple watch red",
        img: "img/watch3.png",
        description: "<p>Сеть: GSM / GPRS WCDMA / HSDPA (850 / 1900 / 2100 МГц)</p><p> Операционная система: iPhone 2.0 OS.</p><p>Дисплей: сенсорный, 3,5 дюйма, 480 х 320 точек</p><p>Аккумулятор: 1400 мА*ч Li-Ion, 8 ч разг.(GSM), 24 ч музыки</p><p>Экран: 3.5, сенсорный, 480x320, емкостный, TFT, 16 млн. ...</p><p>Камера: 2 мпикс, 1600x1200, пинч-зум</p><p>Вид: Моноблок, 135 г, 115x61x11.6 мм</p>"
    }
]

const container = document.createElement("div");
container.classList.add("container");
document.body.append(container);

const icon = document.createElement("div");
icon.classList.add("categories");
container.append(icon);

const number = document.createElement("div");
number.classList.add("product");
container.append(number);

const inform = document.createElement("div");
inform.classList.add("inform");
container.append(inform);

categories.forEach(i => {
    const div = document.createElement("div");
    div.classList.add(`klass`);
    icon.append(div);

    const img = document.createElement("img");
    img.setAttribute("src", `${i.img}`);
    div.append(img);

    div.addEventListener("click", () => {
        number.innerHTML = "";
        inform.innerHTML = "";

        product.forEach((y) => {
            if (i.categories === y.categories) number.append(rander(y));
        });
    });
});

function rander(y, per) {

    if (per) {
        const iphone = document.createElement("div");
        const iphoneName = document.createElement("p");
        iphone.append(iphoneName);
        iphoneName.innerText = `${y.name}`;
        const img = document.createElement("img");
        img.setAttribute("src", `${y.img}`);
        img.setAttribute("width", `80px`);
        iphone.append(img);

        const forDescription = document.createElement("div");
        forDescription.innerHTML = `${y.description}`;
        iphone.append(forDescription);
        const forButton = document.createElement("div");
        const button = document.createElement("button");
        button.classList.add("button");
        button.innerText = `Придбати`;
        forButton.append(button);
        forDescription.append(forButton);
        inform.append(iphone);

        button.addEventListener("click", () => {
            alert(`Вы придбали ${y.name}`)
            location.reload();
        });

    } else {

        const iphone = document.createElement("div");
        const iphoneName = document.createElement("p");
        iphone.append(iphoneName);
        iphoneName.innerText = `${y.name}`;
        const img = document.createElement("img");
        img.setAttribute("src", `${y.img}`);
        img.setAttribute("width", `80px`);
        iphone.append(img);

        iphone.addEventListener("click", () => {
            inform.innerHTML = "";

            console.log(`${y.name}`);
            rander(y, "l")
        });
        return iphone;
    }
}