$(document).ready(function () {

    $('.btn-xl').click(function () {
        var num = $(this);
        var text = $.trim(num.find('.num').clone().children().remove().end().text());
        var telNumber = $('#telNumber');
        $(telNumber).val(telNumber.val() + text);
    });

});
