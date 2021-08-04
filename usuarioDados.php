<?php

include 'includes/conn.php';

$nome = !empty($_POST['nome']) ? $_POST['nome'] : '' ;
$email = !empty($_POST['email']) ? $_POST['email'] : '' ;
$senha = !empty($_POST['senha']) ? base64_encode($_POST['senha']) : '';
$opcao = !empty($_POST['opcao']) ? $_POST['opcao'] : '' ;
$rs = '';
// var_dump($_POST['opcao']); 
switch ($opcao) {
  case '':
    
    $sql = $conn->prepare("SELECT nome AS Nome, email as 'E-mail', status FROM usuarios WHERE status = 'SIM'");
    $sql->execute();
    $dados = $sql->fetchAll(PDO::FETCH_OBJ);
    $result = json_encode(array('status' => true, 'dados' =>$dados,'mensagem'=>"dados"));
    
    break;
    
  case 'inserir':
    
    $sql = $conn->prepare("INSERT INTO usuarios (nome , email, senha, status) VALUES (?, ?, ?, ?)");
    $sql->execute([$nome,$email,$senha,'SIM']);
    break; 
}
echo $result;
?>