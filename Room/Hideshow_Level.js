/**
 * Created by Robbin_2 on 2017/1/3.
 */
$(function () {

    $(".side_info dt").mouseover(function () {

            $(this).css({
                "background-color": "rgba(30, 150, 237, 0.8)"
            });
            $(this).stop(false, true).parent().find('dd').slideDown(300);
        }
    )
    $(".side_info dl").mouseleave(function () {

        $(".side_info dt").css({
            "background-color": " rgba(17, 26, 41, 0"
        });

        $(this).parent().find('dd').stop(true, true).slideUp(300);

    })
})