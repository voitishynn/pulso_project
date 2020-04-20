$(document).ready(function(){
  $('.carousel_inner').slick({
      speed: 1200,
      adaptiveHeight: false,
      
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/left_button.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/right_button.png"></button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: false,
            arrows:true,
          }
        },
        {
          breakpoint: 480,
          settings: {
           
          }
        }
      ]
  });
  
  $('ul.catalog_tabs').on('click', 'li:not(.catalog_tab_active)', function() {
      $(this)
        .addClass('catalog_tab_active').siblings().removeClass('catalog_tab_active')
        .closest('div.container').find('div.catalog_content').removeClass('catalog_content_active').eq($(this).index()).addClass('catalog_content_active');
  });

  function toggleSlide(item){
    $(item).each(function(i){
      $(this).on('click',function(e){
        e.preventDefault();
        $('.catalog-item_content').eq(i).toggleClass('catalog-item_content_active')
        $('.catalog-item_list').eq(i).toggleClass('catalog-item_list_active')
      })
    });
  };

  toggleSlide('.catalog-item_link');
  toggleSlide('.catalog-item_back');

});