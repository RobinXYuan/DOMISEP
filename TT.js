/**
 * Created by robinxyuan on 2017/1/23.
 */
$(function checkpwdlen() {
    var password = document.getElementById("pwd");
    var repassword = document.getElementById("repwd");

    var obj = document.getElementById("pss");

    if (password.value.length < 8)
    {
        obj.innerHTML = "<font size=2 color=red>login trop court!</font>";
        return false;
    }

    else
    {
obj.innerHTML = "<font size=2 color=red>OK</font>";
return true;
}
});

$(function checkpwdver() {
    var password = document.getElementById("pwd");
    var repassword = document.getElementById("repwd");

    var obj = document.getElementById("repss");

    if (password.value == repassword.value)
    {
        obj.innerHTML = "<font size=2 color=green>√</font>";
        return true;
    }
    else
    {
        obj.innerHTML = "<font size=2 color=green>×</font>";
        return false;
    }
});