const rangeControllerFirst = document.querySelector(".controller-left");
const rangeControllerSecond = document.querySelector(".controller-right");
const border = document.querySelector(".left-menu__ranger-controller");
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
