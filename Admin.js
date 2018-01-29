function formcheck(){
    var uid_room = document.getElementById("userid_room");
    var uid_sensor = document.getElementById("userid_sensor")
    if (uid_room == "")
    {
        alert("The USER ID cannot be vacan!");
        return false;
    }
    else if (uid_sensor == "")
    {
        alert("The USER ID cannot be vacan!");
        return false;
    }
}