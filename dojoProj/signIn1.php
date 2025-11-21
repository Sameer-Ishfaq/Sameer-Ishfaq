<?php

	
//details to connect to xampp localhost server
$servername = "localhost";
$username = "webUser";
$password = "web development";
$dbname = "login";
$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
	die("Connection failed: " . mysqli_connect_error() );
}


if($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["submit"])){
	//login table
$firstName = $_POST["firstName"] ?? null;
$lastName = $_POST["lastName"] ?? null;
$password = $_POST["password"] ?? null;	

//security solution
$firstName = mysqli_real_escape_string($conn, $firstName);
$lastName = mysqli_real_escape_string($conn, $lastName);
$password = mysqli_real_escape_string($conn, $password);

$sql = "INSERT INTO signin (firstName, lastName, password) VALUES ('$firstName', '$lastName', '$password')";

$result = mysqli_query($conn, $sql);

if($result){
echo 'Signed In:)';}

else {
	die(mysqli_error($conn));}
}

	
?>
	
	
<!DOCTYPE html>
<head>
<title>DuBo Martial Arts</title>
<link rel="stylesheet" href="style1.css";>
<meta charset = "utf-8">
<meta name = "viewport" content = "width=device-width, initial-scale=1">

</head>

<body>
<header>
    <div class = "navbar">
        
   <a href = "home1.html">HOME</a>
   <a href = "aboutUs1.html">ABOUT US</a>
   <a href = "Memberships1.html">MEMBERSHIPS</a>
   <a href = "timetable1.html">TIMETABLE</a>
   <a href = "Contact1.html">CONTACT</a>
   <a href = "signIn1.php">SIGN IN</a>
   <a href = "create_an_account.php" >CREATE AN ACCOUNT</a>
     <img src = "Images/logo.jpg">
   
	</div>
	
	<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
	<h3>Create an account</h3>
	
	<label for ="firstName"> First Name:</label><br>
	<input type = "text" id = "firstName"name = "firstName"><br>
	
	<label for = "lastName">Last Name:</label><br>
	<input type = "text" id = "lastName" name = "lastName"><br>
	
	<label for = "createPassword"> Password:</label><br>
	<input type = "password" id = "password" name = "password"><br>
	
		<input type = "submit" name = "submit" value = "submit"><br>
	</form>
	<a href = "create_an_account.php">Don't have an account? Click here to create one!</a>