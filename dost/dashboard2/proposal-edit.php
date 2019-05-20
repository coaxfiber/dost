<?php  
    include('includes/header.php');
    if (!isset($_GET['w'])) {
      echo '<script>window.location.replace("http://localhost/dost/dashboard/404.html");</script>';
    }
      include_once 'config/database.php';
      $database = new Database();
      $db = $database->getConnection();

    include('meanings.php');
?>

<style type="text/css">
  .button5 {border-radius: 50%;height: 25px; padding-top:1.5px}
  .cbutton {
    border-style: solid;border-color: gray;border-width: 1px; color:black;background-color: white
  }
  .tags {
    color:black;background-color: white !important
  }
</style>
<div class="container-fluid">
  <form method="POST" action="engine.php">
          <!-- Breadcrumbs-->
    <div class="row">
    <div class="col-xl-9 col-sm-12 mb-12">
          <div class="card mb-3">
            <div class="card-header">
              
          <h4>Proposal ID Number: <?php echo $_GET['w']; ?></h4></div>
            <div class="card-body">
              <?php 
                        $stmtpdetails = $db->prepare("exec spResearchProposalDetails_List
                         @ResearchProposalID = ".$_GET['w']);  
            $stmtpdetails ->execute();
            while ($rec2 = $stmtpdetails ->fetch()) { 
              $title = $rec2[2];
              $startDate = $rec2[11];
            }
            ?>
                 &nbsp;Program/Project Title:
                <button type="button" class="btn btn-info btn-sm button5"  data-toggle="modal" data-target="#title" >?</button>
                <div style="height: 10px"></div>
                <input type="text" class="form-control" required="required" id="title" value="<?php echo $title; ?>">


                <div style="height: 20px"></div>
                 &nbsp;Program/Project Leader:
                <button type="button" class="btn btn-info btn-sm button5"  data-toggle="modal" data-target="#leader" >?</button>
                <div style="height: 10px"></div>
                <input type="text" class="form-control" required="required" id="title">


                <div style="height: 20px"></div>
                &nbsp;Implementing Agency:
                <button type="button" class="btn btn-info btn-sm button5"  data-toggle="modal" data-target="#agency" >?</button>&nbsp;
                <select class="btn btn-basic" id="rstatus"  style="border-style: solid;border-color: gray;border-width: 1px;">
                  <option>- Select Agency -</option>
                  <option>Cagayan state University</option>
                  <option>Univetsity of saint Louis</option>
                  <option>DOST</option>
                  <option>ETC</option>
                </select>


                <div style="height: 20px"></div>
                &nbsp;Cooperating Agency (cies):
                <button type="button" class="btn btn-info btn-sm button5"  data-toggle="modal" data-target="#cagency" >?</button>&nbsp;
                <select class="btn btn-basic" id="rstatus"  style="border-style: solid;border-color: gray;border-width: 1px;">
                  <option>- Select Agency -</option>
                  <option>Cagayan state University</option>
                  <option>Univetsity of saint Louis</option>
                  <option>DOST</option>
                  <option>ETC</option>
                </select>
                <a class="btn btn-basic cbutton"><i class="fas fa-plus-circle"></i> Add</a>
                <table style="margin-left: 150px;margin-top: 5px">
                  <tr>
                    <td colspan="2" style="padding-left: 20px">
                      <a class="btn btn-basic tags"><i class="fas fa-minus-circle"></i> tag1</a></td>
                  </tr>
                  <tr>
                    <td colspan="2" style="padding-left: 20px">
                      <a class="btn btn-basic tags"><i class="fas fa-minus-circle"></i> tag2</a></td>
                  </tr>
                </table>


                <div style="height: 10px"></div>
                &nbsp;Research and Development Station:
                <button type="button" class="btn btn-info btn-sm button5"  data-toggle="modal" data-target="#station" >?</button>
                <div style="height: 10px"></div>
                <input type="text" class="form-control" required="required" id="title">

                <div style="height: 10px"></div>
                &nbsp;Reasearch Area (Please check)
                <table style="margin-left: 10px;">
                  <tr>
                    <td  style="padding-right: 10px">
                      <input type="checkbox" id="ddiscovery">
                      <label class="form-check-label" for="ddiscovery">Drug discovery</label>
                    </td>
                    <td  style="padding-right: 10px">
                      <input type="checkbox" id="diagnostics">
                      <label class="form-check-label" for="diagnostics">Diagnostics</label>
                    </td>
                    <td style="padding-right: 10px">
                      <input type="checkbox" id="biomedical">
                      <label class="form-check-label" for="biomedical">Hospital equipment and biomedical devices</label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" id="ffoods">
                      <label class="form-check-label" for="ffoods">Functional foods&nbsp;&nbsp;</label>
                    </td>
                    <td>
                      <input type="checkbox" id="Molecular">
                      <label class="form-check-label" for="Molecular">Molecular technologies for health &nbsp;&nbsp;</label>
                    </td>
                    <td>
                      <input type="checkbox" id="ict">
                      <label class="form-check-label" for="ict">ICT for health</label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" id="dengue">
                      <label class="form-check-label" for="dengue">Dengue</label>
                    </td>
                    <td>
                      <input type="checkbox" id="disaster">
                      <label class="form-check-label" for="disaster">Disaster risk reduction</label>
                    </td>
                    <td>
                      <input type="checkbox" id="climate">
                      <label class="form-check-label" for="climate">Health and climate change adaptation</label>
                    </td>
                  </tr>
                </table>


                <div style="height: 20px"></div>
                 &nbsp;Significance:
                <button type="button" class="btn btn-info btn-sm button5"  data-toggle="modal" data-target="#significance" >?</button>
                <div style="height: 10px"></div>
                <textarea class="form-control" style="height: 100px" id="sig" required="required"></textarea>

                <div style="height: 20px"></div>
                 &nbsp;Objectives:
                <button type="button" class="btn btn-info btn-sm button5"  data-toggle="modal" data-target="#objectives" >?</button>
                <div style="height: 10px"></div>
                <textarea class="form-control" style="height: 100px" id="obj" required="required"></textarea>

                <div style="height: 20px"></div>
                 &nbsp;Methodology:
                <button type="button" class="btn btn-info btn-sm button5"  data-toggle="modal" data-target="marerethodology" >?</button>
                <div style="height: 10px"></div>
                <textarea class="form-control" style="height: 100px" id="obj" required="required"></textarea>


                <div style="height: 20px"></div>
                      &nbsp;Major Activities:
                <div style="height: 10px"></div>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Start Date</th>
                      <th scope="col">Completion Date</th>
                      <th scope="col">Activity</th>
                      <th scope="col">- Action -</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" style="width: 175px"><input id="act1"  readonly="readonly"  width="150" class="cbutton" id="pdate" /></th>
                      <td style="width: 175px"><input id="act2"  readonly="readonly"  width="150" class="cbutton" id="pdate" /></td>
                      <td>
                      <textarea class="form-control" style="height: 43px" id="sig" required="required"></textarea></td>
                      <td  style="width: 125px">  
                      <a class="btn btn-basic cbutton"><i class="fas fa-plus-circle"></i> Add</a></td>
                    </tr>
                    <tr>
                      <td>Jan 5, 2017</td>
                      <td>Jan 5, 2017</td>
                      <td>activity noun (ENJOYMENT) ​ A2 [ C usually plural ] something that is done for enjoyment, especially an organized event: His spare-time activities include cooking, tennis, and windsurfing. We offer our guests a wide range of outdoor/sporting activities.</td>
                      <td>
                      <a class="btn btn-danger" style="color:white"><i class="fas fa-minus-circle"></i> Remove</a></td></td>
                    </tr>
                    <tr>
                      <td>Jan 5, 2017</td>
                      <td>Jan 5, 2017</td>
                      <td>Synonyms for activities at Thesaurus.com with free online thesaurus, antonyms, and definitions. Find descriptive alternatives for activities.</td>
                      <td>
                      <a class="btn btn-danger" style="color:white"><i class="fas fa-minus-circle"></i> Remove</a></td></td>
                    </tr>
                  </tbody>
                </table>

                <div style="height: 20px"></div>
                      &nbsp;Expected Output:
                <button type="button" class="btn btn-info btn-sm button5"  data-toggle="modal" data-target="#significance" >?</button>
                <div style="height: 10px"></div>
                <textarea class="form-control" style="height: 100px" id="sig" required="required"></textarea>

                <div style="height: 20px"></div>
                      &nbsp;Target Beneficiaries:
                <button type="button" class="btn btn-info btn-sm button5"  data-toggle="modal" data-target="#significance" >?</button>
                <div style="height: 10px"></div>
                <textarea class="form-control" style="height: 100px" id="sig" required="required"></textarea>



            </div>
          </div>

           
          <div class="card mb-3">
            <div class="card-header">
              <b>Revisions </b></div>
            <div class="card-body">
              Submitted, 1 week ago <a href="#">(January 9, 2019)</a><br>
              Rejected, 1 week ago <a href="#">(January 9, 2019)</a><br>
              Administrator, 1 week ago <a href="#">(January 9, 2019)</a><br>
              Administrator, 1 week ago <a href="#">(January 9, 2019)</a>
            </div>
          </div> 

        </div>
      <div class="col-xl-3 col-sm-12 mb-12">

          <div class="card mb-3">
            <div class="card-header">
              <i class="fas fa-table"></i>
              <b>Publish</b></div>
            <div class="card-body">
              <i class="fa fa-fw fa-database"></i> Status:
              <div style="height: 5px"></div>
              <select class="btn btn-basic cbutton" id="rstatus">
                <option>Draft</option>
                <option>Submitted</option>
                <option>Received</option>
                <option>Reviewed</option>
                <option>On hold</option>
                <option>Rejected</option>
                <option>Posted</option>
                <option>Archived</option>
              </select>
          <div style="height: 10px"></div>
          <script src="js/jquery-3.3.1.min.js"></script>
            <script src="js/gijgo.min.js" type="text/javascript"></script>
            <link href="css/gijgo.min.css" rel="stylesheet" type="text/css" />
            <table>
              <tr>
              <td><i class="fa fa-fw fa-calendar"></i> Published on:
              <div style="height: 5px"></div> </td>
              </tr>
              <tr>
              <td><input id="datepicker"  readonly="readonly"  width="150" class="cbutton" id="pdate" /></td>
              </tr>
            </table>
            
            </div>
            <div class="card-header">
              <button class="btn btn-info" style="float: right;width: ">Update</button></div>
          </div>


          <div class="card mb-3">
            <div class="card-header">
              <b>Implementation Schedule</b></div>
            <div class="card-body">
                Planned Start Date:<br>
              <div style="height: 5px"></div>
                <?php                
                        $date=date_create($startDate);
                ?>
                <input id="datepicker2" width="150" class="cbutton" readonly="readonly" value="<?php echo date_format($date,"m/d/Y") ?>" />


                <div style="height: 10px"></div>
                 Planned Completion Date:<br>
              <div style="height: 5px"></div>
                <input id="datepicker3" width="150" class="cbutton" readonly="readonly" />


                <div style="height: 10px"></div>
                 Duration:<br>
              <div style="height: 5px"></div>
                <input type="number" min="1" width="150" max="12" class="cbutton form-control"/>
            </div>
            <input type="hidden" name="" id="mtype">
          </div>
          <script>
               $('#datepicker2').datepicker({
                    uiLibrary: 'bootstrap4'
                });
               $('#datepicker3').datepicker({
                    uiLibrary: 'bootstrap4'
                });
               $('#act1').datepicker({
                    uiLibrary: 'bootstrap4'
                });
               $('#act2').datepicker({
                    uiLibrary: 'bootstrap4'
                });
                $('#datepicker').datepicker({
                    uiLibrary: 'bootstrap4'
                });
            </script>
          

          <div class="card mb-3">
            <div class="card-header">
              <b>Source of Fund</b></div>
            <div class="card-body">
               <select class="btn btn-basic cbutton" id="rstatus"  style="">
                  <option>- Select Source of Fund -</option>
                  <option>PCHRD</option>
                  <option>Counter Part</option>
                  <option>Other Sources</option>
                </select>
                <div style="height: 20px"></div>
                *<b>Note:</b> <i>Counterpart funding from the implementing agency is a requirement (at least 15% counterpart contribution in cash or in-kind)</i>
            </div>
          </div>

         
      </div>

      </div>
    </form>
    </div>
        <!-- /.container-fluid -->
<?php  
    include('includes/footer.php');
?>