<?php

include 'includes/conn.php';

$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = ($_POST['senha'] !='') ? base64_encode($_POST['senha']) : '';

$sql = $conn->prepare("INSERT INTO usuarios (nome , email, senha, status) VALUES (?, ?, ?, ?)");
$sql->execute([$nome,$email,$senha,'SIM']);

?>