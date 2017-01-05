<?php 
   Session_start();
   ?>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>DOMISEP</title>
    <link href="index.css" rel="stylesheet">
</head>
<body>

<div class="main_panel">
    <div id="left_panel">
        <div class="title">
            Welcome<br>
            to DOMISEP
        </div>

        <br>

        <div class="illustration">
            In a word, DOMISEP’s aim is easier and smarter. <br>
            The main feature to this project is the CeMAC, it is an autonomous and mobile data <br>
            acquisition system, working hand in hand with a fully equipped and connected environment. <br>
            Here is a prototype, containing the critical information to show how the system works. It contains <br>
            all the technical specifications,comparisons with different technologies, and also the indoor and <br>
            outdoor dimensioning to ensure the system can be integrated without deep modifications. <br>
        </div>

        <table class="left_panel_footer">
            <tr>
                <td>
                    <span class="domisep">DOMISEP</span>
                </td>
                <td align="right">
                    <span class="ab_us">About us</span>
                </td>
            </tr>
        </table>
    </div>

    <div id="right_panel">

        <div class="search_bar">
            <img src="source/icon1.png" width="30" height="19">
            <input class="search" placeholder="search">
        </div>
<form method="post" action="do_login.php">
        <table class="right_table">
            <tr>
                <td width="180px">
       
                    <span class="usr">User Name</span>
                </td>
                <td>
                    <input class="usr_name_info" placeholder="Phone number/E-mail">
                </td>
            </tr>

            <tr>
                <td>
                    <span class="usr">Password</span>
                </td>
                <td>
                    <input class="pwd_info" type="password">
                </td>
            </tr>

            <tr></tr>

            <tr>
                <td colspan="2" style="text-align: center">
                    <button class="but_login">Login</button>
                    <span class="frt_passwd">Forget password</span>
                </td>

            </tr>

        </table>

</form>


    </div>

</div>
         

</body>
</html>