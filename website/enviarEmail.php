<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nome = $_POST["nome"];
  $email = $_POST["email"];
  $mensagem = $_POST["mensagem"];

  $to = "nathaliavcouto@gmail.com";
  $subject = "Mensagem do formulário de contato";
  $msg = "Nome: $nome \n Email: $email \n Mensagem: \n$mensagem";
  $from = "De: $email";

  if(mail($to, $subject, $msg, $from)) {
    echo "Sua mensagem foi enviada com sucesso!";
  }
  else {
    echo "Erro";
  }
}

?>