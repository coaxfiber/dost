<?php  
    include('includes/header.php');

    include('includes/style-switch.php');
    include('includes/popups.php');
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
<style type="text/css">
  /* Style the form */
#regForm {
  background-color: #ffffff;
  margin: 100px auto;
  padding: 40px;
  width: 70%;
  min-width: 300px;
}


/* Hide all steps by default: */
.tab {
  display: none;
}

/* Make circles that indicate the steps of the form: */
.step {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbbbbb;
  border: none; 
  border-radius: 50%;
  display: inline-block;
  opacity: 0.5;
}

/* Mark the active step: */
.step.active {
  opacity: 1;
}

/* Mark the steps that are finished and valid: */
.step.finish {
  background-color: #4CAF50;
}

.hov2:hover,.hov:hover > *,.hov2:hover *{
  background-color: #17a2b8;
 color: white !important;
}
.hov{
  margin: 20px;
 
}
.hov > *{
  color: black !important;
}
{
}
</style>
<!-- Modal -->
<div class="container-fluid">
  <form method="POST" action="engine.php">
          <!-- Breadcrumbs-->
    <div class="row">
    <div class="col-xl-12 col-sm-12 mb-12">
          <div class="card mb-3">
            <div class="card-header">
              <h4>Add New Proposal</h4>DOST Form</div>
            <div class="card-body">
              <form id="regForm" action="">
                
                <div class="tab">
                    <table  style="width:100%">
                      <tr>
                        <td >
                          Title:
                          <button type="button" class="btn btn-info btn-sm button5"  data-toggle="modal" data-target="#title" >?</button>
                          <div style="height: 10px"></div>
                          <input type="text" class="form-control" required="required" id="ptitle" placeholder="e.g. Looking Towards an Economic Recovery" required >
                        </td>
                        <td>
                        </td>
                      </tr>
                    </table>

                  <div style="height: 10px"></div>
                  Select Proposal type:
                  <table style="width:100%">
                    <tr>
                      <td  class="hov2" style="height: 200px; width: 50%">
                        <center>
                          <a href="javascript:void(0)" class="hov" onclick="nextPrev(1)">
                          <h2>
                            Program
                          </h2>
                          <p style="padding-right: 20px;padding-left: 20px;">
                            A set of interrelated studies or a component of a program to meet pre-determined
                          </p>
                          <p>(Form 1A)</p>
                          </a>
                        </center>
                      </td>
                      <td  class="hov2">
                        <center>
                          <a href="javascript:void(0)" class="hov" onclick="nextPrev(1)">
                        <h2>
                            Project
                          </h2>
                          <p style="padding-right: 20px;padding-left: 20px;">
                          A set of interrelated studies to meet pre-determined objective within a specific time frame.
                        </p>
                          <p>(Form 1B)</p>
                      </a>
                      </center>
                      </td>
                    </tr>
                  </table>
                </div>

                <div class="tab">
                    <div id="program">
                    <table  style="width:100%">
                        <tr>
                          <td style="width: 60%;">
                              Program Title:
                                    <div style="height: 10px"></div>
                                    <input type="text" class="form-control" required="required" id="program-title" placeholder="e.g. SAMPLEINPUT" readonly="readonly">
                          </td>
                          <td style="padding-left: 15px">
                            
                              Total Duration:
                                    <div style="height: 10px"></div>
                                    <input type="number" min="0" class="form-control" required="required" id="title" style="width: 70px;display: inline;" max="99" readonly value="0" > Month(s)
                          </td>
                          <td>
                          </td>
                        </tr>
                      </table>
                     <table  style="width:100%">
                        <tr>
                          <td style="width: 50%;">
                              Project Title:
                                    <div style="height: 10px"></div>
                                    <input type="text" class="form-control" required="required" id="title"  placeholder="e.g. SAMPLEINPUT" >
                          </td>
                          <td style="padding-left: 15px;width: 180px;">
                            
                              Duration:
                                    <div style="height: 10px"></div>
                                    <input type="number" min="0" class="form-control" required="required" style="width: 70px;display: inline;" max="99"> Month(s)
                          </td>
                          <td>
                              &nbsp;
                                    <div style="height: 10px"></div>
                            <a href="javascript:void(0)">Add 1B Form</a>
                          </td>
                          <td>
                              &nbsp;
                                    <div style="height: 10px"></div>
                              <a class="btn btn-basic cbutton" href="javascript:void(0)"  onClick="changeIt()"><i class="fas fa-plus-circle"></i> Add Project</a>
                          </td>
                        </tr>
                      </table>
                      <div id="createTextbox1"></div>
                     <hr>
                                  Executive Summary:
                                  <button type="button" class="btn btn-info btn-sm button5"  data-toggle="modal" data-target="#executives" >?</button>
                                  <div style="height: 10px"></div>
                                  <textarea class="form-control" style="height: 100px" id="sig" required="required"  placeholder="e.g. SAMPLEINPUT" ></textarea>
                    </div><!-- program-->


                  <div style="height: 20px"></div>
                  <div style="float:right;">
                    <button type="button" onclick="nextPrev(-1)" class="btn btn-primary">Previous</button>
                    <button type="button" onclick="nextPrev(1)" class="btn btn-primary">Next</button>
                  </div>
                </div>

                <div class="tab">
                  <h5>Budget Summary <button type="button" class="btn btn-info btn-sm button5"  data-toggle="modal" data-target="#budgetsummary" >?</button></h5>

                  <div style="height: 20px"></div>
                  <div style="float:right;">
                    <button type="button" onclick="nextPrev(-1)" class="btn btn-primary">Previous</button>
                    <button type="button" onclick="nextPrev(1)" class="btn btn-primary">Next</button>
                  </div>
                </div>

                <div class="tab">Login Info:
                  <p><input placeholder="Username..." oninput="this.className = ''"></p>
                  <p><input placeholder="Password..." oninput="this.className = ''"></p>

                  <div style="height: 20px"></div>
                  <div style="float:right;">
                    <button type="button" onclick="nextPrev(-1)" class="btn btn-primary">Previous</button>
                    <button type="button" onclick="nextPrev(1)" class="btn btn-primary">Next</button>
                  </div>
                </div>


                <!-- Circles which indicates the steps of the form: -->
                <div style="text-align:center;margin-top:40px;">
                  <span class="step"></span>
                  <span class="step"></span>
                  <span class="step"></span>
                </div>

              </form>
     

         
          </div>

         </div>
    </form>
</div>
<script type="text/javascript">
</script>
<script type="text/javascript">

  var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) 
  { 
    alert("Please Fill all the required inputs")
    return false;
  }
  
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab==1) {
    $('#program-title').val($('#ptitle').val());
  }
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

</script>



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

        <!-- /.container-fluid -->
<?php  
    include('includes/footer.php');
?>