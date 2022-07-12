let subFeatures = document.querySelector(".subFeatures");
let features = document.getElementById("features");
let arrowFeatures1 = document.getElementById("arrowFeatures1");
let arrowFeatures2 = document.getElementById("arrowFeatures2");
let navright = document.querySelector(".navright");
let close = document.getElementById("close-icon");
let open = document.getElementById("menu-icon");
let rightBloc = document.querySelector(".rightBloc");
features.onclick= function(){
    if (subFeatures.style.display === "none") {
        subFeatures.style.display = "block"
        arrowFeatures1.style.display = "none";
        arrowFeatures2.style.display = "inline-block";
                if (subCompany.style.display === "block"){
                   navright.style.transform = "translateY(" + "217" + "px)";}
                   else{
                    navright.style.transform = "translateY(" + "122" + "px)";
                   }
        }
       else {
        subFeatures.style.display = "none"
        arrowFeatures1.style.display = "inline-block";
        arrowFeatures2.style.display = "none";
        if (subCompany.style.display === "block"){
          navright.style.transform = "translateY(" + "95" + "px)";
        } else{
          navright.style.transform = "translateY(" + "0" + "px)";
        }
      }
    console.log("on click");
}
let subCompany = document.querySelector(".subCompany");
let company = document.getElementById("company");
let arrowCompany1 = document.getElementById("arrowCompany1");
let arrowCompany2 = document.getElementById("arrowCompany2");
company.onclick= function(){
    if (subCompany.style.display === "none") {
        subCompany.style.display = "block";
        arrowCompany1.style.display = "none";
        arrowCompany2.style.display = "inline-block";
        if (subFeatures.style.display === "block"){
          navright.style.transform = "translateY(" + "217" + "px)";}
          else{
           navright.style.transform = "translateY(" + "95" + "px)";
          }
      } 
      else {
        subCompany.style.display = "none";
        arrowCompany1.style.display = "inline-block";
        arrowCompany2.style.display = "none";   
        if (subFeatures.style.display === "block"){
          navright.style.transform = "translateY(" + "122" + "px)";
        } else{
          navright.style.transform = "translateY(" + "0" + "px)";
        }    
      }
}
function myFunction(x) {
  if (x.matches) { // If media query matches
    open.style.display = "block";
    rightBloc.style.right = "-200px";
  } else {
    open.style.display = "none";
    close.style.display = "none";
    rightBloc.style.right = "0";
  }
}
var x = window.matchMedia("(max-width: 700px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction);
open.onclick = function(){
rightBloc.style.right = "0";
open.style.display = "none";
close.style.display = "block";
}
close.onclick =function(){
  rightBloc.style.right = "-200px";
  open.style.display = "block";
close.style.display = "none";
}