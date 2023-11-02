<?php
header("Content-Type: application/json; charset=UTF-8");

//$cliente = $_GET["valor"];

$servidor = "localhost";
$usuario = "root";
$password = "";
$bbdd = "ada";


//Crear la conexión
$conexion = new mysqli($servidor, $usuario, $password, $bbdd);

if ($conexion ->connect_error){
    die("Error en la conexion: "+$conexion->connect_error);
}else{
    
    $sql = "SELECT id, idCliente, cantidad, Descripción, Precio, Foto FROM Compras";
      
    $resultado = $conexion->query($sql);

    //echo "Resultado de la query devuelve $resultado->num_rows registros\n";
    //echo "-----------------------------------\n";
    
    $salida = array();

    $salida = $resultado->fetch_all();
     
    echo json_encode($salida);
}
$conexion->close();
?>
