// typing animation
var typing = new Typed (".typing",{

    strings : ["Web Developer", "Youtuber", "Web Designer", "Freelancer"],
    typeSpeed:100,
    backSpeed :60,
    loop:true

});

function toggles(){
    if( document.getElementById('colour').style.backgroundColor!= "black"){
    document.getElementById('colour').style.backgroundColor= "black";
    document.getElementById('colour').style.color = "white";
    document.getElementById('text').innerHTML="Light mode";

    }
    else{
        document.getElementById('colour').style.backgroundColor= "white";
        document.getElementById('colour').style.color = "black";  
        document.getElementById('text').innerHTML="Dark mode";

    }
}

// sticky navbar
window.onscroll = function(){

    var navbar = document.getElementById("navbar");

    if(window.scrollY > 55){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }

    // scroll to top
    let button = document.getElementById("btn");

    if(document.documentElement.scrollTop > 90){
        button.style.display = "block";
    }
    else{
        button.style.display = "none";
    }

};

function scrolltoTop(){
    document.documentElement.scrollTop = 0;
}

// menu toggle bar
function menu(){
    let menu = document.getElementById("menu");
    let menubar = document.querySelector(".menu-btn i");

    menu.classList.toggle("active");
    menubar.classList.toggle("active");
}
function show(){
    if(document.getElementById('nav2').style.display!== "block"){
        document.getElementById('nav2').style.display="block";
    }
    else{
        document.getElementById('nav2').style.display="none"; 
    }
}