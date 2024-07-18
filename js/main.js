// // Swiper : 
// var swiper = new Swiper(".mySwiper" , {
//     spaceBetween : 30 , 
//     centeredSlides : true , 
//     autoplay : {
//         delay : 2500 , 
//         disableOnInteraction : false
//     },
//     pagination : {
//         el : ".swiper-pagination" , 
//         clickable :true
//     }
// })

// console.log("hello there")

// Menu 
// let menu = document.querySelector(".menu-icon")
// let navbar = document.querySelector(".navbar")


// menu.onclick = () => {
//     menu.classList.toggle("move")
//     navbar.classList.toggle("open-menu")
// }
// window.onscroll = () => {
//     menu.classList.remove("move")
//     navbar.classList.remove("open-menu")
// }

function createPopup (id) {
    let popupNode = document.querySelector(id);
    
    let overlay = popupNode.querySelector(".overlay");
    
    
    let closeBtn = popupNode.querySelector(".close-btn");
    
    function openPopup () {
        popupNode.classList.add("active")
    }
    function closePopup () {
        popupNode.classList.remove("active")
    }
    overlay.addEventListener("click" , closePopup);
    closeBtn.addEventListener("click", closePopup);
    return openPopup;
}

let popup = createPopup('#popup');
document.querySelector("#open-popup").addEventListener("click",popup);
document.querySelector("#open-popup2").addEventListener("click",popup);

// console.log(document.querySelector("#open-popup").addEventListener("click", function(event) {
//     event.preventDefault(); // Prevent default action to avoid navigation
//     popup();
// }));