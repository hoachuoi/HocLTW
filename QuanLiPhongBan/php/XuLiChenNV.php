<?php
// lay gia trij username vaf pass
$idnv = $_REQUEST['IDNV'];
$IDPB = $_REQUEST['IDPB'];
$tenNV = $_REQUEST['tenNV'];
$Diachi = $_REQUEST['Diachi'];

if($idnv =="" || $IDPB=="" || $tenNV==""){
    header("Location:ChenNV.php");
   
} else{
   
    $link = mysqli_connect("localhost", "root", "") or die (" khong ket noi den CSDL".msqli_error());
    $db_selected =  mysqli_select_db($link, 'dulieu');
    //$sql = "UPDATE phongban SET Tenpb = '$tenPB', Mota = '$MoTa' WHERE IDPB = '$idpb'";
    $sql = "INSERT INTO nhanvien (IDNV, IDPB, Hoten, Diachi) VALUES ('$idnv', '$IDPB', '$tenNV', '$Diachi')";
    if(mysqli_query($link,$sql)=== True){
        header("Location:ChenNV.php");
    } else echo "loiiiii!";
    //mysqli_free_result($result);
    mysqli_close($link);
 }
?>