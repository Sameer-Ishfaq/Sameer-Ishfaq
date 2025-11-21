<?php // Check connection

	
//details to connect to xampp localhost server
$servername = "localhost";
$username = "webUser";
$password = "web development";
$dbname = "login";
$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
	die("Connection failed: " . mysqli_connect_error() );
}
echo "<br>Database Connected OK<br>";

if($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["submit"])){
	//queries table
	
$firstName = $_POST["firstName"] ?? null;
$lastName = $_POST["lastName"] ?? null;
$email = $_POST["email"] ?? null;
$password = $_POST["password"] ?? null;	

$firstName = mysqli_real_escape_string($conn, $firstName);
$lastName = mysqli_real_escape_string($conn, $lastName);
$email = mysqli_real_escape_string($conn, $email);
$password = mysqli_real_escape_string($conn, $password);


$sql = "INSERT INTO createaccounts (firstName, lastName, email, password) VALUES ('$firstName', '$lastName', '$email', '$password')";

$result = mysqli_query($conn, $sql);

if($result){
echo 'Data inserted successfully';}
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
   <a href = "create_an_account.php">CREATE AN ACCOUNT</a>
     <img src = "Images/logo.jpg">
	</div>
	

<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
	<h3>Create an account</h3>


First Name:	<input type = "text" name = "firstName"><br>
Last Name:	<input type = "text"  name = "lastName"><br>
Email:	<input type = "text"  name = "email"><br>
Password:	<input type = "password"  name = "password"><br>
	
	<input type = "submiT" name = "submit" value = "submit"><br>
	</form>
	<a href = "create_an_account.php">Don't have an account? Click here to create one!</a>