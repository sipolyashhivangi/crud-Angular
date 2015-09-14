<?php

$servername='172.16.10.22';
$username='sampatti';
$password='clsdir';
$conn=mysql_connect($servername, $username, $password);
$dtbs=mysql_select_db('db_emp1638',$conn)or die("error");

		$post_date = file_get_contents("php://input");
		$data = json_decode($post_date);
print_r($data);
		$name= $data->name;
		$username= $data->userName;
		$password=$data->password;
		$cpassword=$data->cpassword;
		$email=$data->email;
		echo $contactno =$data->contactno;
		$country= $data->country->displayName;
		$state =$data->state->displayName;
		$city =$data->city->displayName;
	
		$sql ="insert into forPracticalNg (name, username, password, cpassword,email,contactno, country,state,city) values('".$name."','".$username."','".$password."','".$cpassword."','".$email."','".$contactno."','".$country."','".$state."','".$city."')";
			$qry_res =mysql_query($sql, $conn);

?>