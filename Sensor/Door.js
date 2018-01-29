/**
 * Created by Robbin_2 on 2017/1/13.
 */
//弹出隐藏层
function ShowDiv(show_div, bg_div, iner_div1, iner_div2) {
    document.getElementById(show_div).style.display = 'block';
    document.getElementById(bg_div).style.display = 'block';
    document.getElementById(iner_div1).style.display = 'block';
    document.getElementById(iner_div2).style.display = 'block';
    var bgdiv = document.getElementById(bg_div);
    bgdiv.style.width = document.body.scrollWidth;
// bgdiv.style.height = $(document).height();
    $("#" + bg_div).height($(document).height());
};
//关闭弹出层
function CloseDiv(show_div, bg_div, iner_div1, iner_div2) {
    document.getElementById(show_div).style.display = 'none';
    document.getElementById(bg_div).style.display = 'none';
    document.getElementById(iner_div1).style.display = 'none';
    document.getElementById(iner_div2).style.display = 'none';
};