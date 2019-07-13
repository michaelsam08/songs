<html>
<head>
    <title>Information Gathered</title>
</head>

<body>
<?php

$usersName = $_POST["username" ];
$usersStreet = $_POST["streetaddress"];
$usersCity = $_POST ["cityaddress"];

echo "<p>Your Information</p>";

echo $usersName . "lives at </br>";
echo $streetAddress . "in </br>";
echo $cityAddress . "on </br>";

?>
</body>
</html>


