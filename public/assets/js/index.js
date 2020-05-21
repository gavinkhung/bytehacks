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
            scrollTop: $(hash).offset().top-window.innerHeight/20
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
        .setClassToggle(this, 'temp')
        .reverse(false)
        .addIndicators()
        .addTo(controller);
    });
});