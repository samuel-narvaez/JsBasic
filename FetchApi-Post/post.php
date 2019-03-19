<?php

    $usuario = $_POST['usuario'];
    $pass = $_POST['pass'];

    if ($usuario === '' || $pass === '') {
        echo json_decode('Error');
    }else {
        echo json_decode('Correcto: <br>Usuario:'.$usuario.'<br>Pass:'.$pass);
    }

?>