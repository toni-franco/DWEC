<?php
header("Content-Type: application/json; charset=UTF-8");

$valor = $_GET["valor"];

//$objeto = json_decode($_GET["objeto"],false);
//$objeto = json_decode($_POST["objeto"],false);
//$objeto = json_decode('{"tabla":"alumnos","valor":111}');
$servidor = "localhost";
$usuario = "root";
$password = "";
$bbdd = "ada";

//Crear la conexión
$conexion = new mysqli($servidor, $usuario, $password, $bbdd);

//echo "Demmane $valor \n"; 
//Comprobamos la conexión
if ($conexion ->connect_error){
    die("Error en la conexion: "+$conexion->connect_error);
}else{
    //echo "conexió correcta\n";
    //Conexión correcta
    
    //Creamos la consulta SQL
    // $sql = "SELECT idAlumno, alumno, puntuacion FROM $objeto->tabla WHERE puntuacion >= $objeto->valor";
    
    $sql = "SELECT idAlumno, alumno, puntuacion FROM alumnos WHERE puntuacion >= $valor";
    
    $resultado = $conexion->query($sql);

    //echo "Resultado de la query devuelve $resultado->num_rows registros\n";
    //echo "-----------------------------------\n";
    
    $salida = array();
    $salida = $resultado->fetch_all();
     
    echo json_encode($salida);
}
$conexion->close();
?>
