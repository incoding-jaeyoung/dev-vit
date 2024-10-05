'use strict';

// gsap.registerPlugin(ScrollTrigger);
document.addEventListener("DOMContentLoaded", function () {
  // $('body').imagesLoaded().done(function (instance) {
    // init()
  // });
})

const isMobile = $(window).width() < 900;

$(document).ready(function () {
  $('.cate-btn').on('click', function () {
    $('.cate-menu').toggleClass('active')
    return false;
  })
  let timeoutId;
  $('.cate-menu').on('mouseleave', function () {
    timeoutId = setTimeout(function () {
      $('.cate-menu').removeClass('active');
    }, 500);
  });

  // 레이어에 다시 마우스가 들어오면 타이머 취소
  $('.cate-menu').on('mouseenter', function () {
    clearTimeout(timeoutId);
  });

  $('#header .header-bottom ul li .menu').on('click', function () {
    $(this).toggleClass('active')
    $('.m-menu').toggleClass('active')
  })
  
  $('.m-menu-con .slide').on('click', function () {
    $(this).parent().toggleClass('active')
    return false;
  })
  
  $('.program-tab li a').on('click', function () {
    $('.program-tab li a').removeClass('active')
    $(this).addClass('active')
  })

  $('.info-menu .share').on('click', function () {
    $('.share-block').show()
  })
  $('.share-block .close').on('click', function () {
    $('.share-block').hide()
    $('.share-block .copy').next().hide()
  })
  $('.share-block .copy').on('click', function () {
    $(this).next().show()
  })

  var $nav = $('#header');
  var lastScrollTop = 0;
  $(window).on('scroll', function () {
    var currentScroll = $(this).scrollTop();
    if (currentScroll > 75) {
      if (currentScroll > lastScrollTop) {
        if ($('.m-menu').hasClass('active')) {
          
        } else {
          $nav.addClass('head-hide');
          }
        // $nav.addClass('nav-blur');
        // $('#header .nav').css('display', 'none')
      } else {
        $nav.removeClass('head-hide');
        // $('#header .nav').css('display', 'flex')
      }
    } else {
      $nav.removeClass('head-hide');
      // $nav.removeClass('nav-blur');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });

  // $('.menu-btn').on('click', function () {
  //   $(this).find('.navTrigger').toggleClass('active')
  //   $('body').toggleClass('fixed')
  //   $('.nav').toggleClass('active')
  //   $('#header').toggleClass('nav-blur')
  // })

  $('.over-text-wrap').each(function (e) {
    $(this).find(' > *').addClass('over-text').wrapInner('<span class="over-text-con"></span>')
    $('.over-text').css('overflow', 'hidden')
    $('.over-text-con').css('display', 'block')
    let wrap = $(this).find('.over-text')
    let text = $(this).find('.over-text-con')
    gsap.set(text, {
      y: '100%',
    });
    gsap.to($(text), {
      y: 0,
      delay: .2,
      duration: 0.3,
      stagger: 0.1,
    });
  })

  $('.tab-contents > *').hide()
  $('.tab-contents > *').eq(0).show()
  $('.tab-btn').each(function () {
    const thisTab = $(this)
    const tabBtn = $(this).find(' > *')
    tabBtn.on('click', function () {
      const indexNum = tabBtn.index(this)
      tabBtn.removeClass('active')
      tabBtn.eq(indexNum).addClass('active')
      console.log(thisTab)
      $(thisTab).next().find('> *').hide()
      $(thisTab).next().find('> *').eq(indexNum).show()
    })
    
  });


  
  
    var swiperIndex = new Swiper(".index-slider", {
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 20,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          // spaceBetween: 20,
        },
      },
    });
  
    var productList = new Swiper(".product-slider", {
      slidesPerView: "auto",
      spaceBetween: 10,
      breakpoints: {
        899: {
          spaceBetween: 20,
        },
      },
    });
    var productList = new Swiper(".product-slider-01", {
      slidesPerView: "auto",
      spaceBetween: 10,
        breakpoints: {
          899: {
            spaceBetween: 30,
          },
        },
    });
  
    var swiperProduct = new Swiper(".pro-slider", {
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          // spaceBetween: 20,
        },
      },
    });
  
  
  
    var repSwiper = new Swiper(".repSwiper", {
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    var repSwiper = new Swiper(".tabSwiper", {
      slidesPerView: "auto",
      freeMode: true,
      slideToClickedSlide: true,
      clickable: true,
      clickableClass: 'active',
    });
    $('.tabSwiper .swiper-slide').on('click', function () {
      $('.tabSwiper .swiper-slide').removeClass('active')
      $(this).addClass('active')
    })
    
    if (isMobile) {
      const pageTitle = $('.my-page-tab ul li.active a').text()
      $('.my-page-tab h2 span').text(pageTitle)
      $('.my-page-tab h2').on('click', function () {
        $('.my-page-tab').toggleClass('active')
        $('.my-page-tab ul').slideToggle(200);
      })
    }
    
    // $('#modal-banner').on('shown.bs.modal', function (e) {
    //   var swiper = new Swiper(".previewSwiper", {
    //     loop: true, //삭제시 루프 안함
    //     navigation: {
    //       nextEl: ".swiper-button-next",
    //       prevEl: ".swiper-button-prev",
    //     },
    //   });
    // });
    var swiper;

    // 모달이 열릴 때 Swiper를 초기화
    $('#modal-preview').on('shown.bs.modal', function () {
      if (!swiper) {
        swiper = new Swiper('.previewSwiper', {
          // Swiper 설정 옵션
          loop: true, //삭제시 루프 안함
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          // 추가적인 Swiper 설정
        });
      } else {
        swiper.update(); // 이미 초기화된 경우 업데이트
      }
    });

    // 모달이 닫힐 때 Swiper 슬라이더를 삭제하거나 초기화 상태로 유지하고 싶다면 아래 코드 추가
    $('#modal-preview').on('hidden.bs.modal', function () {
      swiper.destroy(); // 슬라이더 삭제
      swiper = null; // 초기화
    });
})
// function initPage() {
//   $('.gnb-left button').on('mouseover', function () {
//     $(this).click()
//   })
//   $(".site-toggle").click(function () {
//     $(this).toggleClass("show");
//     $(".site-list").toggleClass("show");
//   })
  
//   var $nav = $('.header-scroll');
//   var lastScrollTop = 0;

//   $(window).on('scroll', function () {
//     var currentScroll = $(this).scrollTop();
//     if (currentScroll > 150) {
//       if (currentScroll > lastScrollTop) {
//         $nav.removeClass('scroll');
//       } else {
//         $nav.addClass('scroll');
//       }
//     } else {
//       $nav.removeClass('scroll');
//     }
//     lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
//   });

//   $('.select-cate button').on('click', function() {
//     const indexNum = $('.select-cate button').index(this)
//     $('.select-cate button').removeClass('active')
//     $(this).addClass('active');
//     $('.reservation .msg-cate').hide()
//     if (indexNum == 0) {
//       $('.list-product').hide()
//       $('.list-product.test-car').css('display', 'grid')
//       $('.block-box.license').hide()
//       $('.list-product.test-bike input[type="radio"]').prop('checked', false);
//       $('.block-box.license input[type="checkbox"]').prop('checked', false);
//     } else {
//       $('.list-product').hide()
//       $('.list-product.test-bike').css('display', 'grid')
//       $('.block-box.license').show()
//       $('.list-product.test-car input[type="radio"]').prop('checked', false);
//     }
//     $('.btn-line.select-view').css('display', 'flex')
//   })
//   $('.check-one input[type="checkbox"]').click(function () {
//      $('.check-one input[type="checkbox"]').not(this).prop('checked', false);
//    });
   
//   $('.slide-con .open').on('click', function(){
//     $(this).parents('.slide-con').toggleClass('active')
//   })

//   $('.qna-block .qna-title').on('click', function () {
//     $(this).parent().toggleClass('active')
//     $(this).parent().siblings('.qna-block').removeClass('active')
//   })

// }
