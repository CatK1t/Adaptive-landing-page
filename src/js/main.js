// Функция для кроссбраузерности (для браузеров которые не поддерживают calc())

window.onload = function(){
    
    if(!checkCalc()){
        var style = document.createElement('link');
        style.setAttribute('rel','stylesheet');
        style.setAttribute('href','css/style-nocalc.css');
        document.body.appendChild(style);
    }

}

function checkCalc(){
    var div = document.createElement('div');
    div.style.cssText = 'width: calc(100%)';
    return div.style.length > 0;
}

// Конец проверки

//Фиксируем шапку

$(document).ready(function(){
    $('.header').removeClass('Fixxed');
    $(window).scroll(function(){
        if($(this).scrollTop() > 20){
            $('.header').addClass('Fixxed');
        }else{
            $('.header').removeClass('Fixxed');
        }
    });
});

// меню

$(document).ready(function(){
    $('.submenu ul').hide();
    $('.submenu').hover(
        function(){
            $(this).find('ul').slideDown();
        }, function(){
            $(this).find('ul').hide();
        });
});
$(document).ready(function(){
    $('.burger, .burger-menu').click(function(){
        $('.burger-menu').toggleClass('menu-opened');
    })
    $(document).click(function(event){
        if($(event.target).closest('.burger').length) {
            return;
        }
        $('.burger-menu').removeClass('menu-opened');
        event.stopPropagation();
    })
});

// слайдер старт
$('.first-section-slick').slick({
    accessibility: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button class="prev"><i class="fa fa-angle-left f-prev" aria-hidden="true"></i></button>',
    nextArrow: '<button class="next"><i class="fa fa-angle-right f-next" aria-hidden="true"></i></button>',
    
}); 

$('.third-container').slick({
    accessibility: true,
    dots: true,
    dotsClass: 'third-dots',
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow: false,
    nextArrow: false,
    
}); 
// слайдер конец
// progress bar 
$(window).on( 'scroll', function() {
    if(!Modernizr.meter){
        alert('Извините, но ваш браузер не поддерживает индикатор прогресса HTML5.');
    } else if($(window).scrollTop() + $(window).height() >= $('.fourth-section').offset().top + $('.fourth-section').height()) {
        var progressbarPhotoshop        = $('#progressbar-photoshop'),
            progressbarHtmlCSS          = $('#progressbar-html-css'),
            progressbarJavaScript       = $('#progressbar-java-script'),
            progressbarWordPress        = $('#progressbar-wordpress'),
            max                         = progressbarPhotoshop.attr('max'),
            time                        = (1000/max)*5,	
            valueProgressbar            = progressbarPhotoshop.val();
            valueProgressbarSecond      = progressbarHtmlCSS.val();
            valueProgressbarJavaScript  = progressbarJavaScript.val();
            valueProgressbarWordPress   = progressbarWordPress.val();

        var loadingFirst = function() {
            valueProgressbar += 1;
            addValue = progressbarPhotoshop.val(valueProgressbar);
            
            $('.progress-value').html(valueProgressbar + '%');

            if (valueProgressbar == 79) {
                clearInterval(animate);			           
            }
        };

        var loadingSecond = function() {
            valueProgressbarSecond += 1;
            addValue = progressbarHtmlCSS.val(valueProgressbarSecond);
            
            $('.progress-second-value').html(valueProgressbarSecond + '%');

            if (valueProgressbarSecond == 90) {
                clearInterval(animateSecond);			           
            }
        };

        var loadingJavaScript = function() {
            valueProgressbarJavaScript += 1;
            addValue = progressbarJavaScript.val(valueProgressbarJavaScript);
            
            $('.progress-third-value').html(valueProgressbarJavaScript + '%');

            if (valueProgressbarJavaScript == 69) {
                clearInterval(animateThird);			           
            }
        };

        var loadingWordPress = function() {
            valueProgressbarWordPress += 1;
            addValue = progressbarWordPress.val(valueProgressbarWordPress);
            
            $('.progress-fourth-value').html(valueProgressbarWordPress + '%');

            if (valueProgressbarWordPress == 92) {
                clearInterval(animateFourth);			           
            }
        };

        var animate = setInterval(function() {
            loadingFirst();
        }, time);

        var animateSecond = setInterval(function() {
            loadingSecond();
        }, time);

        var animateThird = setInterval(function() {
            loadingJavaScript();
        }, time);

        var animateFourth = setInterval(function() {
            loadingWordPress();
        }, time);

        $(window).off('scroll');
    };
});
// progress bar finish

//google map
function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(49.839683, 24.029717),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}