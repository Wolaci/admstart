<?php

include 'includes/conn.php';

$nome = !empty($_POST['nome']) ? $_POST['nome'] : '' ;
$email = !empty($_POST['email']) ? $_POST['email'] : '' ;
$senha = !empty($_POST['senha']) ? base64_encode($_POST['senha']) : '';
$opcao = !empty($_POST['opcao']) ? $_POST['opcao'] : '' ;
$result = '';
switch ($opcao) {
  case '':
    
    $query = $conn->prepare("SELECT * FROM usuarios WHERE status = 'SIM'");
    $query->execute();
    $dados = $query->fetchAll(PDO::FETCH_OBJ);
    $result = json_encode(array('status' => true, 'dados' =>$dados,'mensagem'=>"dados"));
    
    break;
    
  case 'inserir':
    
    $insert = $conn->prepare("INSERT INTO usuarios (nome , email, senha, status) VALUES (?, ?, ?, ?)");
    $insert->execute([$nome,$email,$senha,'SIM']);
    $result = json_encode(array('status' => true,'mensagem'=>"Dados cadastrados com sucesso!"));

    break; 

  case 'editar':
    $editar = $conn->prepare("UPDATE usuarios SET nome=?, email=?, senha=? WHERE id =?");
    $editar->execute([$nome,$email,$senha,$_POST['id']]);
    $result = json_encode(array('status' => true,'mensagem'=>"Usuário editado com sucesso!"));
    break;

  case 'deletar':

    $apagar = $conn->prepare("DELETE FROM usuarios WHERE id = ?");
    $apagar->execute([$_POST['id']]);
    $result = json_encode(array('status' => true,'mensagem'=>"Usuário deletado com sucesso!"));
    break;
}
echo $result;
?>