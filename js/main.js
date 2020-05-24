function testMy() {
    line = document.getElementById("line").value;
    my = document.getElementById("my");
    my.innerHTML =line+ "%";
}
$(document).ready(function () {
    $('.js-order-select').on('click', function () {
        $(this).addClass('select_style');
    });
});
