<?php
//kkhai bao ket noi
$link = mysqli_connect("localhost", "root", "") or die (" khong ket noi den CSDL".msqli_error());
$db_selected =  mysqli_select_db($link, 'dulieu');
$sql="select * from phongban";
$result = mysqli_query($link, $sql);
echo '<a href="home1.php">Home</a>';

echo '<table border ="1" width ="100%">';
echo '<caption> Du lieu truy xuat tu bang nhan vien</caption>';
echo '<TR> <TH>IDPB</TH> <TH>Ten Phong Ban</TH> <TH>Mo ta</TH> <TH>Cap Nhat</TH> </TR>';
while($row = mysqli_fetch_array($result)){
    echo '<tr><td align ="center">' . $row['IDPB'] . '</td><td>' . $row['Tenpb'] . '</td><td>' .
     $row['Mota'] .  '</td><td align ="center"> 
    <a href="formCapNhat.php?IDPB=' . $row['IDPB'] . '">Cập Nhật</a></tr>';
}
echo '</TABLE';
mysqli_free_result($result);
mysqli_close($link);
?>