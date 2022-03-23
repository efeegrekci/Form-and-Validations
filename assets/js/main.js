$(document).ready(function () {

    // Resize Page Refresh
    $(window).bind('resize', function (e) {
        if (window.RT) clearTimeout(window.RT);
        window.RT = setTimeout(function () {
            this.location.reload(false);
        }, 100);
    });
    // Resize Page Refresh

    // Phone Mask
    $('.form_phone').mask('(000) 000 00 00');
    // Phone Mask

    // Validation and Click
    $('.buttonBox.sendForm a').click(function () {
        $(".checkColon .inputCheckBox").each(function () {
            if ($(this).prop("checked") == true) {
                $(this).parent(".checkColon").removeClass("error")
            } else {
                $(this).parent(".checkColon").addClass("error")
            }
        });
        if ($('#form').valid() && !$('.formBox .checkColon').hasClass('error')) {
            console.log("Success")
            $(".successMask").addClass("active")
        }
        else{
            $(".errorMessage").addClass("active")
            console.log("Error")
        }
    });
    // Validation and Click
});