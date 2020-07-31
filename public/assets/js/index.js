// smooth scroll
$('#navbar a').on('click', function(e){
    if(this.hash !== 'who'){
        e.preventDefault();
        const hash = this.hash;
        document.querySelector('.box').scrollTop = 0;
        $('.box').animate({
            scrollTop: 0
        }, 0);
        $('.box').animate({
            scrollTop: $(hash).offset().top-window.innerHeight/12
        }, 800);
    }
});

// scroll magic
$('.box').ready(function(){
    let controller = new ScrollMagic.Controller();
    $('.paper').each(function(){
        new ScrollMagic.Scene({
            triggerElement: this
        })
        .setClassToggle(this, 'fade-in')
        .reverse(false)
        .addTo(controller);
    });
});

// resize
$(document).ready(function(){
    resize();
});
$(window).on('resize', function() {
    resize();
});
function resize(){
    if ($(window).width() < 750) {
        $('#navbar').removeClass('fixed');
    } else {
        $('#navbar').addClass('fixed');
    }
}

// modal
$("#prospectus").click(function(){
    $('#prospectus_image.ui.modal').modal('show');
});

$("#rubric").click(function(e){
    e.preventDefault();
    $('#rubric_image.ui.modal').modal('show');
});

// sign up
$("#signUp").click(function(e){
    e.preventDefault();
    window.open("https://bytehacks1.typeform.com/to/WhoxyB", "_blank");
});

// devpost
$("#devpost").click(function(e){
    e.preventDefault();
    window.open("https://byte-hacks-2020.devpost.com/", "_blank");
});

// discord
$("#discord").click(function(e){
    e.preventDefault();
    window.open("https://discord.com/invite/DKYUKs8", "_blank");
});

// youtube
$("#youtube").click(function(e){
    e.preventDefault();
    window.open("https://www.youtube.com/channel/UCaJ4cE6PU3BR9Q6Jg1ygScA/featured?disable_polymer=1", "_blank");
});

// opening ceremony
$("#opening").click(function(e){
    e.preventDefault();
    window.open("https://docs.google.com/presentation/d/1DoEZS16J332tov5lJgrxZaMjiGb2fJhlcNy0c2pWGwQ/edit", "_blank");
});

//
let isIE = /*@cc_on!@*/false || !!document.documentMode;
let isFirefox = typeof InstallTrigger !== 'undefined';
if(isIE || isFirefox){
    console.log("isIE", isIE, "isFirefox", isFirefox);
    $('.logo').remove();
    $('.title').text("Byte Hacks");
}