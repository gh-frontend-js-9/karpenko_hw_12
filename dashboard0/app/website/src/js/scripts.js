let slideIndex = 1;
showSlides(slideIndex);

function increaseSlides(n){
    showSlides(slideIndex += n);
}
function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i,
        slides = document.getElementsByClassName("slides"),
        dots = document.getElementsByClassName("dot")

    if(n > slides.length) slideIndex = 1
    if(n < 1) slideIndex = slides.length

    for(i = 0; i < slides.length; i++)
        slides[i].style.display = "none"
    for(i = 0; i < dots.length; i++)
        dots.className = dots[i].className.replace(".active", "");
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className = " active";
}

// const secondary = {}
// secondary.insertCalendarData = () => {

// }
// secondary.insertCalendarData();
let calendar = document.querySelector(".calendar__wrapper");
for(let i = 1; i < 32; i++){
    let span = document.createElement("span");
    span.className = "calendar__date";
    if(i == 26){
      span.className = "calendar_date_active";
    }
    span.innerHTML = i;
    calendar.append(span);
}