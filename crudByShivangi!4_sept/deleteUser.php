<?php
include('config.php');


    $data = json_decode(file_get_contents("php://input"));     
    $index = $data->prod_index;     echo $index;
    //print_r($data)   ;
	$sqlDel="DELETE  FROM forPracticalNg WHERE id = '".$index."'";
	print_r($sqlDel);
    $del = mysql_query($sqlDel);
    if($del)
	{
		header('location:lsiting.html');
	}
	
	print_r($del);
    return true;
    return false;     




?>