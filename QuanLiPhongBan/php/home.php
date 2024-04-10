<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    .bt{
        width: 30%;
        padding: 10px;
        margin: 10px;
        color: #fff;
        background-color: #007bff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    .bt1{
        width: 30%;
        padding: 10px;
        margin-left: 750px;
        color: #fff;
        background-color: #FF0000;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    .nav{
        display: flex;
        align-items: center;
    }
</style>
<body>
    <div class='nav' >
    <h1 class="" >Trang chủ</h1>
     <button class="bt1" onclick="window.location.href = 'login.php'">Đăng nhập</button>
    </div>  
    
    <div>
        <button class="bt" onclick="window.location.href = 'XemthongtinNV.php'">Xem thông tin nhân viên</button><br>
        <button class="bt" onclick="window.location.href = 'XemthongtinPB.php'">Xem thông tin phòng ban</button><br>
        <button class="bt" onclick="window.location.href = 'TimKiem.php'">Tìm kiếm</button>
    </div>  
</body>
</html>