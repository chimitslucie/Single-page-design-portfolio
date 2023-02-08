$('#slider').slick({
    infinite: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('#prev'),
    nextArrow: $('#next'),
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerPadding: '0',
            slidesToShow: 1
          }
        }
    ]
});