<?php
        //khai bao ket noi
        $link = mysqli_connect("localhost", "root", "") or die (" khong ket noi den CSDL".msqli_error());
        $db_selected =  mysqli_select_db($link, 'dulieu');

        if (isset($_REQUEST['keyword']) && isset($_REQUEST['radio'])) {
            $keyword = $_REQUEST['keyword'];
            $searchOption = $_REQUEST['radio'];

            // Escape user input to prevent SQL injection
            $keyword = mysqli_real_escape_string($link, $keyword);

            // Tạo truy vấn dựa trên lựa chọn tìm kiếm
            if ($searchOption == 'Idnv') {
                $query = "SELECT * FROM nhanvien WHERE IDNV like '%$keyword%'";
            } else if ($searchOption == 'Hoten') {
                $query = "SELECT * FROM nhanvien WHERE Hoten LIKE '%$keyword%'";
            } else if ($searchOption == 'Idpb') {
                $query = "SELECT * FROM nhanvien WHERE IDPB like '%$keyword%'";
            }
            $result = mysqli_query($link, $query);   

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