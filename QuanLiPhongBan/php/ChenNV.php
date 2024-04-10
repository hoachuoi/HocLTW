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
//             $result = mysqli_query($link,"SELECT * FROM phongban WHERE IDPB='$id'");
//             $row =mysqli_fetch_array($result, MYSQLI_ASSOC);
?>         
<body>
    <div>
        <form action="XuLiChenNV.php" method="post">
            <label for="IDNV">IDNV</label>
            <input type="text" name ='IDNV' required>

            <label for="tenNV">Họ tên</label>
            <input type="text" name ='tenNV' required>

            <label for="IDPB">Phòng ban</label>
            <input type="text" name ='IDPB' required>

            <label for="Diachi">Địa chỉ</label>
            <input type="text" name ='Diachi' required>
           
            <button type="submit" class="btn">OK</button>
            <button type="reset" class="btn">Reset</button>
        </form>
    </div>
    
</body>
</html>
