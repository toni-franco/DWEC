<?php
//Para evitar que los warning salgan en la pantalla y se traten como texto JSON
error_reporting(0);
/*
$objeto="";
$objeto->nombre = "Ada";
$objeto->nacimiento = 1815;
$objeto->pais = "Reino Unido";
*/

$jsonobj = '{"Peter":35,"Ben":37,"Joe":43}';

$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");


//var_dump(json_decode($jsonobj));


//Codificamos el objeto a JSON
$miJSON = json_decode($jsonobj);
$a= $age['Peter'];

//echo "Edat : $a <br>";

echo $jsonobj;
//echo "pepito";

?>