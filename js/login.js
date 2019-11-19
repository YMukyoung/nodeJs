$('.message a').click(() => {
    alert("ss");
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});