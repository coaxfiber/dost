<?php  
    include('includes/header.php');

    include('includes/style-switch.php');
    include('includes/popups.php');
?>

<script type="text/javascript">
  var x = 0;
  function changeIt()
    {
      this.x++;
      document.getElementById("createTextbox"+this.x).innerHTML = '<table  style="width:100%" id="rem'+this.x+'">'+
                      '<tr>'+
                        '<td style="width: 60%;">'+
                            'Project Title:'+
                                  '<div style="height: 10px"></div>'+
                                  '<input type="text" class="form-control" required="required" id="title" name="projtitle[]">'+
                        '</td>'+
                        '<td style="padding-left: 15px;width: 165px;">'+
                            'Duration:'+
                                  '<div style="height: 10px"></div>'+
                                  '<input type="number" min="0" class="form-control" required="required" id="title" '+
                                  'style="width: 70px;display: inline;" max="99" name="mons[]"> Month(s)'+
                        '</td><td>'+
                            '&nbsp;'+
                                  '<div style="height: 10px"></div>'+
                            '<a class="btn btn-danger" style="color:white;" onClick="removeIt('+this.x+')"><i class="fas fa-plus-circle" ></i> Remove</a>'+
                        '</td>'+
                      '</tr>'+
                    '</table><div id="createTextbox'+(this.x+1)+'"></div>';
    }
    function removeIt(go)
    {
      var elem = document.getElementById("rem"+go);
      elem.parentNode.removeChild(elem);
    }
</script>
<!-- Modal -->

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
    <div class="col-xl-12 col-sm-12 mb-12">
          <div class="card mb-3">
            <div class="card-header">
              
          <h4>Add New Proposal</h4>DOST Form No. 2A (Rev 0 / 1-02-08)</div>
            <div class="card-body">
                <!--<table>
                  <tr>
                    <td>&nbsp;Proposal Type:
                      <button type="button" class="btn btn-info btn-sm button5"  data-toggle="modal" data-target="#title" >?</button>&nbsp;&nbsp;&nbsp;
                    </td>
                    <td>
                      <div class="switch switch-blue">
                        <input type="radio" class="switch-input" name="elem-usl" value="no" id="elem-usl-n" checked="">
                        <label for="elem-usl-n" class="switch-label switch-label-off">Program</label>
                        <input type="radio" class="switch-input" name="elem-usl" value="yes" id="elem-usl-y">
                        <label for="elem-usl-y" class="switch-label switch-label-on">Project</label>
                        <span class="switch-selection"></span>
                      </div>
                    </td>
                  </tr>
                </table>-->
                 
                    <table  style="width:100%">
                      <tr>
                        <td style="width: 60%;">
                            Program Title:
                                  <div style="height: 10px"></div>
                                  <input type="text" class="form-control" required="required" id="program-title" placeholder="e.g. SAMPLEINPUT" >
                        </td>
                        <td style="padding-left: 15px">
                          
                            Total Duration:
                                  <div style="height: 10px"></div>
                                  <input type="number" min="0" class="form-control" required="required" id="title" style="width: 70px;display: inline;" max="99" readonly  placeholder="e.g. SAMPLEINPUT" > Month(s)
                        </td>
                        <td>
                        </td>
                      </tr>
                    </table>
                   <table  style="width:100%">
                      <tr>
                        <td style="width: 60%;">
                            Project Title:
                                  <div style="height: 10px"></div>
                                  <input type="text" class="form-control" required="required" id="title"  placeholder="e.g. SAMPLEINPUT" >
                        </td>
                        <td style="padding-left: 15px;width: 165px;">
                          
                            Duration:
                                  <div style="height: 10px"></div>
                                  <input type="number" min="0" class="form-control" required="required" id="title" style="width: 70px;display: inline;" max="99"> Month(s)
                        </td><td>
                            &nbsp;
                                  <div style="height: 10px"></div>
                            <a class="btn btn-basic cbutton" href="javascript:void(0)"  onClick="changeIt()"><i class="fas fa-plus-circle"></i> Add</a>
                        </td>
                      </tr>
                    </table>
                    <div id="createTextbox1"></div>

                    <!--<input type="submit" name="" value="test">-->
                   <hr>

                        <div class="row">
                            <div class="col-xl-6 col-sm-12 mb-12">
                              <div class="card mb-6">
                                  <div class="card-header">
                                    Cooperating Agencies:
                                  </div>
                                  <div class="card-body">
                                     <input type="text" class="form-control" required="required" id="title"  placeholder="e.g. SAMPLEINPUT" >
                                  </div>
                              </div>
                            </div>
                            <div class="col-xl-6 col-sm-12 mb-12">
                              <div class="card mb-6">
                                  <div class="card-header">
                                    Research & Development Station
                                  </div>
                                  <div class="card-body">
                                     <input type="text" class="form-control" required="required" id="title"  placeholder="e.g. SAMPLEINPUT" >
                                  </div>
                              </div>
                            </div>
                       </div>
                                  <div style="height: 20px"></div>

                       <div class="row">

                            <div class="col-xl-6 col-sm-12 mb-12">
                              <div class="card mb-3">
                                <div class="card-header">
                                  <b>Classification</b></div>
                                <div class="card-body">
                                  <div class="row">
                                      <div class="col-xl-6 col-sm-12 mb-12">
                                        <div class="funkyradio">
                                         <b>Research:</b>
                                          <div style="height: 10px"></div>
                                          <div class="funkyradio-default">
                                                <input type="checkbox" name="radio" id="radio1" value="" />
                                                <label for="radio1">Biotechnology </label>
                                            </div>
                                            <div class="funkyradio-primary">
                                                <input type="checkbox" name="radio" id="radio2" checked/>
                                                <label for="radio2">ICT</label>
                                            </div>
                                            <div class="funkyradio-success">
                                                <input type="checkbox" name="radio" id="radio3" />
                                                <label for="radio3">Health Products/Pharmaceutical </label>
                                            </div>
                                            <div class="funkyradio-danger">
                                                <input type="checkbox" name="radio" id="radio4" />
                                                <label for="radio4">Basic Research</label>
                                            </div>
                                            
                                        </div>
                                       </div>
                                      <div class="col-xl-6 col-sm-12 mb-12">
                                        <div class="funkyradio">
                                         <b>Development:</b>
                                          <div style="height: 10px"></div>
                                          <div class="funkyradio-default">
                                                <input type="checkbox" name="radio" id="radio1" value="" />
                                                <label for="radio1">Alternative Energy</label>
                                            </div>
                                            <div class="funkyradio-primary">
                                                <input type="checkbox" name="radio" id="radio2" checked/>
                                                <label for="radio2">Environment</label>
                                            </div>
                                        </div>
                                       </div>
                                   </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-xl-6 col-sm-12 mb-12">
                            <div class="card mb-3">
                                <div class="card-header">
                                  <b>Mode of Implementation</b></div>
                                <div class="card-body">
                                          <div class="funkyradio-default">
                                                <input type="checkbox" name="radio" id="radio1" value="" />
                                                <label for="radio1">Single Agency</label>
                                            </div>
                                            <div class="funkyradio-primary">
                                                <input type="checkbox" name="radio" id="radio2" checked/>
                                                <label for="radio2">Multi Agency</label>
                                            </div>
                                </div>
                            </div>
                          </div>
                       </div>

                        <div class="row">
                            <div class="col-xl-6 col-sm-12 mb-12">
                              <div class="card mb-6">
                                  <div class="card-header">
                                    Sector/Commodity
                                  </div>
                                  <div class="card-body">
                                     <input type="text" class="form-control" required="required" id="title"  placeholder="e.g. SAMPLEINPUT" >
                                  </div>
                              </div>
                            </div>
                            <div class="col-xl-6 col-sm-12 mb-12">
                              <div class="card mb-6">
                                  <div class="card-header">
                                    Dicipline
                                  </div>
                                  <div class="card-body">
                                     <input type="text" class="form-control" required="required" id="title"  placeholder="e.g. SAMPLEINPUT" >
                                  </div>
                              </div>
                            </div>
                       </div>

                                  <div style="height: 20px"></div>
                                  Significance:
                                  <button type="button" class="btn btn-info btn-sm button5"  data-toggle="modal" data-target="#significance" >?</button>
                                  <div style="height: 10px"></div>
                                  <textarea class="form-control" style="height: 100px" id="sig" required="required"  placeholder="e.g. SAMPLEINPUT" ></textarea>

                                  <div style="height: 20px"></div>
                                  Objectives:
                                  <button type="button" class="btn btn-info btn-sm button5"  data-toggle="modal" data-target="#objectives" >?</button>
                                  <div style="height: 10px"></div>
                                  <textarea class="form-control" style="height: 100px" id="obj" required="required" placeholder="e.g. SAMPLEINPUT" ></textarea>

                                  <div style="height: 20px"></div>
                                  Expected Output:
                                  <button type="button" class="btn btn-info btn-sm button5"  data-toggle="modal" data-target="marerethodology" >?</button>
                                  <div style="height: 10px"></div>
                                  <textarea class="form-control" style="height: 100px" id="obj" required="required" placeholder="e.g. SAMPLEINPUT" ></textarea>
                                  <div style="height: 20px"></div>

                                  Methodology:
                                  <button type="button" class="btn btn-info btn-sm button5"  data-toggle="modal" data-target="#methodology" >?</button>
                                  <div style="height: 10px"></div>
                                  <textarea class="form-control" style="height: 100px" id="obj" required="required" placeholder="e.g. SAMPLEINPUT" ></textarea>


         
          </div>

         </div>
    </form>
</div>
        <!-- /.container-fluid -->
<?php  
    include('includes/footer.php');
?>