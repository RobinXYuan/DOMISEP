<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>DOMISEP</title>
    <link href="Register.css" rel="stylesheet">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js" charset="utf-8"></script>
    <script type="text/javascript" src="Mail.js"></script>
</head>
<body>

<div id="main_panel">
    <div class="photo">
        <img src="photo.png">
    </div>
<form action=do_register.php method="post">
    <div class="information">
        <table>
            <tr>
                <td><span class="inf">User Name</span></td>
                <td colspan="2"><input type="text" name="username" class="usr_name" placeholder="RobinXYuan" required></td>
            </tr>

            <tr>
                <td><span class="inf">Gender</span></td>
                <td><input class="gender" type="radio" value="1" name="gender" required><span class="gen_inf">Male</span></td>
                <td><input class="gender" type="radio" value="1" name="gender"><span class="gen_inf">Female</span></td>
            </tr>

            <tr>
                <td><span class="inf">Phone Number</span></td>
                <td colspan="2"><input type="text" name="phonenum"   class="phone_num" placeholder="+33 7 84 23 31 20" required></td>
            </tr>

            <tr>
                <td><span class="inf">E-mail Address</span></td>
                <td colspan="2"><input class="e_addr" type="text" name="e_addr" placeholder="domisep@gmail.com" required></td>
            </tr>

            <tr>
                <td><span class="inf">Password</span></td>
                <td colspan="2"><input class="passwd" type="password" name="password1" required> </td>
            </tr>

            <tr>
                <td><span class="inf">Verified Password</span></td>
                <td colspan="2"><input class="passwd" type="password" name="password2" required></td>
            </tr>

            <tr>
                <td colspan="3">
                    <input type="checkbox" class="pol" value="Yes" required><span class="pol_container"> I have accepted all the policies of DOMISEP</span>
                </td>
            </tr>

            <tr>
                <td colspan="3" style="text-align: center">
                <input type="submit" name="submit" value="Signup">
                </td>
            </tr>
        </table>

        <div>

        </div>
        <div>

        </div>

    </div>
    </form>
</div>

</body>
</html>