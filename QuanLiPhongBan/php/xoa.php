<?php
// Khai báo kết nối
$link = mysqli_connect("localhost", "root", "") or die ("Không kết nối đến CSDL: " . mysqli_error());
$db_selected = mysqli_select_db($link, 'dulieu');

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['delete'])) {
    // Kiểm tra xem sinh viên đã được chọn hay chưa
    if(isset($_POST['selected'])) {
        // Lặp qua mảng các sinh viên đã chọn và thực hiện câu lệnh xóa
        foreach($_POST['selected'] as $id) {
            // Escape giá trị để tránh SQL injection
            $id = mysqli_real_escape_string($link, $id);

            // Câu lệnh SQL xóa sinh viên
            $sql = "DELETE FROM nhanvien WHERE IDNV = '$id'";

            // Thực thi câu lệnh SQL
            if (!mysqli_query($link, $sql)) {
                echo "Lỗi khi xóa sinh viên: " . mysqli_error($link);
            }
        }
    } else {
        echo "Vui lòng chọn ít nhất một sinh viên để xóa.";
    }
}

// Lấy dữ liệu từ bảng nhanvien
$sql = "SELECT * FROM nhanvien";
$result = mysqli_query($link, $sql);
echo '<a href="home1.php">Home</a>';

// Hiển thị bảng dữ liệu
echo '<form method="post">';
echo '<table border="1" width="100%">';
echo '<caption>Dữ liệu truy xuất từ bảng nhân viên</caption>';
echo '<tr><th>IDNV</th><th>Họ tên</th><th>IDPB</th><th>Địa chỉ</th><th>Chọn</th></tr>';

while($row = mysqli_fetch_array($result)) {
    echo '<tr>';
    echo '<td>' . $row['IDNV'] . '</td>';
    echo '<td>' . $row['Hoten'] . '</td>';
    echo '<td>' . $row['IDPB'] . '</td>';
    echo '<td>' . $row['Diachi'] . '</td>';
    echo '<td><input type="checkbox" name="selected[]" value="' . $row['IDNV'] . '"></td>';
    echo '</tr>';
}

echo '</table>';
echo '<input type="submit" name="delete" value="Xóa">';
echo '</form>';

mysqli_free_result($result);
mysqli_close($link);
?>
