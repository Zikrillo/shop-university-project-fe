const laptops = document.querySelectorAll(".header-navigation__item");
const content = document.querySelector(".header-navigation__content-box");
laptops.forEach((laptop,e)=>{
    laptop.addEventListener('mouseover', (e)=>{
        content.classList.add("header-navigation__content-box-active");
        content.style.left = laptop.offsetLeft + "px";
        content.style.top = laptop.offsetTop + 35 + "px";
        content.innerText = laptop.innerText;
        
    });
    laptop.addEventListener('mouseout', (e)=>{
        content.classList.remove("header-navigation__content-box-active");
        content.style.left = laptop.offsetRight + "px";
        content.style.top = laptop.offsetTop + 35 + "px";

    });
    if(e == 3){
        laptop.addEventListener('mouseover', (e)=>{
            content.classList.add("header-navigation__content-box-active");
            content.style.left = laptop.offsetLeft - 120 + "px";
            content.style.top = laptop.offsetTop + 35 + "px";
            content.innerText = laptop.innerText;
            
        });
        laptop.addEventListener('mouseout', (e)=>{
            content.classList.remove("header-navigation__content-box-active");
            content.style.left = laptop.offsetRight + "px";
            content.style.top = laptop.offsetTop + 35 + "px";
    
        });
    }
});



content.addEventListener('mouseover', (e)=>{
    content.classList.add("header-navigation__content-box-active");
});
content.addEventListener('mouseout', (e)=>{
    content.classList.remove("header-navigation__content-box-active");
});


