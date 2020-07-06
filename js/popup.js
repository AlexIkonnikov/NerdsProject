var firstSlideRadio = document.querySelector(".first-slide");
var secondSlideRadio = document.querySelector(".second-slide");
var thirdSlideRadio = document.querySelector(".third-slide");
var writeButton = document.querySelector(".write-button");
var closeButton = document.querySelector(".close");
var popup = document.querySelector(".popup-form");
var yourName = popup.querySelector("[type=text]");
var yourMail = popup.querySelector("[type=email]");
var form = popup.querySelector("form");
var storage = "";
var isStorageSupport = true;

try{
    storage = localStorage.getItem("yourName");
}
catch(err){
    isStorageSupport = false;
}

writeButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    yourName.focus();
    if(storage){
        yourName.value = storage;
        yourMail.focus();
    }
});

closeButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});

form.addEventListener("submit",function(evt){
    if (!yourName.value || !yourMail.value){
        evt.preventDefault();
        console.log("Вы обосрались");
    }
    else{
        if(isStorageSupport){
        localStorage.setItem("yourName" , yourName.value);
        }
    }
} )



firstSlideRadio.addEventListener("click", function(evt){
    document.getElementsByClassName('sliders-item-1')[0].style.display = "block";
    document.getElementsByClassName('sliders-item-2')[0].style.display = "none";
    document.getElementsByClassName('sliders-item-3')[0].style.display = "none";
})

secondSlideRadio.addEventListener("click", function(evt){
    document.getElementsByClassName('sliders-item-1')[0].style.display = "none";
    document.getElementsByClassName('sliders-item-2')[0].style.display = "block";
    document.getElementsByClassName('sliders-item-3')[0].style.display = "none";
})

thirdSlideRadio.addEventListener("click", function(evt){
    document.getElementsByClassName('sliders-item-1')[0].style.display = "none";
    document.getElementsByClassName('sliders-item-2')[0].style.display = "none";
    document.getElementsByClassName('sliders-item-3')[0].style.display = "block";
})

