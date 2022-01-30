$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 2,
        margin: 30,
        nav: true,
        navText: ['<i class="fas fa-long-arrow-alt-left bg-primary rounded-0 rounded-end rounded-pill text-light py-2 px-3"></i>', '<i class="fas fa-long-arrow-alt-right bg-primary rounded-0 rounded-start rounded-pill text-light py-2 px-3"></i>'],
        dots: false,
        loop: true,
        autoplay: true,
        responsive: {
            100: {
                items: 1,
                autoplay: false

            },
            960: {
                items: 2,
                autoplay: true

            }
        }

    });

});

var topBtn = document.getElementById("topBtn")
var main_header = document.getElementById("main_header")
var main_header_Style = main_header.style;
window.addEventListener("scroll", function() {

    if (document.documentElement.scrollTop > 400) {

        main_header_Style.position = "sticky"
        main_header_Style.top = "0"
        main_header_Style.backgroundColor = "white"
        main_header_Style.transition = "top 0.2s ease-in"
        topBtn.style.display = "block"


    } else topBtn.style.display = "none"
})


var form = document.getElementById("myForm")

form.addEventListener("input", function(e) {
    switch (e.target.id) {
        case "inputName":
            nameValidation(e.target)
            break
        case "inputEmail":
            emailValidation(e.target)
            break
        case "inputPassword":
            passwordValidation(e.target)

            break
    }
})


function nameValidation(input) {
    var inputValue = input.value.trim()
    if (inputValue.length < 3) handleError(input, "enter at least 3 character")
    else handleError(input)
}


function emailValidation(input) {

    var regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    var inputValue = input.value

    console.log(regExp.test(inputValue))

    if (regExp.test(inputValue)) handleError(input)
    else handleError(input, "enter a valid email")

}

function passwordValidation(input) {
    var regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    var inputValue = input.value
    console.log(regExp.test(inputValue))
    if (regExp.test(inputValue)) handleError(input)
    else handleError(input, "please enter a complex password")
}


function handleError(element, msg = "") {
    element.nextElementSibling.innerText = msg
}


form.addEventListener("submit", function(e) {
    e.preventDefault()
})

var form_control = document.getElementsByClassName("VAL");
var alert = document.getElementsByClassName("alert")
var p = document.getElementById("verfied_class_P")

function verfied() {
    for (var i = 0; i <= 2; i++) {
        if (alert[i].innerText == "") {
            form_control[i].status = true
            p.style.color = "green"
            p.innerText = "its verified"
        } else {
            form_control[i].status = false
            p.style.color = "red"
            p.innerText = "there is an error in form validatuon"
        }

    }
}