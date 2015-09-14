<?php
	include('config.php');
	$qry= "select * from forPracticalNg";
	$qry_res =mysql_query($qry);




$datalist = array();
while($rows = mysql_fetch_array($qry_res))
{
$datalist[] = array(
"id" =>$rows['id'],
"name" =>$rows['name'],
"email" => $rows['email'],
"contactno" => $rows['contactno'],
"country" => $rows['country'],
"state" => $rows['state'],
"city" => $rows['city']
);
}
// echo 'hiii';
 echo json_encode($datalist);


	
?>
