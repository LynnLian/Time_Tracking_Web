$(document).ready(() => {
    console.log('index.js is loaded!')
});

$('#btn_start').click(() => {

    console.log('CLiking')

    let startTime = Math.floor($.now() / 1000);


    //TODO: later I want to add .fail .always in the scenario
    $.post('/start', {startTime: startTime}).done(function () {
        console.log('Post startTime is done.')

    });

    console.log('clicked.')


});

$('#btn_search').click(() => {
    let days = $('#drop_search_days').val();

    console.log(days);

    $.get('/search/days/' + days).done((data) => {
        console.log('response:', data);


        let length = data.length;
        let content = "";
        for (let i = 0; i < length; i++) {
            content += '<tr><th scope="row">' + i + '</th>';
            content += '<td>' + data[i].startTime + '</td>';
            content += '<td>' + data[i].endTime + '</td></tr>';
        }
        // content += "</table>"

        $('#tableHistoryHead').append(content);


    })

});
