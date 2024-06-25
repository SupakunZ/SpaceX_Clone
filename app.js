/*Funtion Animation Menu Icon*/
export function Option(toggle) {
  
    if (toggle == true) {
        document.getElementById("op").style.width = "350px";
        document.getElementById("bo").style.opacity = "1";
        document.getElementById("item1").style.opacity = "1";
        document.getElementById("item2").style.opacity = "1";
        document.getElementById("item3").style.opacity = "1";
        document.getElementById("item4").style.opacity = "1";
        document.getElementById("item5").style.opacity = "1";
        document.getElementById("shadow").style.opacity = "1";
        document.getElementById("shadow").style.zIndex = "9";
        document.getElementById("it").style.color = "rgb(177, 177, 177)";
        document.getElementById("it2").style.color = "rgb(177, 177, 177)";
        document.getElementById("it3").style.color = "rgb(177, 177, 177)";
        document.getElementById("it4").style.color = "rgb(177, 177, 177)";
        document.getElementById("it5").style.color = "rgb(177, 177, 177)";
        document.getElementById("it6").style.color = "rgb(177, 177, 177)";
        document.getElementById("it7").style.color = "rgb(177, 177, 177)";
        document.getElementById("it8").style.color = "rgb(177, 177, 177)";
        document.getElementById("logo-01").style.fill = "rgb(177, 177, 177)";
        
    }
    else {
        document.getElementById("op").style.width = "0px"
        document.getElementById("bo").style.opacity = "0";
        document.getElementById("item1").style.opacity = "0";
        document.getElementById("item2").style.opacity = "0";
        document.getElementById("item3").style.opacity = "0";
        document.getElementById("item4").style.opacity = "0";
        document.getElementById("item5").style.opacity = "0";
        document.getElementById("shadow").style.opacity = "0";
        document.getElementById("shadow").style.zIndex = "0";
        document.getElementById("it").style.color = "white";
        document.getElementById("it").style.color = "white";
        document.getElementById("it2").style.color = "white";
        document.getElementById("it3").style.color = "white";
        document.getElementById("it4").style.color = "white";
        document.getElementById("it5").style.color = "white";
        document.getElementById("it6").style.color = "white";
        document.getElementById("it7").style.color = "white";
        document.getElementById("it8").style.color = "white";
        document.getElementById("logo-01").style.fill = "white";
        
    }
}
var prevScrollpos = window.pageYOffset;
export default window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
const element = document.getElementById("box-slide")
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("box-slide").style.height = "100px";
    document.getElementById("box-slide").style.top = "0";
    document.getElementById("navbar-01").style.opacity = "1";
    if (document.documentElement.scrollTop < 674) {
    document.getElementById("box-slide").style.height = "0";
                
    }
  } else {
    document.getElementById("op").style.width = "0px"
    document.getElementById("bo").style.opacity = "0";
    document.getElementById("box-slide").style.opacity = "1";
    document.getElementById("box-slide").style.height = "0px";
    document.getElementById("navbar-01").style.opacity = "0";
    

  }
  prevScrollpos = currentScrollPos;
}

