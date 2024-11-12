var  tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var btn2 = document.getElementsByClassName("btn2");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}
const form = document.getElementById("contact-form");
const thankYouMessage = document.getElementById("thank-you-message");

// Add an event listener to the form
form.addEventListener("submit", function(event) {
    // Prevent the form from submitting normally (you can remove this if you want to actually submit the form)
    event.preventDefault();
    
    // Show the thank-you message after submission
    thankYouMessage.style.display = "block";
});