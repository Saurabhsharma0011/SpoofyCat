
$(document).ready(function($){
    var date = "FEB 01 2022 14:00:00 UTC";
    $('#countdown').timeTo({
        timeTo: new Date(new Date(date)),
        displayDays: 2,
        displayCaptions: true,
        fontSize: 32,
        captionSize: 14
      });
      $('#countdown-2').timeTo({
        timeTo: new Date(new Date(date)),
        displayDays: 2,
        displayCaptions: true,
        fontSize: 28,
        captionSize: 12
      });
      $(".nft-click").click(function(){
        $('.soon-container-1').css('opacity','0.9');
        setTimeout(function(){
            $('.soon-container-1').css('opacity','0');
        },800);
      });
    $('.soon-link').click(function(){
        $('.soon-container').css('opacity','0.9');
        setTimeout(function(){
            $('.soon-container').css('opacity','0');
        },800);
    });
    $('.section-header-container-mobile-burger').click(function(){
        $('.burger-menu').css('left','0');
    });
    $('#burger-close').click(function(){
        $('.burger-menu').css('left','100%');
    });
    $('.GJsw-S').click(function(){
        $('.successfull').css('opacity','0.9');
        var $tmp = $("<textarea>");
        $("body").append($tmp);
        $tmp.val($('.contract-input').text()).select();
        document.execCommand("copy");
        $tmp.remove();
        setTimeout(function(){
            $('.successfull').css('opacity','0');
        },700);
    });
});