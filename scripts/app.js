$(document).ready(function () {

    $('.btn-xl').click(function () {
        var num = $(this);
        var text = $.trim(num.find('.num').clone().children().remove().end().text());
        var telNumber = $('#telNumber');
        $(telNumber).val(telNumber.val() + text);
    });

});

function limitKeypress(event, value, maxLength) {
    if (value != undefined && value.toString().length >= maxLength) {
        event.preventDefault();
    }
}


function showMessage(){
        var phone = document.getElementById("telNumber").value;
        document.write('<h1 style="color:purple; text-align:center; font-size: 100px; margin-top:50px;">' + 'You dialed:' + '</h1>')
        document.write('<h1 style="color:black; text-align:center; font-size: 100px;">' + phone + '</h1>');
        }
