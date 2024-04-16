<?php
// Kiểm tra xem dữ liệu được gửi từ form hay không
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit'])) {
    // Nhận dữ liệu IDNV từ form
    $id_nv = $_POST['id_nv'];

    // Kết nối đến cơ sở dữ liệu
    $conn = mysqli_connect("localhost", "root", "", "dulieu");

    // Kiểm tra kết nối
    if (!$conn) {
        die("Kết nối thất bại: " . mysqli_connect_error());
    }

    // Chuẩn bị câu truy vấn SQL để xóa nhân viên
    $sql = "DELETE FROM nhanvien WHERE IDNV = '$id_nv'";

    // Thực thi câu truy vấn
    if (mysqli_query($conn, $sql)) {
        echo "Đã xóa nhân viên thành công.";
        header("Location:Xoa1.php");
    } else {
        echo "Lỗi: " . mysqli_error($conn);
    }
    // Đóng kết nối
    mysqli_close($conn);

}
?>