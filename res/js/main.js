const rangeControllerFirst = document.querySelector(".controller-left");
const rangeControllerSecond = document.querySelector(".controller-right");
const leftMenuRangerHeader = document.querySelector(".left-menu__ranger-header");
const leftMenuRangerControllerBack = document.querySelector(".left-menu__ranger-controller-back");
rangeControllerFirst.addEventListener('input', (e)=>{
    if(rangeControllerFirst.value - rangeControllerSecond.value > 0){
        leftMenuRangerControllerBack.style.width = `${rangeControllerFirst.value - rangeControllerSecond.value}%`;
        leftMenuRangerHeader.innerHTML = `Prices<br>Ranger: $${rangeControllerSecond.value} - $${rangeControllerFirst.value}`;
    }else{
        leftMenuRangerControllerBack.style.left = `${rangeControllerFirst.value}%`;
        leftMenuRangerControllerBack.style.width = `${rangeControllerSecond.value - rangeControllerFirst.value}%`;    
        leftMenuRangerHeader.innerHTML = `Prices<br>Ranger: $${rangeControllerFirst.value} - $${rangeControllerSecond.value}`;
    }
});
rangeControllerSecond.addEventListener('input', (e)=>{
    if(rangeControllerFirst.value - rangeControllerSecond.value > 0){
        leftMenuRangerHeader.innerHTML = `Prices<br>Ranger: $${rangeControllerSecond.value} - $${rangeControllerFirst.value}`;
        leftMenuRangerControllerBack.style.left = `${rangeControllerSecond.value}%`;
        leftMenuRangerControllerBack.style.width = `${rangeControllerFirst.value - rangeControllerSecond.value}%`;
    }else{
        leftMenuRangerControllerBack.style.width = `${rangeControllerSecond.value - rangeControllerFirst.value}%`;
        leftMenuRangerHeader.innerHTML = `Prices<br>Ranger: $${rangeControllerFirst.value} - $${rangeControllerSecond.value}`;
    }
});

let arrayOfData = [
    {
        header: "ASUS ROG 270 React",
        price: "$299,43",
        description: `Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...`,
        link: "./product.html",
        image: "res/assets/comp.png"
    },
    {
        header: "ASUS ROG 270 React",
        price: "$299,43",
        description: `Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...`,
        link: "./product.html",
        image: "res/assets/comp.png"
    },
    {
        header: "ASUS ROG 270 React",
        price: "$299,43",
        description: `Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...`,
        link: "./product.html",
        image: "res/assets/comp.png"
    },
    {
        header: "ASUS ROG 270 React",
        price: "$299,43",
        description: `Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...`,
        link: "./product.html",
        image: "res/assets/comp.png"
    },
    {
        header: "ASUS ROG 300 React",
        price: "$100,99",
        description: `Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...`,
        link: "./product.html",
        image: "res/assets/comp.png"
    }
];
function generateList(arrayOfData){

   const data = document.querySelector(".goods-list__content");
    data.innerHTML = '';
    arrayOfData.forEach((e)=>{
        let item = `
        <div class="goods-list__item">
        <div class="goods-list__item-description">
            <div class="goods-list__item-header">
                ${e.header}
            </div>
            <div class="goods-list__rate">
                <img src="res/assets/star.svg" alt="">
                <img src="res/assets/star.svg" alt="">
                <img src="res/assets/star.svg" alt="">
                <img src="res/assets/star.svg" alt="">
                <img src="res/assets/star.svg" alt="">
                <span class="goods-list__reveiw">0 reveiws</span>
                <span class="goods-list__reveiw_submit">Submit a review</span>
            </div>
            <div class="devider"></div>
            <div class="goods-list__item-price">
                ${e.price}
            </div>
            <div class="goods-list__item-description-text">
                Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique
                ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin
                vulputate g nisl ut dolor ...
            </div>
            <div class="goods-list__item-buy">
                <button class="goods-list__item-buy-button"><img src="res/assets/cart_2.svg" alt=""> Add to
                    card</button>
                <button  class="goods-list__item-to-fav-button"><img src="res/assets/hearts.svg" alt=""></button>
            </div>
        </div>
        <div class="goods-list__item-image">
            <img src="${e.image}" width="300" alt="">
        </div>
    </div>
    <div class="devider"></div>
        `;
        data.innerHTML = data.innerHTML + item; 
    });

}
function generateGrid(arrayOfData){

    const data = document.querySelector(".goods-list__content");
     data.innerHTML = '';
     arrayOfData.forEach((e)=>{
         let item = `
         <div class="goods-grid__item">
                    <div class="goods-grid__item-image">
                        <img src="res/assets/comp.png" alt="">
                    </div>
                    <div class="goods-grid__item-header">
                        ${e.header}
                    </div>
                    <div class="goods-list__rate">
                        <img src="res/assets/star.svg" alt="">
                        <img src="res/assets/star.svg" alt="">
                        <img src="res/assets/star.svg" alt="">
                        <img src="res/assets/star.svg" alt="">
                        <img src="res/assets/star.svg" alt="">
                    </div>
                    <div class="goods-grid__item-price-row">
                        <div class="goods-grid__item-price">
                            ${e.price}
                        </div>
                        <div class="goods-grid__item-price-old">
                            $534,33
                        </div>
                        <div class="goods-grid__item-price-discount">
                            24% Off
                        </div>
                        
                    </div>
                </div>
         `;
         data.innerHTML = data.innerHTML + item; 
     });
 
 }
generateList(arrayOfData);

const gridButton = document.querySelector(".goods-list__grid");
const listButton = document.querySelector(".goods-list__list");
gridButton.addEventListener('click', ()=>{
    document.querySelector(".goods-list__grid img").src = "res/assets/grid active.svg";
    document.querySelector(".goods-list__list img").src = "res/assets/list.svg";   
    const data = document.querySelector(".goods-list__content");
    data.classList.add("goods-grid");
    data.innerHTML = '';
    generateGrid(arrayOfData);
});
listButton.addEventListener('click', ()=>{
    document.querySelector(".goods-list__grid img").src = "res/assets/grid.svg";
    document.querySelector(".goods-list__list img").src = "res/assets/list active.png";
    const data = document.querySelector(".goods-list__content");
    data.classList.remove("goods-grid");
    data.innerHTML = '';
    generateList(arrayOfData);
});