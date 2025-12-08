let menu = document.getElementsByClassName("menu")

let openMenu = document.getElementById("openmenu")
let closeMenu = document.getElementById("closemenu")



openMenu.addEventListener("click" , function()  {
    menu[0].classList.add("toggel")
})

closeMenu.addEventListener("click" , function()  {
    menu[0].classList.remove("toggel")
})