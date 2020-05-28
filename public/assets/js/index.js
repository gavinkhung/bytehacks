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
            scrollTop: $(hash).offset().top-window.innerHeight/15
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