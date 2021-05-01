
// SECTION TARIFFS
const filtNewbud = document.getElementById("filt-newbud"),
      filtSecondbud = document.getElementById("filt-secondbud"),
      switcher = document.getElementById("switcher"),
      newbud = document.getElementById("newbud"),
      secondbud = document.getElementById("secondbud");

filtNewbud.addEventListener("click", function() {
  switcher.checked = false;
  filtNewbud.classList.add("toggler-active");
  filtSecondbud.classList.remove("toggler-active");
  newbud.classList.remove("tariffs-hide");
  secondbud.classList.add("tariffs-hide");
});

filtSecondbud.addEventListener("click", function() {
  switcher.checked = true;
  secondbud.classList.add("toggler-active");
  filtNewbud.classList.remove("toggler-active");
  newbud.classList.add("tariffs-hide");
  secondbud.classList.remove("tariffs-hide");
});

switcher.addEventListener("click", function() {
  filtSecondbud.classList.toggle("toggler-active");
  filtNewbud.classList.toggle("toggler-active");
  newbud.classList.toggle("tariffs-hide");
  secondbud.classList.toggle("tariffs-hide");

  $('.tariffs__inner2').slick({
    infinite: false,
    arrows: false,
    centerMode: true,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,    
          dots: true,
          centerMode: false,
          centerPadding: '50px',
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 780,
        settings: {  
          dots: true,
          centerMode: false,
          centerPadding: '45px',
          slidesToShow: 1
        }
      }
    ]
  });
});



$('.tariffs__inner1').slick({
  infinite: false,
  arrows: false,
  centerMode: true,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 991,
        settings: {
          arrows: false,    
          dots: true,
          centerMode: false,
          centerPadding: '50px',
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
    {
      breakpoint: 780,
        settings: { 
          dots: true,
          centerMode: false,
          centerPadding: '45px',
          slidesToShow: 1
        }
    }
  ]
});