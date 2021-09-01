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