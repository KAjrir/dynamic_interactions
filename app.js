const navbar = document.getElementById("navbar")

function openSidebar(){
    navbar.classList.add("show")
}

function closeSidebar(){
    navbar.classList.remove("show")
}


let slideIndex = 0
showSlide(slideIndex)

function showSlide(n){
    const slides = document.querySelectorAll(".slide")

    if(n > slides.length - 1) slideIndex = 0
    if(n < 0) slideIndex = slides.length - 1
    
    slides.forEach(slide => {
        slide.style.display = "none"
    })

    slides[slideIndex].style.display = "block"
}

function changeSlides(n){
    showSlide(slideIndex += n)
}