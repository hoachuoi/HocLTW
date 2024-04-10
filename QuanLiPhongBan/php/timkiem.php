<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tim kiem</title>
</head>

<body>
    <div>
        <form method="post" action="XuliTimKiem.php">
            <input type="radio" id="radio" name="radio" value="Hoten">
            <label for="Hoten">Họ tên</label>
            <input type="radio" id="radio" name="radio" value="Idnv">
            <label for="Idnv">ID Nhân viên</label>
            <input type="radio" id="radio" name="radio" value="Idpb">
            <label for="Idpb">ID Phòng ban</label><br>
            <input type="text" name ="keyword">
            <input type="submit" name = "bt">
        </form>
    </div>
</body>
</html>