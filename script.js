let menu = document.getElementsByClassName("menu")

let openMenu = document.getElementById("openmenu")
let closeMenu = document.getElementById("closemenu")

openMenu.addEventListener("click" , function()  {
    menu[0].classList.add("toggel")
})

closeMenu.addEventListener("click" , function()  {
    menu[0].classList.remove("toggel")
})



// let n=prompt("n sonini kiriting =");
// let s=0;
// for (let i=n; i<=n*2; i++){
//     s+=i*i
// }
// console.log(s);

// let a=+prompt("a sonini kiriting");
// let b=+prompt("b sonini kiriting");
// if (a<b){
//     for (let i=a+1; i<b; i++){
//         // console.log(i);
//         for (let j=1; j<=i; j++)
//         console.log(i);
//         }
// }