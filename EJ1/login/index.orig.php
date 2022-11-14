<?php
  session_start();

  // If the session vars aren't set, try to set them with a cookie
  if (!isset($_SESSION['idUsuario'])) {
    if (isset($_COOKIE['idUsuario']) && isset($_COOKIE['usuario'])) {
      $_SESSION['idUsuario'] = $_COOKIE['idUsuario'];
      $_SESSION['usuario'] = $_COOKIE['usuario'];
    }
  }
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Página principal</title>
  <link rel="stylesheet" type="text/css" href="style.css" />
</head>
<body>
  <h3>Página principal</h3>

<?php
  require_once('appvars.php');
  require_once('connectvars.php');

  // Generate the navigation menu
  if (isset($_SESSION['usuario'])) {
    echo ' <a href="viewprofile.php">View Profile</a><br />';
    echo ' <a href="editprofile.php">Edit Profile</a><br />';
    echo ' <a href="logout.php">Log Out (' . $_SESSION['usuario'] . ')</a>';
  }
  else {
    echo ' <a href="login.php">Login</a><br />';
    echo ' <a href="signup.php">Registro</a>';
  }

  // Connect to the database 
  $dbc = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME); 

  // Retrieve the user data from MySQL
  $query = "SELECT idUsuario, nombre FROM usuario WHERE nombre IS NOT NULL ORDER BY fechaRegistro DESC LIMIT 5";
  $data = mysqli_query($dbc, $query);

  // Loop through the array of user data, formatting it as HTML
  echo '<h4>Latest members:</h4>';
  echo '<table>';
  while ($row = mysqli_fetch_array($data)) {

        if (isset($_SESSION['idUsuario'])) {
      echo '<td><a href="viewprofile.php?idUsuario=' . $row['idUsuario'] . '">' . $row['nombre'] . '</a></td></tr>';
    }
    else {
      echo '<td>' . $row['nombre'] . '</td></tr>';
    }
  }
  echo '</table>';

  mysqli_close($dbc);
?>

</body> 
</html>
