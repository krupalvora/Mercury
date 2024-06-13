console.log("Navbar js loaded ")

let path_str = document.location.pathname


const paths = path_str.split("/")

// if(paths[0] == "about"){
//     document.getElementBy
// }





const hamburgerButtonOpen = document.getElementById("open-hamburger")
const hamburgerButtonClose = document.getElementById("close-hamburger")
const responsiveNavItmesList = document.getElementById("responsive-navItems-list")




hamburgerButtonOpen.addEventListener("click",()=>{
    responsiveNavItmesList.classList.remove("hidden")
    responsiveNavItmesList.classList.add("block")

})
hamburgerButtonClose.addEventListener("click",()=>{
    responsiveNavItmesList.classList.remove("block")
    responsiveNavItmesList.classList.add("hidden")
})

