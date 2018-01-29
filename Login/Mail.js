/**
 * Created by Robbin_2 on 2017/1/10.
 */
$(document).ready(function(){
    $("#but_sign").click(function(){
        if($("#e_addr").val()=="")
        {
            alert("The mail cannot be vacan");
            return false;
        }
        var email=$("#e_addr").val();
        if(!email.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/))
        {
            alert("The format is not right! ");
            $("#e_addr").focus();
        }
    })
})