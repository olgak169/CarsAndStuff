// function Popupchik () {
  
//  let overlay = document.createElement("div");
//  overlay.classList.add("overlay")
//  let modal = document.createElement("div");
//  modal.classList.add("modal")
//  document.body.appendChild(overlay);
//  document.body.appendChild(modal);
 

//  this.open = function(content) {
//    overlay.classList.add("open")
//    modal.classList.add("open")
//    modal.innerHTML = content;
//  }

//  this.close = function() {
//    overlay.classList.remove("open")
//    modal.classList.remove("open")
//  }

//  overlay.onclick = this.close;
// } 

// let p = new Popupchik();

// p.open("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit natus suscipit, sed perferendis voluptas non qui deserunt at vero quasi.</p>");

$(document).ready(function(){
  $('.gallery-slider').slick({
    
    infinite: true,
    arrows: true,
    
    slidesToShow: 1,
    adaptiveHeight: true
  });
});