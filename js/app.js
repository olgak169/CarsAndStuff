let overlay = document.querySelector(".overlay");
let modal = document.querySelector(".modal");
let modalImg = document.querySelector(".modal-img");
let modalDesc = document.querySelector(".modal-desc");
let modalPrice = document.querySelector(".modal-price");
$(".item").on("click", function () {
    overlay.classList.add("open");
    modal.classList.add("open");

    modalImg.src = this.children[0].src;
    modalDesc.innerHTML = this.children[1].innerHTML;
    modalPrice.innerHTML = this.children[2].innerHTML;
});
$(".overlay").on("click", closeModal);
$(".close-modal").on("click", closeModal);

function closeModal() {
    overlay.classList.remove("open");
    modal.classList.remove("open");
}

// $(document).ready(function(){
//   $('.gallery-slider').slick({

//     infinite: true,
//     arrows: true,

//     slidesToShow: 1,
//     adaptiveHeight: true
//   });
// });
function Slider(obj) {
    this.images = $(obj.images);
    this.auto = obj.auto;
    this.btnPrev = obj.btnPrev;
    this.btnNext = obj.btnNext;
    this.auto = obj.auto;
    this.rate = obj.rate || 1000;
    let i = 0;
    let slider = this;

    this.prev = function () {
        slider.images.eq(i).removeClass("visible");
        i--;

        if (i < 0) {
            i = slider.images.length - 1;
        }

        slider.images.eq(i).addClass("visible");
    };
    this.next = function () {
        slider.images.eq(i).removeClass("visible");
        i++;

        if (i >= slider.images.length) {
            i = 0;
        }

        slider.images.eq(i).addClass("visible");
    };
    $(slider.btnPrev).on("click", function () {
        slider.prev();
    });
    $(slider.btnNext).on("click", function () {
        slider.next();
    });

    if (slider.auto) {
        setInterval(slider.next, slider.rate);
    }
}
$(function () {
    new Slider({
        images: ".slide",
        btnPrev: ".buttons .prev",
        btnNext: ".buttons .next",
        auto: false,
    });
});

$(".inner-img-sm").click(function () {
    $(".works-inner-img-active").attr("src", $(this).attr("src"));
});
// side menu
$(".sub-btn").click(function () {
    $(this).next(".side-submenu").slideToggle();
    $(this).find(".dropdown").toggleClass("rotate");
    $(this).toggleClass("active");
});

//jquery for expand and collapse the sidebar
$(".menu-btn").click(function () {
    $(".side-menu").addClass("active");
    $(".menu-btn").css("visibility", "hidden");
});

$(".close-btn").click(function () {
    $(".side-menu").removeClass("active");
    $(".menu-btn").css("visibility", "visible");
});
