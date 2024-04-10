<?php
// lay gia trij username vaf pass
$user = $_REQUEST['username'];
$pass = $_REQUEST['password'];
echo $user . $pass;

if($user == "" || $pass == ""){
    header("Location:login.php");
   
} else{
    $link = mysqli_connect("localhost", "root", "") or die (" khong ket noi den CSDL".msqli_error());
    $db_selected =  mysqli_select_db($link, 'dulieu');

    $result = mysqli_query($link,"SELECT * FROM admin WHERE Username='$user' and passwork = '$pass'");
   
    if($result->num_rows == 0) header("Location:login.php");
    else header("Location:home1.php");

    mysqli_free_result($result);
    mysqli_close($link);
}
?>