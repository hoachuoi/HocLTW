<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<?php
            $id='';
            if(isset($_GET['IDPB'])) {
                $id= $_REQUEST['IDPB'];}           
            $link = mysqli_connect("localhost", "root", "") or die (" khong ket noi den CSDL".msqli_error());
            $db_selected =  mysqli_select_db($link, 'dulieu');
            $result = mysqli_query($link,"SELECT * FROM phongban WHERE IDPB='$id'");
            $row =mysqli_fetch_array($result, MYSQLI_ASSOC);
?>         
<body>
    <button  onclick="window.location.href = 'home1.php'">Home</button><br>
    <div>
        <form action="XuLiCapNhat.php?IDPB=<?php echo $row['IDPB']; ?>" method="post">
            <label for="IDPB">IDPB</label>
            <input type="text" name ='IDPB' readonly value =<?php echo $row['IDPB']; ?> >
            <label for="tenPB">Tên phòng ban</label>
            <input type="text" name ='tenPB' required>
            <label for="MoTa">Mô tả</label>
            <input type="text" name ='Mota' required>
            <button type="submit" class="btn">OK</button>
            <button type="reset" class="btn">Reset</button>
        </form>
    </div>
    
</body>
</html>
