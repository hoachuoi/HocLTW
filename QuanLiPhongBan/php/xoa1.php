<?php
// Khai báo kết nối
$link = mysqli_connect("localhost", "root", "") or die("Không kết nối được đến CSDL: " . mysqli_error());
$db_selected = mysqli_select_db($link, 'dulieu');


// Xử lý khi không có id được cung cấp
$sql = "select * from nhanvien";

//$sql="select * from nhanvien";

$result = mysqli_query($link, $sql);

echo '<a href="home1.php">Home</a>';
echo '<table border ="1" width ="100%">';
echo '<caption> Dữ liệu truy xuất từ bảng nhân viên</caption>';
echo '<TR> <TH>IDNV</TH> <TH>Họ tên</TH> <TH>IDPB</TH> <TH>Địa chỉ</TH> <TH>Xóa nhân viên</TH> </TR>';
while ($row = mysqli_fetch_array($result)) {

    echo '<tr>';
    echo '<td align ="center">' . $row['IDNV'] . '</td>';
    echo '<td align ="center">' . $row['Hoten'] . '</td>';
    echo '<td align ="center">' . $row['IDPB'] . '</td>';
    echo '<td align ="center">' . $row['Diachi'] . '</td>';
    echo "<td><form method='post' action='XuLiXoa1.php'>
<input type='hidden' name='id_nv' value='" . $row['IDNV'] . "'>
<input type='submit' name='submit' value='Xóa'>
</form></td>";
    echo '</tr>';
}
echo '</table>';

mysqli_free_result($result);
mysqli_close($link);
?>
