<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<?php        
            $link = mysqli_connect("localhost", "root", "") or die (" khong ket noi den CSDL".msqli_error());
            $db_selected =  mysqli_select_db($link, 'dulieu');
            $result = mysqli_query($link,"SELECT IDNV FROM nhanvien");        
            
            // Khởi tạo mảng để lưu trữ IDNV
            $idnvArray = array();
            $idpbArr = array();
            // Lặp qua các hàng kết quả và lưu IDNV vào mảng
            while ($row = mysqli_fetch_assoc($result)) {
                $idnvArray[] = $row['IDNV'];
                $idpbArr[] = $row['IDPB'];
            }
?>  
<script>
    var idnvArray = <?php echo json_encode($idnvArray); ?>;
    // Hàm kiểm tra xem một IDNV có tồn tại trong mảng không
    function CkeckIDNV(id_nv) {
        if (idnvArray.includes(id_nv)) {
            alert("ID Nhân viên " + id_nv+ " đã tồn tại trong danh sách.");
        }else{} 
    }
</script>       
<body >
    <div>
        <form action="XuLiChenNV.php" method="post" name="f1">
            <button class="bt" onclick="window.location.href = 'home1.php'">Trang chủ</button>
            <label for="IDNV">IDNV</label>
            <input type="text" name ="IDNV" value="" required onblur="CkeckIDNV(value)">

            <label for="tenNV">Họ tên</label>
            <input type="text" name ='tenNV' required>

            <label for="IDPB">Phòng ban</label>
            <input type="" name ='IDPB' required>

            <label for="Diachi">Địa chỉ</label>
            <input type="text" name ='Diachi' required>
           
            <button type="submit" class="btn">OK</button>
            <button type="reset" class="btn">Reset</button>
        </form>
    </div>
    
</body>
</html>
