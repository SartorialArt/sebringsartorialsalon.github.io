// this is latest js script from class cssgridgarden.com  mholly@tpl.ca
console.log("New js script");
const toggleButton = document.querySelector(".mobile-menu-toggle");
const navItem = document.querySelectorAll(".nav-item");

function toggleMenu(){
    //if menu is invisible turn back on using visible class. counting or arrays always length-1 (navItem.length)
 //if alread visible, turn it off by removing visible class
    if(navItem[0].classList.contains("visible")){
        //turn  menu off
        for(let counter = 0; counter<=(navItem.length-1); counter++){
            navItem[counter].classList.remove("visible");
        }
        toggleButton.innerText = "=";
    }else{
        //turn on
        for(let counter = 0; counter<=(navItem.length-1); counter++){
            navItem[counter].classList.add("visible");

        }
        toggleButton.innerText ="X";
    }
}
toggleButton.addEventListener("click", toggleMenu);


// to check in Inspector>Console> enter function   ie   document.querySelector(".mobile-menu-toggle")
// this works to date. D8 @1.40 GitHubAccount and CloudFarePages account free.  
// l 21 if using fontawesome replace "X" with font awesome code pasted as done in html page D8 2.38
// l14to   toggleButton.innerHTML = "="; to toggleButton.innerHTML = '<i class="fontawesomefilename"></i>'
//  then l21 to toggleButton.innerHTML = "your copied code from fontawesome but need to change 
// outer double" to single':   toggleButton.innerHTML = '<i class = "font awesome file"></i>';
// you can just copy and paste from HTML or enter by hand in css after you import to html from fontawesome. 
//any changes after deployed to Github, need to reupload files (css html) to gihub. and will automatically update to Ckloudflare
//Challenge"what in css can replace for statement in one go? Add visible class all at once? Keep if else with else if? Load class? 