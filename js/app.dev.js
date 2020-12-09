"use strict";

$(".main__nav-link").on("click", function () {
  $(".main__nav-submenu").toggleClass("active");
}); // $( ".main__nav-link" ).on({
//  click: function() {
//    $( ".main__nav-submenu").slideToggle();
//  }, mouseenter: function() {
//    $( ".main__nav-submenu" ).slideToggle();
//  }, mouseleave: function() {
//    $( ".main__nav-submenu").slideToggle();
//  }
// });