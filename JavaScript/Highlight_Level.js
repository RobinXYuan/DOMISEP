/**
 * Created by Robbin_2 on 2017/1/3.
 */
$(function () {

    $(".side_info dd").hide();
    $(".side_info dl").mouseover(function () {

            $(this).css({
                "background-color": "rgba(30, 150, 237, 0.8)"
            });
        }
    )
    $(".side_info dl").mouseleave(function () {
        $(".side_info dl").css({
            "background-color": " rgba(17, 26, 41, 0)"
        });

    })
})