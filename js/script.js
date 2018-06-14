

$('#direction').click(function () {
    $('#direction').toggleClass('is-active');
    $('.direction_table').toggleClass('is-hidden');
});

$('#living').click(function () {
    $('#living,#tours,#excursion,#car').removeClass('activeBtnOffer');
    $(this).addClass('activeBtnOffer');
});
$('#tours').click(function () {
    $('#tours,#living,#excursion,#car').removeClass('activeBtnOffer');
    $(this).addClass('activeBtnOffer');
});

$('#excursion').click(function () {
    $('#tours,#living,#excursion,#car').removeClass('activeBtnOffer');
    $(this).addClass('activeBtnOffer');
});

$('#car').click(function () {
    $('#tours,#living,#excursion,#car').removeClass('activeBtnOffer');
    $(this).addClass('activeBtnOffer');


});


function range(){
    var
        val = $('.range').val();
    $('.range').css({'background':'-webkit-linear-gradient(left ,#ffc411 0%,#ffc411 '+val+'%,#e4e4e4 '+val+'%, #e4e4e4 100%)'});
};

$(document).ready( function () {


    // VARIABLES
    // ----------------------------------------------------------

    var amount, percent, result;
    var calculator = $('.calculator');
    var calculatorBill = calculator.find('.calculator__bill');
    var calculatorTip = calculator.find('.calculator__tip');
    var calculatorResult = calculator.find('.calculator__result');
    var tipAmount = calculator.find('.tip-amount');


    // INIT BILL
    // ----------------------------------------------------------

    $(window).on('DOMContentLoaded', function () {
        tipAmount.text( calculatorTip.val() + '%' );
        amount = calculatorBill.val() * 1;
        percent = calculatorTip.val() * 1;
        result = amount + amount * ( percent / 100 );
        calculatorResult.text( result.toFixed(2) + '+' );
    });


    // RANGE FUNCTION
    // ----------------------------------------------------------

    calculatorTip.on('change', function () {

        if ( calculatorBill.val() === '' || isNaN( calculatorBill.val() ) ) {
            alert('Enter bill amount, please!')
        } else {
            amount = calculatorBill.val() * 1;
        }

        tipAmount.text( calculatorTip.val() + '%' );
        percent = calculatorTip.val() * 1;
        result = amount + amount * ( percent / 100 );
        calculatorResult.text( result.toFixed(2) + '+' );
    });

});


$('.form_tours__search__btn').click(function () {
    $('.form_tours__search__btn__img').toggleClass('is-rotate');
    $('.form_tours__more_form').toggleClass('heightAuto')
});


$(document).ready(function(){

    $('#tours').click(function(){
        $.ajax({
            url: " ./form_tours.html",
            cache: false,
            success: function(html){
                $("#content").html(html);
            }
        });
    });

    $('#living').click(function(){
        $.ajax({
            url: "./form_living.html",
            cache: false,
            success: function(html){
                $("#content").html(html);
            }
        });
    });
    $('#excursion').click(function(){
        $.ajax({
            url: "./form_excursion.html",
            cache: false,
            success: function(html){
                $("#content").html(html);
            }
        });
    });
    $('#car').click(function(){
        $.ajax({
            url: "./form_car.html",
            cache: false,
            success: function(html){
                $("#content").html(html);
            }
        });
    });

});

$('.section_header__burger').click(function () {
    $('.section_header__burger').toggleClass('activeBurger');
    $('.section_header__menu').toggleClass('hiddenMenu');
});