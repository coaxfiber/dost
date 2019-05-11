<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>CVRDKMS</title>
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <meta content="" name="keywords">
  <meta content="" name="description">

  <!-- Facebook Opengraph integration: https://developers.facebook.com/docs/sharing/opengraph -->
  <meta property="og:title" content="">
  <meta property="og:image" content="">
  <meta property="og:url" content="">
  <meta property="og:site_name" content="">
  <meta property="og:description" content="">

  <!-- Twitter Cards integration: https://dev.twitter.com/cards/  -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="">
  <meta name="twitter:title" content="">
  <meta name="twitter:description" content="">
  <meta name="twitter:image" content="">

  <!-- Fav and touch icons -->
  <link rel="shortcut icon" href="img/icons/favicon.png">
  <link rel="apple-touch-icon-precomposed" sizes="114x114" href="img/icons/114x114.png">
  <link rel="apple-touch-icon-precomposed" sizes="72x72" href="img/icons/72x72.png">
  <link rel="apple-touch-icon-precomposed" href="img/icons/default.png">

  <!-- Google Fonts -->
  <link href="css/css.css?family=Roboto:400,100,300,500,700,900" rel="stylesheet">

  <!-- Bootstrap CSS File -->
  <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Libraries CSS Files -->
  <link href="lib/font-awesome/css/font-awesome.min.css" rel="stylesheet">
  <link href="lib/owlcarousel/owl.carousel.min.css" rel="stylesheet">
  <link href="lib/owlcarousel/owl.theme.min.css" rel="stylesheet">
  <link href="lib/owlcarousel/owl.transitions.min.css" rel="stylesheet">

  <!-- Main Stylesheet File -->
  <link href="css/style.css" rel="stylesheet">

  <!--Your custom colour override - predefined colours are: colour-blue.css, colour-green.css, colour-lavander.css, orange is default-->
  <link href="#" id="colour-scheme" rel="stylesheet">

  <!-- =======================================================
    Theme Name: Flexor
    Theme URL: https://bootstrapmade.com/flexor-free-multipurpose-bootstrap-template/
    Author: BootstrapMade.com
    Author URL: https://bootstrapmade.com
  ======================================================= -->
</head>

<body class="page-index has-hero">
  <!--Change the background class to alter background image, options are: benches, boots, buildings, city, metro -->
  <div id="background-wrapper" class="buildings" data-stellar-background-ratio="0.1">

    <!-- ======== @Region: #navigation ======== -->
    <div id="navigation" class="wrapper">
      <!--Hidden Header Region-->
      <!--Header & navbar-branding region-->
      <div class="header">
        <div class="header-inner container">
          <div class="row">
            <div class="col-md-8">
              <!--navbar-branding/logo - hidden image tag & site name so things like Facebook to pick up, actual logo set via CSS for flexibility -->
              <a class="navbar-brand" href="index" title="Home">
                <h1 class="hidden">
                    <img src="img/logo.png" alt="Flexor Logo">
                   
                  </h1>
              </a>
              <div class="navbar-slogan">
                Department of Science and Technology
                <br> Region II
              </div>
            </div>
            <!--header rightside-->
            <div class="col-md-4">
              <!--user menu-->
              <ul class="list-inline user-menu pull-right">
                <li class="user-register"><i class="fa fa-edit text-primary "></i> <a href="register" class="text-uppercase">Register</a></li>
                <li class="user-login"><i class="fa fa-sign-in text-primary"></i> <a href="login" class="text-uppercase">Login</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="navbar navbar-default">
          <!--mobile collapse menu button-->
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
          <!--social media icons-->
          <div class="navbar-text social-media social-media-inline pull-right" style="width: 400px !important; margin: 12px !important">
            <!--@todo: replace with company social media details-->
             <form class="form-inline my-2 my-lg-0">
              <div class="input-group">
                  <select class="btn btn-secondary" id="inputGroupSelect02">
                    <option selected>Researches</option>
                    <option value="name">Authors</option>
                    <option value="color">Subjects</option>
                    <option value="cmc">Categories</option>
                  </select>
                    <button class="btn btn-info" type="button" data-toggle="modal" data-target="#advanced_search"><i class="fa fa-cog fa-fw"></i></button>
                  <input type="text" class="form-control" aria-label="Text input with dropdown button" style="width: auto;float: none;">
                    <button class="btn btn-info" type="button" id="search_submit" onclick="window.location.href = 'search';"><i class="fa fa-search fa-fw"></i></button>
              </div>
            </form>
            <div class="modal fade" id="advanced_search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel" style="width: 150px;margin-right: 0px;float: left">Advanced Search</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="text-align: right">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div class="modal-body">
              <div class="form-group">
                <input type="text" class=" advanced_search form-control" id="advanced_name" aria-describedby="emailHelp" placeholder="Name">
              </div>
              <div class="form-group">
                <input type="text" class="advanced_search form-control" id="search_color" placeholder="Color">
              </div>
              <a href="search"><button  type="search" class="btn btn-info btn-block" id="search_submit">Search</button></a>

                  </div>
                </div>
              </div> 
            </div>
          </div>
          <!--everything within this div is collapsed on mobile-->
          <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav" id="main-menu">
              <li class="icon-link">
                <a href="index"><i class="fa fa-home"></i></a>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">CVRDKMS<b class="caret"></b></a>
                <!-- Dropdown Menu -->
                <ul class="dropdown-menu">
                  <li class="dropdown-header">CVRDKMS Website Pages</li>
                  <li><a href="search" tabindex="-1" class="menu-item">Search</a></li>
                  <li><a href="about-us" tabindex="-1" class="menu-item">About us</a></li>
                  <li><a href="login" tabindex="-1" class="menu-item">Login</a></li>
                  <li><a href="register" tabindex="-1" class="menu-item">Sign-Up</a></li>
                  <li class="dropdown-footer">Apply Grant</li>
                </ul>
              </li>
              <li class="dropdown dropdown-mm">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Resources<b class="caret"></b></a>
                <!-- Dropdown Menu -->
                <ul class="dropdown-menu dropdown-menu-mm dropdown-menu-persist">
                  <li class="row">
                    <ul class="col-md-4">
                      <li class="dropdown-header">Researches</li>
                      <li><a href="#">Researcher resources</a></li>
                      <li><a href="#">Register online</a></li>
                      <li><a href="#">Discover tools</a></li>
                      <li><a href="#">Learn about how to access</a></li>
                    </ul>
                    <ul class="col-md-4">
                      <li class="dropdown-header">Societies</li>
                      <li><a href="#">Society resources</a></li>
                      <li><a href="#">Publish with CVRDKMS</a></li>
                      <li><a href="#">Explore our resource library</a></li>
                      <li><a href="#">Learn about topics and trends</a></li>
                    </ul>
                    <ul class="col-md-4">
                      <li class="dropdown-header">Authors</li>
                      <li><a href="#">Sectors Author Services</a></li>
                      <li><a href="#">Submit a paper</a></li>
                      <li><a href="#">Track your article</a></li>
                      <li><a href="#">Learn about CVRDKMS</a></li>
                    </ul>
                  </li>
                  <li class="dropdown-footer">
                    <div class="row">
                      <div class="col-md-7">Want to apply for Grant? <strong>Register and Sign in.</strong></div>
                      <div class="col-md-5">
                        <a href="https://bootstrapmade.com" class="btn btn-more btn-lg pull-right"><i class="fa fa-cloud-download"></i> Leran How</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>
          <!--/.navbar-collapse -->
        </div>
      </div>
    </div>