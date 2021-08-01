$(document).ready(()=>{
    wrap=$("#wrap");
    $("#blue_ball").bind('animationend animationend webkitAnimationEnd', function(e) {
        $("#blue_ball").css({"animationName":"expand","animation-timing-function":"ease-in-out","animation-duration":"3s","animation-fill-mode": "forwards"});
    });
    setTimeout(()=>{
        $(".name").css({"display":"none"});
        $(".spotlight").css({"display":"none"});
        $(".root").css({"background-color":"#cce6ff"});
    },5000);
    setTimeout(()=>{
        $(".root").css({"display":"none"});
        wrap.css({"display":"contents"});
        AOS.init();
        wrap.removeClass("wrap");
        $(".blue_ball1").css({"animation-name": "bounceball"})
    },7000);
    setTimeout(()=>{
        $(".greet").css({"display":"block"});
        $(".blue_ball1").css({"display":"none"});
    },8000);

});

