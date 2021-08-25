$(function(){
    var m = 1.5;
    var w,h,t;
    w = $(".bg").width();
    h = $(".bg").height();
    t = $(".bg").offset().top;
    $(window).on("mousemove", function(e){
        var horTilt = ((e.clientX / w) * (m * 2)) - m;
        var verTilt = (((e.clientY - t) / h) * (m * 2)) - m;					
        gsap.to('.bg', {duration: 1, rotationY:horTilt, rotationX:-verTilt, scale: 1.05, ease:Power1.easeOut});
        // console.log("rotationX : " + verTilt);
        // console.log("rotationY : " + horTilt);
    })
})
