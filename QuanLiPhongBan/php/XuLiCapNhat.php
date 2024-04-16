<?php
// lay gia trij username vaf pass
$idpb = $_REQUEST['IDPB'];
$tenPB = $_REQUEST['tenPB'];
$MoTa = $_REQUEST['Mota'];
echo $idpb . $tenPB . $MoTa;
if($idpb =="" || $tenPB=="" || $MoTa==""){
    header("Location:formCapNhat.php");
   
} else{
    echo "haaaa". $idpb . $tenPB . $MoTa;
    $link = mysqli_connect("localhost", "root", "") or die (" khong ket noi den CSDL".msqli_error());
    $db_selected =  mysqli_select_db($link, 'dulieu');
    $sql = "UPDATE phongban SET Tenpb = '$tenPB', Mota = '$MoTa' WHERE IDPB = '$idpb'";
    
    if(mysqli_query($link,$sql)=== True){
        header("Location:CapNhat.php");
    } else echo "loiiiii!";
   

    //mysqli_free_result($result);
    mysqli_close($link);
 }
?>