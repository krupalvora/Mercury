console.log("Navbar js loaded ")

let path_str = document.location.pathname


const paths = path_str.split("/")
console.log(paths[1].split(".")[0])

const navItem_about = document.getElementsByClassName("nav-active-about")
const navItem_products = document.getElementsByClassName("nav-active-products")
const navItem_contact = document.getElementsByClassName("nav-active-contact")



function toggleClass(elements, className, action) {
    for (let i = 0; i < elements.length; i++) {
        if (action === "add") {
            elements[i].classList.add(className);
        } else if (action === "remove") {
            elements[i].classList.remove(className);
        }
    }
}

if(paths[1].split(".")[0] === "about"){

    toggleClass(navItem_about, "hidden","remove")
    toggleClass(navItem_products, "hidden","add")
    toggleClass(navItem_contact, "hidden","add")




}
if(paths[1].split(".")[0] === "contact"){

    toggleClass(navItem_about, "hidden","add")
    toggleClass(navItem_products, "hidden","add")
    toggleClass(navItem_contact, "hidden","remove")

}
if(paths[1].split(".")[0] === "products"){


    toggleClass(navItem_about, "hidden","add")
    toggleClass(navItem_products, "hidden","remove")
    toggleClass(navItem_contact, "hidden","add")

}





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

