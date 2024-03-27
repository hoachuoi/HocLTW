<h1>
    xin chao minh la Chuoi ne!
</h1>
<?php $a  = array(1,2,3);
/*
echo $a[0],"<br>";
echo"<br>";
$a[1]= 8;
echo $a[1];*/

// cú pháp câu lệnh foreach:
#foreach( $array as $value) câu lệnh;
#foreach($aray as $key => $value) câu lệnh;

foreach( $a as $i){
    echo $i,"<br>";
} 
//in ra gia trij vaf key
$b =array('a'=>'1','b'=>'2','c'=>'3');
foreach($b as $key=>$i ){
    echo $key;
    echo "=";
    echo $i,"<br>";
}
?>