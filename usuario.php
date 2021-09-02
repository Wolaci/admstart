<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Usuários</title>
  <?php require_once('templates/templateChamada.php') ?>
</head>
  <!-- Navbar -->
  <?php require_once('templates/templateLateral.php') ?>
  <?php require_once('templates/templateCabecalho.php') ?>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Usuários</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Usuários</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <!-- left column -->

          <!--/.col (left) -->
          <!-- right column -->
          <div class="col-md-6">
                <div id="jsGrid1"></div>
          </div>

          <div class="col-md-6">
            <!-- general form elements -->
            <div class="card">
              <div class="card-header">
                <h3 class="card-title"><b>Usuário</b></h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form name="usuario">
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Nome</label>
                    <input type="text" class="form-control" name="nome" id="nome">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">E-mail</label>
                    <input type="email" class="form-control" name="email" id="email">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Senha</label>
                    <input type="password" class="form-control" id="senha" name="senha">
                  </div>
                  <!-- <div class="form-group">
                    <label for="exampleInputFile">File input</label>
                    <div class="input-group">
                      <div class="custom-file">
                        <input type="file" class="custom-file-input" id="exampleInputFile">
                        <label class="custom-file-label" for="exampleInputFile">Choose file</label>
                      </div>
                      <div class="input-group-append">
                        <span class="input-group-text">Upload</span>
                      </div>
                    </div>
                  </div> -->
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="button" onclick="inserir('usuario','inserir')" class="btn btn-primary">Enviar</button>
                </div>
              </form>
            </div>
          </div>
          <!--/.col (right) -->
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
  <!-- /.control-sidebar -->
  <script>
  dados();
  function dados(){

    $.ajax({
				url:'usuarioDados.php', //Server script to process data
				type: 'POST',
        dataType: "json",
				success : function (result){
          if(result.status){
            grid(result.dados);
          }
        }
    });
  }  

  function inserir(form, param){

    let data = (form!=null) ? $('form[name='+form+']').serialize() : '';
    let opcao = (param!=null) ? param : '';

    $.ajax({
				url:'usuarioDados.php', //Server script to process data
				type: 'POST',
				data: data+'&opcao='+opcao,
        dataType: "json",
				success : function (result){
          if(result.status){
            alert(result.mensagem);
            dados();
          }
        }
    });
  }  

  function grid(dados){
    $("#jsGrid1").jsGrid({
        height: "100%",
        width: "100%",
        sorting: true,
        paging: true,
        confirmDeleting: true,
        deleteConfirm: "Você tem certeza disso?",
        rowClick: function(args) {
            preencheCampos(args.item);
        },
        onItemDeleting: function(args) {
          deletaItem(args.item);
        },
        
        data: dados,

        fields: [
            { name: "nome", title: "Nome", type: "text", width: 100 },
            { name: "email", title: "E-mail", type: "text", width: 150 },
            { name: "status", title:"Status", type: "text", width: 40 },
            { type: "control", editButton: false, modeSwitchButton: false, width: 30 },
        ]
    });
  }

  function preencheCampos(dados){
    for (let key in dados) {
      $("#"+key).val(dados[key]);
      // document.querySelector("[name='txtstart']").value = date_today;
      // console.log(key);
      // console.log(dados[key])
    }
  }

  function deletaItem(dado){

    let data = {'id':dado.id, 'opcao':'deletar'};
    
    $.ajax({
				url:'usuarioDados.php', //Server script to process data
				type: 'POST',
				data: data,
        dataType: "json",
				success : function (result){
          if(result.status){
            grid(result.dados);
          }
        }
    });

  }
  
</script>
<?php require_once('templates/templateRodape.php') ?>
</html>
