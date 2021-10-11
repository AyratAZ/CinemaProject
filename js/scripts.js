const schemeSvg = document.querySelector(".scheme-svg");
const menuButton = document.querySelector(".m-menu");
const menu = document.querySelector(".menu");
var cost = 150;
var totalPrice = 0;
schemeSvg.addEventListener("click",(Event)=>{
    if(!Event.target.classList.contains("booked")){
        Event.target.classList.toggle("active");
        totalSeats = schemeSvg.querySelectorAll(".active").length
        totalPrice = totalSeats*cost;
        document.querySelector(".price-total").textContent = totalPrice;
    }
});
menuButton.addEventListener("click",()=>{
    menu.classList.toggle("is-open");
})