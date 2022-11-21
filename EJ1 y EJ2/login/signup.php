<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Registro</title>
  <link rel="stylesheet" type="text/css" href="style.css" />
</head>
<body>
  <h3>Registro</h3>

<?php
  require_once('appvars.php');
  require_once('connectvars.php');

  // Connect to the database
  $dbc = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

  if (isset($_POST['submit'])) {
    // Grab the profile data from the POST
    $nombre = mysqli_real_escape_string($dbc, trim($_POST['nombre']));
    $usuario = mysqli_real_escape_string($dbc, trim($_POST['usuario']));
    $password1 = mysqli_real_escape_string($dbc, trim($_POST['password1']));
    $password2 = mysqli_real_escape_string($dbc, trim($_POST['password2']));

    if (!empty($usuario) && !empty($nombre) && !empty($password1) && !empty($password2) && ($password1 == $password2)) {
      // Make sure someone isn't already registered using this usuario
      $query = "SELECT * FROM usuario WHERE usuario = '$usuario'";
      $data = mysqli_query($dbc, $query);
      if (mysqli_num_rows($data) == 0) {
        // The usuario is unique, so insert the data into the database
        $password=password_hash($password1,PASSWORD_DEFAULT);
        $query = "INSERT INTO usuario (usuario, contrasenya, nombre, fechaRegistro) VALUES ('$usuario', '$password', '$nombre', NOW())";
        mysqli_query($dbc, $query);

        // Confirm success with the user
        echo '<p>Nueva cuenta creada. Puede hacer <a href="login.php">log in</a>.</p>';

        mysqli_close($dbc);
        exit();
      }
      else {
        // An account already exists for this usuario, so display an error message
        echo '<p class="error">Ya existe una cuenta para este usuario. Use una diferente.</p>';
        $usuario = "";
      }
    }
    else {
      echo '<p class="error">Debe rellenar todos los campos</p>';
    }
  }

  mysqli_close($dbc);
?>

  <p>Por favor introduzca su usuario y contrase&nacute;a.</p>
  <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
    <fieldset>
      <legend>Registro</legend>
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre" value="<?php if (!empty($nombre)) echo $nombre; ?>" /><br />
      <label for="usuario">Usuario:</label>
      <input type="text" id="usuario" name="usuario" value="<?php if (!empty($usuario)) echo $usuario; ?>" /><br />
      <label for="password1">Contrase&nacute;a:</label>
      <input type="password" id="password1" name="password1" /><br />
      <label for="password2">Confirmar contrase&nacute;a:</label>
      <input type="password" id="password2" name="password2" /><br />
    </fieldset>
    <input type="submit" value="Aceptar" name="submit" />
  </form>
</body> 
</html>
