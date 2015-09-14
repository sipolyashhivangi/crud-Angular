
<?php
	include('config.php');

$data = json_decode(file_get_contents("php://input")); 
$index = $data->prod_index; 
$qry = mysql_query('SELECT * from forPracticalNg WHERE id='.$index);
print_r($qry);
$data = array();
while($rows = mysql_fetch_array($qry))
{
$data[] = array(
"id" => $rows['id'],
"name" => $rows['name'],
"username" => $rows['username'],
"password" => $rows['password'],
"cpassword" => $rows['cpassword'],
"email" => $rows['email'],
"contactno" => $rows['contactno'],
"country" => $rows['country'],
"state" => $rows['state'],
"city" => $rows['city']
);
}
print_r(json_encode($data));
return json_encode($data); 

?>