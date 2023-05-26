<?php
$nome = $_REQUEST["nome"];
$email = $_REQUEST["email"];
$mensagem = $_REQUEST["mensagem"];

$to = "nathaliavcouto@gmail.com";
$subject = "Mensagem do formulário de contato";
$msg = "Nome: $nome \n Email: $email \n Mensagem: \n$mensagem";
$from = "De: $email";

mail($to, $subject, $msg, $from);

header("location:index.html");

?>