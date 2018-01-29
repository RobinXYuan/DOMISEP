<?php

header("content-type:text/html;charset=utf-8");

$conn = mysqli_connect("localhost","root","","APP");

$login = $_POST['login'];
$pass = $_POST['pass'];
$repass = $_POST['repass'];

$password = mysqli_query($conn, "SELECT password FROM user WHERE login = $login");

if (!$password)
{
    echo "<script>alert('No User!')</script>";

    $status = mysqli_query("INSERT INTO user(login, password) VALUES ('{$login}','{$password}')");

    if ($status)
    {
        echo "<script>alert('Add user success!')</script>";
    }
    else if (!$status)
    {
        echo "<script>alert('Add user failure!')<script>";
    }
}

else if (password)
{
    while ($passwd = mysqli_fetch_assoc($password))
    {
        if ($pass == $passwd['password'])
        {
            echo "<script>alert('Correct!')</script>";
        }
        else if($pass != $passwd['password'])
        {
            echo "<script>alert('False!')</script>";
        }
    }
}

?>