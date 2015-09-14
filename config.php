<?php

$servername='172.16.10.22';
$username='sampatti';
$password='clsdir';
$conn=mysql_connect($servername, $username, $password);
$dtbs=mysql_select_db('db_emp1638',$conn)or die("error");

?>