<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Login</title>

    <!-- Bootstrap core CSS-->
    <link href="dashboard/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom fonts for this template-->
    <link href="dashboard/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">

    <!-- Custom styles for this template-->
    <link href="dashboard/css/sb-admin.css" rel="stylesheet">

  </head>

  <body style="background: url('img/backgrounds/buildings.png');height: 100%; 

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;">

    <div class="container">
      <br><br>
      <center><img src="img/logo-blue.png" style="margin-right: auto; margin-left: auto;width: 200px" ></center>
      <div class="card card-login mx-auto mt-5">
        <div class="card-header">Login</div>
        <div class="card-body">
          <?php 
          if (isset($_GET['auth'])) {
            if ($_GET['auth']=='invalid') {
           ?>
          <div class="alert alert-warning" role="alert">
            Invalid Username or Password!
          </div
          <?php 
              }
            }
          ?>
          <form action="dashboard/engine.php" method="POST">
            <div class="form-group">
              <div class="form-label-group">
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="required" autofocus="autofocus" name="username">
                <label for="inputEmail">Email address</label>
              </div>
            </div>
            <div class="form-group">
              <div class="form-label-group">
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="required" name="password">
                <label for="inputPassword">Password</label>
                <input type="hidden" name="action" value="login">
              </div>
            </div>
            <div class="form-group">
              <div class="checkbox">
                <label>
                  <input type="checkbox" value="remember-me">
                  Remember Password
                </label>
              </div>
            </div>
            <button class="btn btn-primary btn-block" type="submit">Login</button>
          </form>
          <div class="text-center">
            <a class="d-block small mt-3" href="register.html">Register an Account</a>
            <a class="d-block small" href="forgot-password.html">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Bootstrap core JavaScript-->
    <script src="dashboard/vendor/jquery/jquery.min.js"></script>
    <script src="dashboard/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Core plugin JavaScript-->
    <script src="dashboard/vendor/jquery-easing/jquery.easing.min.js"></script>

  </body>

</html>
