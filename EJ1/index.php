<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Ejercicio 1 - EPD7-Grupo-12</title>
    </head>
    <body>
        <?php
        echo '<form action="#" method="post" enctype="multipart/form-data">';
        if (isset($_POST["name"])) {
            echo 'Introduzca el nombre:<input type="text" name="name" value="' . $_POST["name"] . '" required><br>';
        } else {
            echo 'Introduzca el nombre:<input type="text" name="name" required><br>';
        }
        if (isset($_POST["matricula"])) {
            echo 'Introduzca la matricula:<input type="text" name="matricula" value="' . $_POST["matricula"] . '" pattern="[0-9]{4}[a-zA-Z]{3}" maxlenght="7" title="La matricula debe contener 4 numeros y 3 letras, en ese orden y sin dejar espacios" required><br>';
        } else {
            echo 'Introduzca la matricula:<input type="text" name="matricula" pattern="[0-9]{4}[a-zA-Z]{3}" maxlenght="7" title="La matricula debe contener 4 numeros y 3 letras, en ese orden y sin dejar espacios" required><br>';
        }
        echo 'Adjunte la imagen:<input type="file" name="image" required><br>';
        echo '<input type="submit" value="Enviar">';
        echo '</form>';
        if (isset($_POST["name"])) {
            if(!filter_has_var(INPUT_POST, "name") && !filter_has_var(INPUT_POST, "matricula") && !filter_has_var(INPUT_POST, "image")){
                echo "Error en el formato de las respuestas.";
            } else {
                $nFile = $_FILES['image']['name'];
                $imagesAllowed = array('image/jpeg', 'image/png');
                if (array_search($_FILES["image"]['type'], $imagesAllowed) === false) {
                    echo "Error tipo archivo";
                } else {
                    move_uploaded_file($_FILES["image"]['tmp_name'], "Recepcion/$nFile"); //Cambiar ruta          
                    $imageHash = hash_file("md5", "Recepcion/$nFile");
                    $f = fopen("fotos-subidas.csv", "a");
                    if ($f) {
                        flock($f, LOCK_EX);
                        fwrite($f, $_POST["name"] . "\t");
                        fwrite($f, strtoupper($_POST["matricula"] . "\t"));
                        fwrite($f, $_FILES["image"]['name'] . "\t");
                        fwrite($f, $imageHash . "\n");
                        flock($f, LOCK_UN);
                        fclose($f);
                    } else {
                        echo "Error al abrir el fichero";
                    }
                    $newName = strtoupper($_POST["matricula"]) . "-" . time() . ".jpg";
                    rename("Recepcion/$nFile", "Recepcion/$newName");
                }
            }
        }
        ?>
    </body>
</html>
