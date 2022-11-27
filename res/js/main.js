
const leftMenuRangerHeader = document.querySelector(".left-menu__ranger-header");
const leftMenuRangerControllerBack = document.querySelector(".left-menu__ranger-controller-back");
const burgerSwitcher = document.querySelector(".header-navigation__burger");


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
    },
    {
        header: "Samsung Laptop G8",
        price: "$3000,99",
        description: `Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...`,
        link: "./product.html",
        image: "res/assets/comp.png"
    },
    {
        header: "Samsung Laptop G8",
        price: "$3000,99",
        description: `Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...`,
        link: "./product.html",
        image: "res/assets/comp.png"
    }
    
];
const gridNavigation = document.querySelector(".goods-list__navigation");
gridNavigation.innerHTML = `
    <div class="goods-list__overall">
    ${arrayOfData.length} items
    </div>
    <div class="goods-list__sort">
    <div>Sort By</div>
    <div class="goods-list__sort-selector dropdown">
    Name<img src="res/assets/arrow down.svg" alt="">
    <div class="dropdown-content">
    <p>Name</p>
    <p>Price</p>
    <p>Reviews</p>
</div>
    </div>
    <div class="goods-list__show">
    <div>Show by</div>
    <div class="goods-list__show-selector dropdown">
    <div class="dropdown-current">5</div><img src="res/assets/arrow down.svg" alt="">
            <div class="dropdown-content">
            <p>5</p>
            <p>6</p>
            <p>12</p>
        </div>
        
    </div>
    </div>
    </div>
    <div class="goods-list__switcher">
    <div class="goods-list__grid">
        <img src="res/assets/grid.svg" alt="">
    </div>
    <div class="goods-list__list">
        <img src="res/assets/list active.png" alt="">
    </div>
    </div>
`;
function generateList(arrayOfData, amount){

   const data = document.querySelector(".goods-list__content");
    data.innerHTML = '';
    for(let x = 0; x < amount; x++ ){
        let e = arrayOfData[x];
        if(e != undefined){
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
        } 
    };

}
function generateGrid(arrayOfData, amount){
    const data = document.querySelector(".goods-list__content");
    data.classList.add("fade");
     data.innerHTML = '';
     for(let x = 0; x < amount; x++ ){
        let e = arrayOfData[x];
        if(e != undefined){
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
        }
     }
 }
generateList(arrayOfData,5);

const gridButton = document.querySelector(".goods-list__grid");
const listButton = document.querySelector(".goods-list__list");
gridButton.addEventListener('click', ()=>{
    document.querySelector(".goods-list__grid img").src = "res/assets/grid active.svg";
    document.querySelector(".goods-list__list img").src = "res/assets/list.svg";   
    const data = document.querySelector(".goods-list__content");
    data.classList.add("goods-grid");
    const dropdownCurrent = document.querySelector(".goods-list__show-selector >.dropdown-current");
    data.classList.toggle("fade");  
    setTimeout(()=>generateGrid(arrayOfData,dropdownCurrent.innerText),500);
    
});
listButton.addEventListener('click', ()=>{
    document.querySelector(".goods-list__grid img").src = "res/assets/grid.svg";
    document.querySelector(".goods-list__list img").src = "res/assets/list active.png";
    const data = document.querySelector(".goods-list__content");
    data.classList.remove("goods-grid");
    data.innerHTML = '';
    const dropdownCurrent = document.querySelector(".goods-list__show-selector >.dropdown-current");
    data.classList.toggle("fade");
    setTimeout(()=>generateList(arrayOfData,dropdownCurrent.innerText),500);
    
});
burgerSwitcher.addEventListener('click', ()=>{
    document.querySelector('.mobile-header').classList.toggle('active');
});
const dropdownCurrent = document.querySelector(".goods-list__show-selector >.dropdown-current");
const dropdownElems = document.querySelectorAll(".goods-list__show-selector >.dropdown-content>p");
dropdownElems.forEach((e)=>{
    const data = document.querySelector(".goods-list__content");
    e.addEventListener('click', ()=>{
        dropdownCurrent.innerText = e.innerText;
        e.parentElement.style.display = 'none';
        e.parentElement.style = "";
        if(data.classList.value.includes("goods-grid")){
            generateGrid(arrayOfData,e.innerText);
        }else{
            generateList(arrayOfData,e.innerText);
        }
    });
})


