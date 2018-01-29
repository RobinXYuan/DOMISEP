/**
 * Created by Robbin_2 on 2017/1/10.
 */
$(function($){
    var $box = $('#box2');
    var $bg = $('#bg2');
    var $bgcolor = $('#bgcolor2');
    var $btn = $('#bt2');
    var $text = $('#text2');
    var statu = false;
    var ox = 0;
    var lx = 0;
    var left = 0;
    var bgleft = 0;
    $btn.mousedown(function(e){
        lx = $btn.offset().left;
        ox = e.pageX - left;
        statu = true;
    });
    $(document).mouseup(function(){
        statu = false;
    });
    $box.mousemove(function(e){
        if(statu){
            left = e.pageX - ox;
            if(left < 0){
                left = 0;
            }
            if(left > 300){
                left = 300;
            }
            $btn.css('left',left);
            $bgcolor.width(left);
            $text.html('Position:' + parseInt(left/3) + '%');
        }
    });
    $bg.click(function(e){
        if(!statu){
            bgleft = $bg.offset().left;
            left = e.pageX - bgleft;
            if(left < 0){
                left = 0;
            }
            if(left > 300){
                left = 300;
            }
            $btn.css('left',left);
            $bgcolor.stop().animate({width:left},300);
            $text.html('Position:' + parseInt(left/3) + '%');
        }
    });
});