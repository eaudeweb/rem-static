$('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer',
  gutter: '.gutter-sizer'
})

function addCarousel(element) {
  $(element).flickity({
    /* Options */
    prevNextButtons: false,
    fade: true,
    autoPlay: 3000,
  });
}

const isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;

if (isMobile) {
  addCarousel('.articles-carousel')
} else {
  let articles_group = []
  const items_in_group = 4;
  $(".articles-carousel .article-item").each(
    function(i, item) {
      articles_group.push(item)
      if (articles_group.length === 4) { 
        $(articles_group).wrapAll('<div class="carousel-cell" />');
        articles_group = [];
      }
    });
  addCarousel('.articles-carousel')
}