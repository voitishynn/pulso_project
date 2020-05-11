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
            arrows: false,
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
  //Modal




  $('[data-modal=consultation]').on('click',function(){
    $('.overlay,#consultation').fadeIn('slow');
  });
  $('.modal_close').on('click', function(){
    $('.overlay,#consultation,#thanks,#order').fadeOut('slow')
  }); 
  

  $('.button_mini').each(function(i){
    $(this).on('click',function(){
      $('#order .modal_descr').text($('.catalog-item_subtitle').eq(i).text());
      $('.overlay,#order').fadeIn('slow');
    });
  });

 
  


  function valideForms(form){
    $(form).validate({
      rules: {
        name:"required",
        phone:"required",
        email: {
          required:true,
          email: true
        }
      },
      messages: {
        name: "Please specify your name",
        phone: "Please enter your phone",
        email: {
          required: "We need your email address ",
          email: "Your email address must be in the format of name@domain.com"
        }
      }
    });
  };
  valideForms('#consultation-form');
  valideForms('#consultation form');
  valideForms('#order form');
  
  $('input[name=phone]').mask("+38(99) 999-9999");

  $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
      });
      return false;
  });

  //Smooth scroll and pageup

  $(window).scroll(function(){
    if ($(this).scrollTop() >  1600){
      $('.pageup').fadeIn();
    } else{
      $('.pageup').fadeOut();
    }
  });

  
    $("a[href^='#']").click(function(){
            const _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
   
      });
      new WOW().init();
});