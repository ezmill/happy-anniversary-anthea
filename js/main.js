// go to this site http://www.iemoji.com/browse/emoji/category
// and this http://api.jquery.com/animate/
    // function init()
    // {
    //   cm_tline = new Orbit('anthea');
    // }

var target = $('#content');
var targetHeight = target.outerHeight();
target.css('opacity',0)
$(document).scroll(function(e){
    var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
    if(scrollPercent >= 0){
        target.css('opacity', 1-scrollPercent+.1);
        $('#image').css('opacity', scrollPercent);
    }
    $('#scroll-down').hide();
});

var emojiBank = ["\u263A", "\uD83D\uDC97", "\uD83D\uDC8F", "\uD83D\uDE0D", "\uD83D\uDC96", "\uD83D\uDC90", "\uD83C\uDF89"];


$(document).ready(function(){
    var time = 0, elapsed = '0.0';
    window.setInterval(function(){
        time += 100;
        elapsed = Math.floor(time / 100)/10;
        if(Math.round(elapsed) == elapsed) { 
            elapsed += '.0'; 
        }
        //console.log(elapsed);
          if(elapsed>5){
                return;
            }
    }, 100);
    for(var i = 0; i < 50; i++){
            var rand = Math.floor(Math.random()*emojiBank.length);
            console.log(rand);
            var div = $('<span></span>');
            div.addClass("emoji")
            div.html(minEmoji(emojiBank[rand]));
            div.appendTo($('#text-wrapper'));
            div.hide();
            

        };
       //$('.emoji').hide();
     //  $('.emoji').css("opacity", 1);
   theta = 1/2;
    $('#anthea').hover(function(){
       //$('.emoji').show();
                randomNum = (Math.random()*emojiBank.length);
         // $('.emoji').each(function(){
         //    $(this).animate({
         //    // // width: "+=100px"

         //     "left": ("+=" + (Math.cos(theta)*10) + "px"),
         //    // "top": ("+=" + Math.random()*100 + "px"),
         //    //'transform': 'scale(+=2,+=2)'
         //     }, "fast" )
        //});
    }, function(){
        //$('.emoji').hide();
    });

    // $('#anthea').click(function(){
    //     setInterval(function(){
    //         theta+=Math.PI;
    //         $('span').each(function(){
    //             $(this).animate({
    //         // // width: "+=100px"

    //          "left": ("+=" + (Math.sin(theta)*1000) + "px"),
    //          "top": ("+=" + (Math.cos(theta)*1000) + "px"),
    //         //'transform': 'scale(+=2,+=2)'
    //          } )
    //     });
    //     },Math.PI*10);
        
    // });

    
    $('#anthea').hover(function(){
        $('.emoji').show();
              $(".emoji").each(function() {
                $(this).circulate({
                speed: Math.floor(Math.random()*500) + 100,
                height: Math.floor(Math.random()*500) - 250,
                width: Math.floor(Math.random()*500) - 250,
                loop: true
            });
        });
    },
        function(){
            $('.emoji').each(function(){
                $(this).circulate({
 
                loop: false
                });
            });
            $('.emoji').hide();
        }
    );

    $('#anthea').click(function(){
        //$('.emoji').hide();
            //   $(".emoji").each(function() {
            //     $(this).circulate({
            //     speed: Math.floor(Math.random()*300) + 100,
            //     height: Math.floor(Math.random()*500) - 250,
            //     width: Math.floor(Math.random()*500) - 250,
            //     loop: false
            // });
        });



});


