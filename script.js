var istatus = document.querySelector("p");
var btn1 = document.querySelector(".btn-1");

var check = 0;

btn1.addEventListener("click", function () {
  if (check === 0) {
    istatus.innerHTML = "Friends";
    istatus.style.color = "red";
    btn1.innerHTML="Remove Friend"
    check = 1;
  } else {
    istatus.innerHTML = "Stranger";
    istatus.style.color = "Green";
    btn1.innerHTML="Add Friend"
    check = 0;
  }
});
