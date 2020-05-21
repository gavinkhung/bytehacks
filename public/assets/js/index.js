// smooth scroll
$('#navbar a').on('click', function(e){
    if(this.hash !== 'who'){
        e.preventDefault();
        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top-window.innerHeight/15
        }, 800);
    }
    
});

// scroll magic
$(document).ready(function(){
    let controller = new ScrollMagic.Controller();

    $('.paper').each(function(){
        new ScrollMagic.Scene({
            triggerElement: this
        })
        .setClassToggle(this, 'temp')
        .reverse(false)
        .addIndicators()
        .addTo(controller);
    });
});