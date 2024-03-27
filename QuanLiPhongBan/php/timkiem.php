<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tim kiem</title>
</head>

<body>
    <div>
        <form method="GET" action="timkiem.php">
            <input type="text" name ="keyword">
            <input type="submit" name = "bt">
            <!-- <select name="lst" id="lst">
                    <option value="">IDNV</option>
                    <option value="">Ho Ten</option>
                    <option value="">IDPB</option>
                    <option value="">Dia chi</option>
                </select> -->
        </form>
    </div>
    <?php
        //kkhai bao ket noi
        $link = mysqli_connect("localhost", "root", "") or die (" khong ket noi den CSDL".msqli_error());
        $db_selected =  mysqli_select_db($link, 'dulieu');
        if(isset($_GET['keyword'])) {
            $keyword = $_GET['keyword'];
            // Chuẩn bị truy vấn
            $sql = "SELECT * FROM nhanvien WHERE IDNV LIKE '%$keyword%' OR Hoten LIKE '%$keyword%' OR IDPB LIKE '%$keyword%' OR Diachi LIKE '%$keyword%'";
            $result = mysqli_query($link, $sql);

            if ($result->num_rows > 0) {
                // Hiển thị kết quả
                echo "<h3>Kết quả tìm kiếm:</h3>";
                echo '<table border ="1" width ="100%">';
                echo "<table border='1' width ='100%' >
                        <tr>
                            <th>IDNV</th>
                            <th>Họ tên</th>
                            <th>IDPB</th>
                            <th>Địa chỉ</th>
                        </tr>";
                while($row = $result->fetch_assoc()) {
                    echo "<tr>
                            <td>".$row["IDNV"]."</td>
                            <td>".$row["Hoten"]."</td>
                            <td>".$row["IDPB"]."</td>
                            <td>".$row["Diachi"]."</td>
                        </tr>";
                }
                echo "</table>";
            } else {
                echo "Không tìm thấy kết quả phù hợp.";
            }
            mysqli_free_result($result);
        }
        // Đóng kết nối
        mysqli_close($link);
    ?>
</body>
</html>