let navList = document.querySelector(".nav .invisible");
let anchorTags = document.querySelectorAll(".nav .invisible li a");

let hamburgerMenu = document.querySelector(".hamburger-menu");
let hamburgerMenuI = document.querySelector(".hamburger-menu i");

// console.log(hamburgerMenu);
// console.log(navList);

hamburgerMenu.addEventListener("click", function(e){
    // console.log("clicked");
    hamburgerMenuI.classList.toggle("fa-circle-xmark");
    navList.classList.toggle("invisible");
    navList.classList.toggle("visible");
});

console.log(anchorTags);
for(let i in anchorTags){
    anchorTags[i].addEventListener("click", function(){
        hamburgerMenuI.classList.toggle("fa-circle-xmark");
        navList.classList.toggle("invisible");
        navList.classList.toggle("visible");
    }
    );
}
