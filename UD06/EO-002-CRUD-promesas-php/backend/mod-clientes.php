<?php
$servidor = "localhost";
$usuario = "root";
$password = "";
$bbdd = "ada";

$objeto = $_REQUEST['json'];

$cliente = json_decode($objeto, true); //Convertir a un array asociativo (parameter to true)


// Create connection
$conn = new mysqli($servidor, $usuario, $password, $bbdd);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "UPDATE clientes SET genero ='" . $cliente['genero'] .
  "', fname ='" . $cliente['fname'] .
  "', lname ='" . $cliente['lname'] .
  "', email ='" . $cliente['email'] .
  "', phone ='" . $cliente['phone'] .
  "', passwd ='" . $cliente['passwd'] .
  "', id_pais ='" . $cliente['id_pais'] . "' WHERE id ='" . $cliente['id']."'";

echo $sql;


if ($conn->query($sql) === TRUE) {
  $last_id = $conn->insert_id;
  echo $last_id;
} else {
  echo "Error";
}

$conn->close();
