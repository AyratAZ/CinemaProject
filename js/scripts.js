const schemeSvg = document.querySelector(".scheme-svg");
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