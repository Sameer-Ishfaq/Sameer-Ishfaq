<?php // Check connection

	
//details to connect to xampp localhost server
$servername = "localhost";
$username = "hnd";
$password = "Shrewsbury";
$dbname = "helpdesk";
$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
	die("Connection failed: " . mysqli_connect_error() );
}
echo "<br>Database Connected OK<br>";

if($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["submit"])){
	//queries table
	
$staffFirstName = $_POST["staffFirstName"] ?? null;
$staffLastName = $_POST["staffLastName"] ?? null;
$jobTitle = $_POST["jobTitle"] ?? null;
$department = $_POST["department"] ?? null;	
$computerSerialNumber = $_POST["computerSerialNumber"] ?? null; 
$operatingSystem = $_POST["operatingSystem"] ?? null;
$software = $_POST["software"] ?? null;
$equipmentType = $_POST["equipmentType"] ?? null;
$equipmentMake = $_POST["equipmentMake"] ?? null;
$operatorFirstName = $_POST["operatorFirstName"] ?? null;
$operatorLastName = $_POST["operatorLastName"] ?? null;
$problem = $_POST["problem"] ?? null;
$problemType = $_POST["problemType"] ?? null;
$queryEndTime = $_POST["queryEndTime"] ?? null;


//"Sanitising my input" - This is a security solution to prevent attacks such as SQL injection

$staffFirstName = mysqli_real_escape_string($conn, $staffFirstName);
$staffLastName = mysqli_real_escape_string($conn, $staffLastName);
$jobTitle = mysqli_real_escape_string($conn, $jobTitle);
$department = mysqli_real_escape_string($conn, $department);
$computerSerialNumber = mysqli_real_escape_string($conn, $computerSerialNumber);
$operatingSystem = mysqli_real_escape_string($conn, $operatingSystem);
$software = mysqli_real_escape_string($conn, $software);
$equipmentType = mysqli_real_escape_string($conn, $equipmentType);
$equipmentMake = mysqli_real_escape_string($conn, $equipmentMake);
$operatorFirstName = mysqli_real_escape_string($conn, $operatorFirstName);
$operatorLastName = mysqli_real_escape_string($conn, $operatorLastName);
$problem = mysqli_real_escape_string($conn, $problem);
$problemType = mysqli_real_escape_string($conn, $problemType);
$queryEndTime = mysqli_real_escape_string($conn, $queryEndTime);



$sql = "INSERT INTO queries (staffFirstName, staffLastName, jobTitle, department, computerSerialNumber, operatingSystem, software, equipmentType, equipmentMake,
operatorFirstName, operatorLastName, problem, problemType, queryEndTime) VALUES 
('$staffFirstName', '$staffLastName','$jobTitle','$department','$computerSerialNumber','$operatingSystem', '$software', '$equipmentType', '$equipmentMake',
'$operatorFirstName', '$operatorLastName', '$problem', '$problemType', '$queryEndTime')";


$result = mysqli_query($conn, $sql);

if($result){
echo 'Data inserted successfully';}
else {
	die(mysqli_error($conn));}
}
?>


<html>
<head> 
<title> Shrewsbury Colleges Helpdesk</title>

</head>

<body>
<h1> Query Helpdesk</h1>
<h2> Input queries here: </h2>  

<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
Staff first name: <input type = "text" name = "staffFirstName"><br>
Staff last name: <input type = "text" name = "staffLastName"><br>
Job title: <input type = "text" name ="jobTitle"><br>
Department: <input type = "text" name = "department"><br>
Computer serial number: <input type = 'text' name = "computerSerialNumber"><br>
Operating system:  <input type = 'text' name = "operatingSystem"><br>
Software:  <input type = 'text' name = "software"><br>
Equpiment type:  <input type = 'text' name = "equipmentType"><br>
Equipment make:  <input type = 'text' name = "equipmentMake"><br>
Operator first name: <input type = "text" name = "operatorFirstName"><br>
Operator last name: <input type = "text" name = "operatorLastName"><br>
Problem: <textarea name = "problem" rows = "7" cols="50"></textarea><br>
Problem type:  
<select name = "problemType">
<option value = "networkSupport">Network Support</option>
<option value = "networkAdministration">Network Admninstration</option>
<option value = "softwareDevelopment">Software development</option>
<option value = "ITSecurity">IT Security</option>
<option value = "webServices">Web Services</option>
<option value = "hardwareSupport">Hardware Support</option>
</select><br>
Query end time:  <input type = 'text' name = "queryEndTime"><br>
<input type = "submit" name = "submit" value = "submit">

</form>

<a href ="pastProblems.html">View past problems here</a><br>
<a href ="experts.html">Refer to a specialist here</a><br>

</body>
</html>