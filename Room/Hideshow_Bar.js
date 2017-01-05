/**
 * Created by Robbin_2 on 2017/1/3.
 */
$(function () {
    $a = $(window).height();
    $("#sidebar").height($a);
    $("#collapse_btn").click(function () {
        $("#sidebar").animate({left: '-280px'});
        $("#show_btn").delay(500).animate({left: '0'});
    });
    $("#show_btn").click(function () {
        $("#show_btn").animate({left: '-50px'});
        $("#sidebar").delay(500).animate({left: '0'});
    });
});