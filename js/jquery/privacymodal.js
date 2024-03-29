// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myPrivacyModal");
var modal3 = document.getElementById("myCookieModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn1");
var btn2 = document.getElementById("myPrivacyBtn");
var btn3 = document.getElementById("myCookieBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("privacyclose")[0];
var span3 = document.getElementsByClassName("cookieclose")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
modal.style.display = "block";
}

btn2.onclick = function() {
modal2.style.display = "block";
}

btn3.onclick = function() {
modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}


span2.onclick = function() {
modal2.style.display = "none";
}

span3.onclick = function() {
modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}

window.onclick = function(event) {
if (event.target == modal2) {
modal2.style.display = "none";
}
}

window.onclick = function(event) {
if (event.target == modal3) {
modal3.style.display = "none";
}
}

// Get the cookie button
$(document).ready(function(){   
    setTimeout(function () {
        $("#cookieConsent").fadeIn(200);
     }, 4000);
    $("#closeCookieConsent, .cookieConsentOK").click(function() {
        $("#cookieConsent").fadeOut(200);
    }); 
});

// Get the collapse button
var coll = document.getElementsByClassName("fancy-btn");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var contactcontent = this.nextElementSibling;
    if (contactcontent.style.display === "block") {
      contactcontent.style.display = "none";
    } else {
      contactcontent.style.display = "block";
    }
  });
}