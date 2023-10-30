<?php
    $servidor = "localhost";
    $usuario = "root";
    $password = "";
    $bbdd = "ada";

    $objeto=$_REQUEST['json'];    
    
     $cliente=json_decode($objeto,true); //Convertir a un array asociativo (parameter to true)

    // Create connection
    $conn = new mysqli($servidor, $usuario, $password, $bbdd);
   
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);        
    }

    $sql = "DELETE FROM clientes where id = '".$cliente['id']."'";

    //echo $sql;


    if ($conn->query($sql) === TRUE) { 
      echo "True";
   
    } else {
      echo "Error";
    }

    $conn->close();
