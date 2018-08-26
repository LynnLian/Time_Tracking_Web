$(document).ready(() => {
    console.log("javascripts loaded!");
});


$('#btn_start').click(() => {
    let startTime = $.now();

    console.log(window.location.pathname);

    $.ajax({
        url: 'start',
        type: 'POST',
        data: {
            startTime: startTime
        }
    }).done(result => {
        console.log('Result of AJAX: ', result);
    });

    console.log("The button is click!");
});
