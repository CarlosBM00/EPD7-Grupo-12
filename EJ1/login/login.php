<?php
  require_once('connectvars.php');

  // Start the session
  session_start();

  // Clear the error message
  $error_msg = "";

  // If the user isn't logged in, try to log them in
  if (!isset($_SESSION['idUsuario'])) {
    if (isset($_POST['submit'])) {
      // Connect to the database
      $dbc = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

      // Grab the user-entered log-in data
      $usuario = mysqli_real_escape_string($dbc, trim($_POST['usuario']));
      $password = mysqli_real_escape_string($dbc, trim($_POST['password']));

      if (!empty($usuario) && !empty($password)) {
        // Look up the usuario and password in the database
        $query = "SELECT idUsuario, usuario, contrasenya FROM usuario WHERE usuario = '$usuario'";
        $data = mysqli_query($dbc, $query);


        
        if (mysqli_num_rows($data) == 1) {
          // The log-in is OK so set the user ID and usuario session vars (and cookies), and redirect to the home page
          $row = mysqli_fetch_array($data);
          
          if(password_verify($password,$row['contrasenya'])) {
            $_SESSION['idUsuario'] = $row['idUsuario'];
            $_SESSION['usuario'] = $row['usuario'];
            setcookie('idUsuario', $row['idUsuario'], time() + (60 * 60 * 24 * 60));    // expires in 60 days
            setcookie('usuario', $row['usuario'], time() + (60 * 60 * 24 * 60));  // expires in 60 days
            $home_url = 'http://' . $_SERVER['HTTP_HOST'] . dirname($_SERVER['PHP_SELF']) . '/index.php';
            header('Location: ' . $home_url);
          }
          else {
            $error_msg = 'Son diferentes contraseña y hash';
          }
        }
        else {
          // The usuario/password are incorrect so set an error message
          $error_msg = 'Sorry, you must enter a valid usuario and password to log in.';
        }
      }
      else {
        // The usuario/password weren't entered so set an error message
        $error_msg = 'Sorry, you must enter your usuario and password to log in.';
      }
    }
  }
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Login</title>
  <link rel="stylesheet" type="text/css" href="style.css" />
</head>
<body>
  <h3>Login</h3>

<?php
  // If the session var is empty, show any error message and the log-in form; otherwise confirm the log-in
  if (empty($_SESSION['idUsuario'])) {
    echo '<p class="error">' . $error_msg . '</p>';
?>

  <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
    <fieldset>
      <legend>Login</legend>
      <label for="usuario">usuario:</label>
      <input type="text" name="usuario" value="<?php if (!empty($usuario)) echo $usuario; ?>" /><br />
      <label for="password">Contrase&nacute;a:</label>
      <input type="password" name="password" />
    </fieldset>
    <input type="submit" value="Login" name="submit" />
  </form>

<?php
  }
  else {
    // Confirm the successful log-in
    echo('<p class="login">Ha entrado como ' . $_SESSION['usuario'] . '.</p>');
  }
?>

</body>
</html>
