function sortImages () {
    //let allImg = document.querySelector(".img-gallery-container");
    //allImg.style.display = "inline";
    let allBuilding = document.getElementsByClassName("building");
    let allDrink = document.getElementsByClassName("drink");
    let allFood = document.getElementsByClassName("food");
    let allMenu = document.getElementsByClassName("menu");

    let buildingCheck = document.getElementById("ans1").checked;
    let drinkCheck = document.getElementById("ans2").checked;
    let foodCheck = document.getElementById("ans3").checked;
    let menuCheck = document.getElementById("ans4").checked;
    let allCheck = document.getElementById("ans5").checked;

    if (allCheck) {
        for (const item of allBuilding) {
            item.style.display = "inline";
        }
        for (const item of allDrink) {
            item.style.display = "inline";
        }
        for (const item of allFood) {
            item.style.display = "inline";
        }
        for (const item of allMenu) {
            item.style.display = "inline";
        }
    }
    else {
        for (const item of allBuilding) {
            item.style.display = "none";
        }
        for (const item of allDrink) {
            item.style.display = "none";
        }
        for (const item of allFood) {
            item.style.display = "none";
        }
        for (const item of allMenu) {
            item.style.display = "none";
        }
        if (buildingCheck) {
        for (const item of allBuilding) {
            item.style.display = "inline";
        }
        }
        if (drinkCheck) {
            for (const item of allDrink) {
                item.style.display = "inline";
            }
        }
        if (foodCheck) {
            for (const item of allFood) {
                item.style.display = "inline";
            }
        }
        if (menuCheck) {
            for (const item of allMenu) {
                item.style.display = "inline";
            }
        }
    }
    
    

}