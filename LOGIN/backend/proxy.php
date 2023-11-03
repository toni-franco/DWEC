<?php
require "DataBase.php";
$db = new DataBase();
$usu=$_GET['username'];
$clv=$_GET['password'];
if (isset($usu) && isset($clv)) {
    if ($db->dbConnect()) {       
        if ($db->logIn("users", $usu, $clv)) {
            echo "Login Success";
            // Aquí va codigo php que hace ops en la BD
            // Ejemplo :

            $url="http://localhost:8080/dwc/LOGIN/backend/api/api.php/clientes";
            $url="./api/api.php/clientes";
           
            $novaurl= "Location: ". $url ;            
            header($novaurl); 
            // También podemos usar  // $url="./api/api.php/clientes"; $ch = curl_init();....
            die();                        

        } else echo "Username or Password wrong";
    } else echo "Error: Database connection";
} else echo "All fields are required";

?>



