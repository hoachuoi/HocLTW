<?php
//kkhai bao ket noi
$link = mysqli_connect("localhost", "root", "") or die (" khong ket noi den CSDL".msqli_error());
$db_selected =  mysqli_select_db($link, 'dulieu');

//kiem tra duong dan co thong so gui kem khong
$id='';
$sql="";
if(isset($_GET['IDPB'])) {
    $id= $_GET['IDPB'];
    $sql = "SELECT * FROM nhanvien WHERE IDPB = '$id'";
    // Sử dụng $id để thực hiện các thao tác tiếp theo, ví dụ: truy vấn cơ sở dữ liệu, xử lý dữ liệu, v.v.
} else {
    // Xử lý khi không có id được cung cấp
    $sql="select * from nhanvien";
}
//$sql="select * from nhanvien";

$result = mysqli_query($link, $sql);
#$result = msqli_query("select * from nhanvien");
echo '<table border ="1" width ="100%">';
echo '<caption> Du lieu truy xuat tu bang nhan vien</caption>';
echo '<TR> <TH>IDNV</TH> <TH>Ho ten</TH> <TH>IDPB</TH> <TH>Dia chi</TH> </TR>';
while($row = mysqli_fetch_array($result)){
    #$idsv = $row{"IDNV"};
    #$hoten = $row{"Hoten"};
    #$idpb = $row{"IDPB"};
    #$diachi= $row{"Diachi"};
    #echo "<tr> <td>idnv</td> <td>hoten</td> <td>idpb</td> <td>diachi</td> </tr>";
    echo '<tr><td>' . $row['IDNV'] . '</td><td>' . $row['Hoten'] . '</td><td>' . $row['IDPB'] . '</td><td>' . $row['Diachi'] . '</td></tr>';
}
echo '</TABLE';
mysqli_free_result($result);
mysqli_close($link);
?>