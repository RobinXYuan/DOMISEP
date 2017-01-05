<?php
    session_start();
	$my_user="wangmeibao";
	$my_pin="2017";
	  if (isset($_POST['usr_name_info'])&&isset($_POST['pwd_info']))
	   {
	   if($_POST['usr_name_info']==$my_user&&$_POST['pwd_info']==$my_pin)
	   {
	   	 $_SESSION['is_login']==TRUE;
		 header("location:backend.php");
	   }
	   }
	   else {
		  $_SESSION['is_login']==FALSE; 
		  $_SESSION['msg']='The account or password is wrong,Please login in again';
		  header("location:index.php");
	   }
	   
?>