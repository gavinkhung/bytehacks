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
    const genderChartElement = document.getElementById('chart1').getContext('2d');
    const genderChart = new Chart(genderChartElement, {
        type: 'pie',
        data: {
            labels: ['Female', 'Prefer not to say', 'Male'],
            datasets: [{
                label: '',
                data: [42.5, 2, 55.5],
                backgroundColor: [
                    'rgba(86, 140, 131, 1.0)',
                    'rgba(39, 106, 161, 1.0)',
                    'rgba(78, 181, 164, 1.0)'
                ],
                borderColor: [
                    'rgba(86, 140, 131, 1.0)',
                    'rgba(39, 106, 161, 1.0)',
                    'rgba(78, 181, 164, 1.0)'
                ],
                borderWidth: 1
            }],
        },
        options: {
            legend: {
                labels: {
                    fontColor: 'black',
                    fontSize: 20
                }
            }
        }
    });

    const gradeChartElement = document.getElementById('chart2').getContext('2d');
    const gradeChart = new Chart(gradeChartElement, {
        type: 'pie',
        data: {
            labels: ['Middle School', 'High School'],
            datasets: [{
                label: '',
                data: [34.2, 65.8],
                backgroundColor: [
                    'rgba(132, 94, 189, 1.0)',
                    'rgba(86, 105, 174, 1.0)'
                ],
                borderColor: [
                    'rgba(132, 94, 189, 1.0)',
                    'rgba(86, 105, 174, 1.0)'
                ],
                borderWidth: 1
            }],
        },
        options: {
            legend: {
                labels: {
                    fontColor: 'black',
                    fontSize: 20
                }
            }
        }
    });
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

$("#recap_pdf").click(function(e){
    e.preventDefault();
    $('#recap_pdf_image.ui.modal').modal('show');
});

// sign up
// $("#signUp").click(function(e){
//     e.preventDefault();
//     window.open("https://bytehacks1.typeform.com/to/WhoxyB", "_blank");
// });

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

// closing ceremony
$("#closing").click(function(e){
    e.preventDefault();
    window.open("https://docs.google.com/presentation/d/1c-UlUuVOSqTN89w7SDki-Ekj7t6TyOI_srRz05jBvOc/edit?usp=sharing", "_blank");
});

// svg size for IE and Firefox
let isIE = /*@cc_on!@*/false || !!document.documentMode;
let isFirefox = typeof InstallTrigger !== 'undefined';
if(isIE || isFirefox){
    console.log("isIE", isIE, "isFirefox", isFirefox);
    $('.logo').remove();
    $('.title').text("Byte Hacks");
}