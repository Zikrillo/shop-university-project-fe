const tabs = document.querySelectorAll(".product-description__tab");
const tabDescription = document.querySelector(".product-description__content-block");
tabs.forEach((e,z)=>{
    e.addEventListener('click',(elem)=>{
        tabs.forEach((k)=>{
            k.classList.remove("product-description__tab--active");
        });
        e.classList.add("product-description__tab--active");
        tabDescription.style.transform = `translateX(${-33*(z)}%)`;    
    });
});