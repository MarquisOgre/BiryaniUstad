/*
 Project author:     goresto
 File name:          Custom JS
*/

(function ($) {
    'use strict';

    new WOW().init();


    // HEADER Mini Cart
    // -> Basket icon hover
    jQuery(".header-group-icon.basket-link").on({
        mouseenter: function () {
            jQuery(this).parent().parent().find('.header_mini_cart').addClass('visible');
        },
        mouseleave: function () {
            jQuery(this).parent().parent().find('.header_mini_cart').removeClass('visible');
        }
    });
    // -> Basket Mini cart hover. Keep it alive :)
    jQuery(".header_mini_cart").on({
        mouseenter: function () {
            jQuery(this).addClass('visible');
        },
        mouseleave: function () {
            jQuery(this).removeClass('visible');
        }
    });


    // FIXED SEARCH FORM
    jQuery('.mt-search-icon').on( "click", function() {
        jQuery('.fixed-search-overlay').toggleClass('visible');
        jQuery('#page').toggleClass('search-blur');
    });

    jQuery('.fixed-search-overlay .icon-close').on( "click", function() {
        jQuery('.fixed-search-overlay').removeClass('visible');
        jQuery('#page').removeClass('search-blur');
    });
    jQuery(document).keyup(function(e) {
         if (e.keyCode == 27) { // escape key maps to keycode `27`
            jQuery('.fixed-search-overlay').removeClass('visible');
            jQuery('.fixed-sidebar-menu').removeClass('open');
            jQuery('.fixed-sidebar-menu-overlay').removeClass('visible');
            jQuery('#page').removeClass('search-blur');
        }
    });


    // jQuery preloader
    jQuery(window).load(function(){
        jQuery( '.goresto_preloader_holder' ).fadeOut( 1000, function() {
            jQuery( this ).fadeOut();
        });
    });
 

    jQuery('a.print-portfolio').on( "click", function(event) {
        event.preventDefault();
    });


    jQuery('[data-toggle="tooltip"]').tooltip();


    if (jQuery('.author-content').length){
        jQuery(".author-content").stickit({
            screenMinWidth: 768,
            top: 100,
        });
    }
    if (jQuery('.right-side-sharer').length){
        jQuery(".right-side-sharer").stickit({
            screenMinWidth: 768,
            top: 90,
        });
    }

    jQuery('.navbar-toggle').on( "click", function() {
        jQuery('#mt-nav-burger').addClass('open');
        jQuery('#mt-nav-burger').parent().find('.nav-menu').toggleClass('hidden');
    });

    jQuery('#mt-nav-burger').on( "click", function() {
        jQuery(this).toggleClass('open');
        jQuery(this).parent().find('.nav-menu').toggleClass('hidden');
    });

    // 9th MENU Toggle - Hamburger
    var toggles = document.querySelectorAll(".c-hamburger");

    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("is-btn-active") === true) ? this.classList.remove("is-btn-active") : this.classList.add("is-btn-active");
      });
    }



    $(document).ready(function() {

        //Begin: Contact form overlay
        jQuery( ".see_map_button" ).on( "click", function() {
            jQuery( "#map_wrapper_overlay" ).fadeOut('slow');
        });
        //End: Contact form overlay


        jQuery( ".fixed-sidebar-menu .menu-button" ).on( "click", function() {
            jQuery(this).parent().parent().parent().parent().toggleClass('open');
            jQuery(this).toggleClass('open');
        });


        if (jQuery(window).width() < 760) {
            var expand = '<span class="expand"><a class="action-expand"></a></span>';
            jQuery('.navbar-collapse .menu-item-has-children, .navbar-collapse .mega1column, .navbar-collapse .mega2columns, .navbar-collapse .mega3columns').append(expand);

            jQuery('nav #navbar .sub-menu').hide();
            jQuery(".menu-item-has-children .expand a").on("click",function() {
                jQuery(this).parent().parent().find(' > ul').toggle();
                jQuery(this).toggleClass("show-menu");
            });
            jQuery(".mega1column .expand a, .mega2columns .expand a, .mega3columns .expand a").on("click",function() {
                jQuery(this).parent().parent().find(' > .cf-mega-menu').toggle();
                jQuery(this).toggleClass("show-menu");
            });
        }
        
        //Begin: Validate and Submit contact form via Ajax
        jQuery("#contact_form").validate({
            //Ajax validation rules
            validClass:'validated',
            rules: {
                user_name: {
                    required: true,
                    minlength: 2
                },
                user_message: {
                    required: true,
                    minlength: 10
                },
                user_subject: {
                    required: true,
                    minlength: 5
                },
                user_email: {
                    required: true,
                    email: true
                }
            },
            //Ajax validation messages
            messages: {
                user_name: {
                    required: "Please enter a name",
                    minlength: "Your name must consist of at least 2 characters"
                },
                user_message: {
                    required: "Please enter a message",
                    minlength: "Your message must consist of at least 10 characters"
                },
                user_subject: {
                    required: "Please provide a subject",
                    minlength: "Your subject must be at least 5 characters long"
                },
                user_email: "Please enter a valid email address"
            },
            //Submit via Ajax Form
            submitHandler: function() {
                jQuery('#contact_form').ajaxSubmit();
                jQuery('.success_message').fadeIn('slow');
            }
        });
        //End: Validate and Submit contact form via Ajax

        jQuery("#contact01_form").validate({
            //Ajax validation rules
            validClass:'validated',
            rules: {
                user_name: {
                    required: true,
                    minlength: 2
                },
                user_message: {
                    required: true,
                    minlength: 10
                },
                user_subject: {
                    required: true,
                    minlength: 5
                },
                user_email: {
                    required: true,
                    email: true
                }
            },
            //Ajax validation messages
            messages: {
                user_name: {
                    required: "Please enter a name",
                    minlength: "Your name must consist of at least 2 characters"
                },
                user_message: {
                    required: "Please enter a message",
                    minlength: "Your message must consist of at least 10 characters"
                },
                user_subject: {
                    required: "Please provide a subject",
                    minlength: "Your subject must be at least 5 characters long"
                },
                user_email: "Please enter a valid email address"
            },
        });
        //End: Validate and Submit contact form via Ajax



        //Begin: Validate and Submit contact form 2 via Ajax
        jQuery("#contact_form2").validate({
            //Ajax validation rules
            validClass:'validated',
            rules: {
                user_name: {
                    required: true,
                    minlength: 2
                },
                user_message: {
                    required: true,
                    minlength: 10
                },
                user_subject: {
                    required: true,
                    minlength: 5
                },
                user_email: {
                    required: true,
                    email: true
                },
                user_phone: {
                    required: true,
                    minlength: 6,
                    number: true
                },
                user_city: {
                    required: true
                }
            },
            //Ajax validation messages
            messages: {
                user_name: {
                    required: "Please enter a name",
                    minlength: "Your name must consist of at least 2 characters"
                },
                user_message: {
                    required: "Please enter a message",
                    minlength: "Your message must consist of at least 10 characters"
                },
                user_subject: {
                    required: "Please provide a subject",
                    minlength: "Your subject must be at least 5 characters long"
                },
                user_phone: {
                    required: "Please provide a phone number",
                    minlength: "Your phone must be at least 6 numbers long",
                    number: "You must enter a number"
                },
                user_city: {
                    required: "Please provide a city"
                },
                user_email: {
                    required: "Please provide a email",
                    email: "Please enter a valid email address"
                }
            },
            //Submit via Ajax Form
            submitHandler: function() {
                jQuery('#contact_form2').ajaxSubmit();
                jQuery('.success_message').fadeIn('slow');
            }
        });
        //End: Validate and Submit contact form via Ajax


        
        //Begin: Sticky Head
        jQuery(function(){
           if (jQuery('body').hasClass('is_nav_sticky')) {
                // console.log('Enabled - is_nav_sticky');
                jQuery(window).resize(function() {
                    if (jQuery(window).width() <= 768) {
                    // console.log('smaller-than-767');
                    } else {
                        // console.log('bigger-than-767');
                        // console.log('Start STICKY');
                        jQuery("#goresto-main-head").sticky({
                            topSpacing:0
                        });
                    }
                });
                if (jQuery(window).width() >= 768) {
                    // console.log('=>768 Start STICKY');
                    jQuery("#goresto-main-head").sticky({
                        topSpacing:0
                    });
                }
           }
        });



        jQuery('#contact01_form input[name="user_name"]').on('change keyup paste', function() {
            if(jQuery(this).hasClass("validated")){
                jQuery(".cf-progress").addClass("name-validated");
            }else if(!jQuery(this).hasClass("validated")){
                jQuery(".cf-progress").removeClass("name-validated");
            }
        });
        jQuery('#contact01_form input[name="user_email"]').on('change keyup paste', function() {
            if(jQuery(this).hasClass("validated")){
                jQuery(".cf-progress").addClass("email-validated");
            }else if(!jQuery(this).hasClass("validated")){
                jQuery(".cf-progress").removeClass("email-validated");
            }
        });
        jQuery('#contact01_form input[name="user_subject"]').on('change keyup paste', function() {
            if(jQuery(this).hasClass("validated")){
                jQuery(".cf-progress").addClass("subject-validated");
            }else if(!jQuery(this).hasClass("validated")){
                jQuery(".cf-progress").removeClass("subject-validated");
            }
        });
        jQuery('#contact01_form input[name="user_message"]').on('change keyup paste', function() {
            if(jQuery(this).hasClass("validated")){
                jQuery(".cf-progress").addClass("message-validated");
            }else if(!jQuery(this).hasClass("validated")){
                jQuery(".cf-progress").removeClass("message-validated");
            }
        });




        
        //Begin: Parallax
        jQuery('.parralax-background').parallax("50%", 0.5);
        //End: Parallax


        jQuery(".owl-portfolio").owlCarousel({
            navigation      : false, // Show next and prev buttons
            pagination      : true,
            autoPlay        : false,
            slideSpeed      : 700,
            paginationSpeed : 700,
            singleItem:true
        });

        /*Begin: Testimonials slider*/
        jQuery(".quotes-slider").owlCarousel({
            navigation      : false, // Show next and prev buttons
            pagination      : false,
            autoPlay        : true,
            rewindNav       : true,
            slideSpeed      : 700,
            paginationSpeed : 700,
            singleItem      : true
        });

        jQuery(".quotes-container").owlCarousel({
            navigation      : false, // Show next and prev buttons
            pagination      : false,
            autoPlay        : false,
            slideSpeed      : 700,
            paginationSpeed : 700,
            singleItem      : true
        });
        /*Begin: Pastors slider*/
        jQuery(".pastor_slider").owlCarousel({
            navigation      : false, // Show next and prev buttons
            pagination      : false,
            autoPlay        : false,
            slideSpeed      : 700,
            paginationSpeed : 700,
            itemsCustom : [
                [0,     1],
                [450,   1],
                [600,   2],
                [700,   2],
                [1000,  4],
                [1200,  4],
                [1400,  4],
                [1600,  4]
            ]
        });
        /*End: Pastors slider*/
        /*Begin: Clients slider*/
        jQuery(".categories_shortcode").owlCarousel({
            navigation      : false, // Show next and prev buttons
            pagination      : false,
            autoPlay        : false,
            slideSpeed      : 700,
            paginationSpeed : 700,
            navigationText  : ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
            itemsCustom : [
                [0,     1],
                [450,   2],
                [600,   2],
                [700,   5],
                [1000,  5],
                [1200,  5],
                [1400,  5],
                [1600,  5]
            ]
        });
        /*Begin: Products by category*/
        jQuery(".clients-container").owlCarousel({
            navigation      : false, // Show next and prev buttons
            pagination      : false,
            autoPlay        : true,
            slideSpeed      : 700,
            paginationSpeed : 700,
            itemsCustom : [
                [0,     1],
                [450,   2],
                [600,   2],
                [700,   3],
                [1000,  5],
                [1200,  5],
                [1400,  5],
                [1600,  5]
            ]
        });
        /*Begin: Portfolio single slider*/
        jQuery(".portfolio_thumbnails_slider").owlCarousel({
            navigation      : true, // Show next and prev buttons
            pagination      : true,
            autoPlay        : false,
            slideSpeed      : 700,
            paginationSpeed : 700,
            navigationText  : ["",""],
            singleItem      : true
        });
        /*End: Portfolio single slider*/
        /*Begin: Testimonials slider*/
        jQuery(".post_thumbnails_slider").owlCarousel({
            navigation      : false, // Show next and prev buttons
            pagination      : false,
            autoPlay        : false,
            slideSpeed      : 700,
            paginationSpeed : 700,
            singleItem      : true
        });
        var owl = jQuery(".post_thumbnails_slider");
        jQuery( ".next" ).on( "click", function() {
            owl.trigger('owl.next');
        })
        jQuery( ".prev" ).on( "click", function() {
            owl.trigger('owl.prev');
        })
        /*End: Testimonials slider*/
        
        /*Begin: Testimonials slider*/
        jQuery(".testimonials_slider").owlCarousel({
            navigation      : true, // Show next and prev buttons
            pagination      : true,
            autoPlay        : false,
            slideSpeed      : 700,
            paginationSpeed : 700,
            singleItem      : true
        });
        /*End: Testimonials slider*/
        /* Animate */
        jQuery('.animateIn').animateIn();
        // browser window scroll (in pixels) after which the "back to top" link is shown
        var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = jQuery('.back-to-top');




        //hide or show the "back to top" link
        jQuery(window).scroll(function(){
            ( jQuery(this).scrollTop() > offset ) ? $back_to_top.addClass('goresto-is-visible') : $back_to_top.removeClass('goresto-is-visible goresto-fade-out');
            if( jQuery(this).scrollTop() > offset_opacity ) { 
                $back_to_top.addClass('goresto-fade-out');
            }
        });



        //smooth scroll to top
        $back_to_top.on('click', function(event){
            event.preventDefault();
            $('body,html').animate({
                scrollTop: 0 ,
                }, scroll_top_duration
            );
        });



        //Begin: Skills
        jQuery('.statistics').appear(function() {
            jQuery('.percentage').each(function(){
                var dataperc = jQuery(this).attr('data-perc');
                jQuery(this).find('.skill-count').delay(6000).countTo({
                    from: 0,
                    to: dataperc,
                    speed: 5000,
                    refreshInterval: 100
                });
            });
        }); 
        //End: Skills 

    })
} (jQuery) )


//revolution slider buttons delete effect
jQuery('.rev_slider_wrapper .rev_slider .goresto_button').removeClass('animateIn').removeClass('animated');




// contact form effect
(function() {
    // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
    if (!String.prototype.trim) {
      (function() {
        // Make sure we trim BOM and NBSP
        var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        String.prototype.trim = function() {
          return this.replace(rtrim, '');
        };
      })();
    }

    [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
      // in case the input is already filled..
      if( inputEl.value.trim() !== '' ) {
        classie.add( inputEl.parentNode, 'input--filled' );
      }

      // events:
      inputEl.addEventListener( 'focus', onInputFocus );
      inputEl.addEventListener( 'blur', onInputBlur );
    } );

    function onInputFocus( ev ) {
      classie.add( ev.target.parentNode, 'input--filled' );
    }

    function onInputBlur( ev ) {
      if( ev.target.value.trim() === '' ) {
        classie.remove( ev.target.parentNode, 'input--filled' );
      }
    }
  })();