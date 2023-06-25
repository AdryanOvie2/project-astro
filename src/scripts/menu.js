const menUl = document.getElementById("menu");
const hamburguerIcon = document.getElementById('hamburguerIcon');
const closeIcon = document.getElementById("closeIcon");
let isImg = true;
// const interruptor = document.getElementById("darkMode");
// const nav = document.getElementById("navbar");

hamburguerIcon.addEventListener("click", function() {
    menUl.classList.toggle("hidden");
    console.log("click");
    hamburguerIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
});

closeIcon.addEventListener("click", function() {
    menUl.classList.toggle("hidden");
    closeIcon.classList.add("hidden");
    hamburguerIcon.classList.remove("hidden");
});

// dark mode
// interruptor.addEventListener("click", function (){
//     document.body.classList.toggle("darkMode");
//     nav.classList.toggle("darkMode-nav");
//     menUl.classList.toggle("darkMode-menu");
//     // icons
//     closeIcon.classList.toggle("fillWhite");
//     hamburguerIcon.classList.toggle("fillWhite");
// });

//active
// const btns = document.getElementsByClassName("btn-menu");
// for (let i = 0 ; i < btns.length ; i++){
//     btns[i].addEventListener("click", function (){
//         const active = document.getElementsByClassName("active");
//         active[0].className = active[0].className.replace(" active", "");
//         this.className += " active"
//     });
// }