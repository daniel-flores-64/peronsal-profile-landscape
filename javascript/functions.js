var idCodeOut = aboutSect;
function menuActive(navNum){
    var activeElem = document.getElementsByClassName("navbar-brand");
    for(var i=0;i<activeElem.length;i++){
        switch (i == navNum){
            case true:
                activeElem[i].classList.add("active");
                break;
            default:
                activeElem[i].classList.remove("active");
        }
    }
}

function vanishSect(idCodeIn){
    document.getElementById(idCodeIn).style.display = "flex";
    document.getElementById(idCodeOut).style.display = "none";
    idCodeOut = idCodeIn;
}